// audio-utils.js
export async function blobToAudioBuffer(blob) {
    const array = await blob.arrayBuffer()
    const ac = new (window.AudioContext || window.webkitAudioContext)()
    return await ac.decodeAudioData(array)
  }
  
  export function encodeWavFromAudioBuffer(audioBuffer) {
    const numChan = audioBuffer.numberOfChannels
    const sampleRate = audioBuffer.sampleRate
    const samples = audioBuffer.length
    // interleave to 16-bit PCM
    let interleaved
    if (numChan === 2) {
      const L = audioBuffer.getChannelData(0)
      const R = audioBuffer.getChannelData(1)
      interleaved = new Int16Array(samples * 2)
      for (let i = 0, j = 0; i < samples; i++, j += 2) {
        interleaved[j]   = Math.max(-1, Math.min(1, L[i])) * 0x7fff
        interleaved[j+1] = Math.max(-1, Math.min(1, R[i])) * 0x7fff
      }
    } else {
      const M = audioBuffer.getChannelData(0)
      interleaved = new Int16Array(samples)
      for (let i = 0; i < samples; i++) {
        interleaved[i] = Math.max(-1, Math.min(1, M[i])) * 0x7fff
      }
    }
  
    const blockAlign = (numChan * 16) >> 3
    const byteRate = sampleRate * blockAlign
    const dataSize = interleaved.byteLength
    const buffer = new ArrayBuffer(44 + dataSize)
    const view = new DataView(buffer)
  
    const writeStr = (off, str) => { for (let i=0;i<str.length;i++) view.setUint8(off+i, str.charCodeAt(i)) }
  
    let o = 0
    writeStr(o, 'RIFF');                 o += 4
    view.setUint32(o, 36 + dataSize, true); o += 4
    writeStr(o, 'WAVE');                 o += 4
    writeStr(o, 'fmt ');                 o += 4
    view.setUint32(o, 16, true);           o += 4 // PCM chunk size
    view.setUint16(o, 1, true);            o += 2 // PCM
    view.setUint16(o, numChan, true);      o += 2
    view.setUint32(o, sampleRate, true);   o += 4
    view.setUint32(o, byteRate, true);     o += 4
    view.setUint16(o, blockAlign, true);   o += 2
    view.setUint16(o, 16, true);           o += 2 // bits per sample
    writeStr(o, 'data');                   o += 4
    view.setUint32(o, dataSize, true);     o += 4
  
    new Uint8Array(buffer, 44).set(new Uint8Array(interleaved.buffer))
    return new Blob([buffer], { type: 'audio/wav' })
  }
  
  export function buildPeaks(audioBuffer, buckets = 120) {
    const ch = audioBuffer.getChannelData(0) // mono for peaks
    const len = ch.length
    const size = Math.floor(len / buckets)
    const peaks = []
    for (let i = 0; i < buckets; i++) {
      const start = i * size
      const end = i === buckets - 1 ? len : (i + 1) * size
      let min = 1, max = -1
      for (let j = start; j < end; j++) {
        const v = ch[j]
        if (v < min) min = v
        if (v > max) max = v
      }
      peaks.push({ min, max })
    }
    return peaks
  }
  