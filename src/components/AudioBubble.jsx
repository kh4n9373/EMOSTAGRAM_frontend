// AudioBubble.jsx
import React, { useEffect, useRef, useState } from 'react'

export default function AudioBubble({ src, duration, peaks }) {
  const audioRef = useRef(null)
  const canvasRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // 0..1

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const t = () => setProgress(a.currentTime / (a.duration || duration || 1))
    a.addEventListener('timeupdate', t)
    a.addEventListener('ended', () => setPlaying(false))
    return () => { a.removeEventListener('timeupdate', t) }
  }, [duration])

  useEffect(() => { draw(peaks, progress) }, [peaks, progress])

  const draw = (peaks, prog) => {
    const c = canvasRef.current; if (!c) return
    const ctx = c.getContext('2d')
    const w = c.width, h = c.height
    ctx.clearRect(0,0,w,h)
    const mid = h/2
    const n = peaks.length
    const barW = w / n
    for (let i=0;i<n;i++){
      const {min, max} = peaks[i]
      const y1 = mid + min*mid
      const y2 = mid + max*mid
      const x = i * barW
      ctx.fillStyle = i/n <= prog ? '#ffffff' : 'rgba(255,255,255,.7)'
      const bw = Math.max(2, barW*0.7)
      ctx.fillRect(x+(barW-bw)/2, y1, bw, y2-y1)
    }
  }

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play(); setPlaying(true) }
  }

  const onSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const p = Math.min(1, Math.max(0, (e.clientX - rect.left)/rect.width))
    const a = audioRef.current
    const dur = a.duration || duration || 1
    a.currentTime = dur * p
    setProgress(a.currentTime/dur)
  }

  return (
    <div style={{
      display:'flex', alignItems:'center', gap:12,
      background:'#2563eb', color:'#fff',
      borderRadius:16, padding:'10px 12px', minWidth:260, maxWidth:420
    }}>
      <button onClick={toggle} aria-label={playing?'Pause':'Play'}
        style={{ width:36, height:36, borderRadius:'50%', background:'#fff', color:'#2563eb', border:'none', cursor:'pointer', display:'grid', placeItems:'center', fontWeight:700 }}>
        {playing ? '❚❚' : '►'}
      </button>

      <div onClick={onSeek} style={{ flex:1, cursor:'pointer' }}>
        <canvas ref={canvasRef} width={240} height={36} style={{ width:'100%', height:36, display:'block' }} />
      </div>

      <span style={{ background:'#fff', color:'#2563eb', padding:'3px 8px', borderRadius:999, fontVariantNumeric:'tabular-nums' }}>
        {format(progress * (duration || 0) || 0)}/{format(duration || 0)}
      </span>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  )
}

const format = (s) => {
  const mm = String(Math.floor(s/60)).padStart(1,'0')
  const ss = String(Math.floor(s%60)).padStart(2,'0')
  return `${mm}:${ss}`
}
