// VoiceRecorder.jsx
import React, { useEffect, useRef, useState } from 'react'
import { blobToAudioBuffer, encodeWavFromAudioBuffer, buildPeaks } from './audio-utils'

export default function VoiceRecorder({ onSend }) {
  const [state, setState] = useState('idle') // idle | recording | preview | playing
  const [error, setError] = useState(null)
  const [mediaBlob, setMediaBlob] = useState(null)  // original (webm/ogg)
  const [wavBlob, setWavBlob] = useState(null)      // converted
  const [duration, setDuration] = useState(0)
  const [peaks, setPeaks] = useState([])
  const [blobUrl, setBlobUrl] = useState(null)

  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])
  const streamRef = useRef(null)
  const audioRef = useRef(null)
  const timerRef = useRef(null)
  const startedAtRef = useRef(0)

  useEffect(() => () => {
    if (blobUrl) URL.revokeObjectURL(blobUrl)
    if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop())
  }, [blobUrl])

  const start = async () => {
    setError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const mr = new MediaRecorder(stream, { mimeType: 'audio/webm' })
      chunksRef.current = []
      mr.ondataavailable = (e) => { if (e.data.size) chunksRef.current.push(e.data) }
      mr.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        setMediaBlob(blob)
        // convert to WAV + peaks
        const buf = await blobToAudioBuffer(blob)
        const wav = encodeWavFromAudioBuffer(buf)
        setWavBlob(wav)
        setDuration(buf.duration)
        setPeaks(buildPeaks(buf, 120))
        const url = URL.createObjectURL(wav)
        setBlobUrl(url)
        setState('preview')
      }
      mr.start(100) // gather chunks
      mediaRecorderRef.current = mr
      startedAtRef.current = Date.now()
      setState('recording')

      // simple recording timer
      timerRef.current = setInterval(() => {
        const sec = Math.floor((Date.now() - startedAtRef.current) / 1000)
        setDuration(sec)
      }, 200)
    } catch (e) {
      setError(e.message || 'Microphone error')
    }
  }

  const stop = () => {
    const mr = mediaRecorderRef.current
    if (!mr) return
    clearInterval(timerRef.current); timerRef.current = null
    mr.stop()
    mediaRecorderRef.current = null
    // stop mic stream
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null
  }

  const play = () => {
    if (!blobUrl) return
    const el = audioRef.current
    el.currentTime = 0
    el.play()
    setState('playing')
    el.onended = () => setState('preview')
  }

  const pause = () => {
    audioRef.current?.pause()
    setState('preview')
  }

  const reset = () => {
    setMediaBlob(null); setWavBlob(null); setDuration(0); setPeaks([]); setBlobUrl(null)
    setState('idle'); setError(null)
  }

  const handleSend = () => {
    if (!wavBlob) return
    onSend?.({
      blob: wavBlob,
      url: blobUrl,
      duration,
      peaks
    })
    reset()
  }

  return (
    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
      {state === 'idle' && (
        <button onClick={start} style={btn('start')}>● Record</button>
      )}
      {state === 'recording' && (
        <>
          <button onClick={stop} style={btn('stop')}>■ Stop</button>
          <span style={pill()}>{format(duration)}</span>
        </>
      )}
      {state === 'preview' && (
        <>
          <button onClick={play} style={btn()}>▶︎ Play</button>
          <button onClick={handleSend} style={btn('primary')}>Send</button>
          <button onClick={reset} style={btn('ghost')}>Discard</button>
          <span style={pill()}>{format(duration)}</span>
          <audio ref={audioRef} src={blobUrl} preload="metadata" />
        </>
      )}
      {state === 'playing' && (
        <>
          <button onClick={pause} style={btn('stop')}>⏸ Pause</button>
          <span style={pill()}>{format(duration)}</span>
          <audio ref={audioRef} src={blobUrl} />
        </>
      )}
      {error && <span style={{ color:'#ef4444', marginLeft:8 }}>{error}</span>}
    </div>
  )
}

const btn = (type) => ({
  background: type==='primary' ? '#0F172A' : type==='stop' ? '#ef4444' : type==='ghost' ? '#fff' : '#2563eb',
  color: type==='ghost' ? '#111' : '#fff',
  border: `1px solid ${type==='ghost' ? '#e5e7eb' : 'transparent'}`,
  padding:'8px 12px', borderRadius:999, cursor:'pointer'
})
const pill = () => ({ background:'#f1f5f9', border:'1px solid #e5e7eb', borderRadius:999, padding:'4px 10px', fontVariantNumeric:'tabular-nums' })
const format = (s) => {
  const mm = String(Math.floor(s/60)).padStart(1,'0')
  const ss = String(Math.floor(s%60)).padStart(2,'0')
  return `${mm}:${ss}`
}
