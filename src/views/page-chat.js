import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
// import VoiceRecorder from '../components/VoiceRecorder'
// import AudioBubble from '../components/AudioBubble'
/* ==== Icons ==== */
const IconPaperclip = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <path d="M21 11L10 22a5 5 0 0 1-7-7l11-11a3 3 0 0 1 4 4L8 19a1.5 1.5 0 0 1-2-2l9-9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconMic = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 19v3" />
  </svg>
)

const IconCopy = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.7"/>
    <rect x="4" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
)

const IconThumbUp = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 10V5a2 2 0 0 0-2-2l-3 7H5a2 2 0 0 0-2 2v7h10.3a3 3 0 0 0 2.9-2.1l2.1-6.2A2 2 0 0 0 16.4 9H14z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)

const IconThumbDown = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M10 14v5a2 2 0 0 0 2 2l3-7h4a2 2 0 0 0 2-2V5H10.7a3 3 0 0 0-2.9 2.1L5.7 13.3A2 2 0 0 0 7.6 16H10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)

/*  Buttons (copy/like/dislike) */
const actionBtnStyle = (active=false) => ({
  background: active ? '#111827' : '#fff',
  border: `1px solid ${active ? '#111827' : '#e5e7eb'}`,
  color: active ? '#ffffff' : '#6b7280',
  padding: '6px 10px',
  borderRadius: 10,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  cursor: 'pointer',
  boxShadow: active ? '0 2px 10px rgba(0,0,0,0.15)' : '0 1px 4px rgba(0,0,0,0.04)',
  userSelect: 'none',
  transition: 'all .15s ease'
})

/* ==== Avatar ==== */
const Avatar = () => (
  <div style={{ width: 64, height: 64, borderRadius: 12, background: '#e5e7eb', display: 'grid', placeItems: 'center' }}>
    <span style={{ fontWeight: 700 }}>E</span>
  </div>
)

/* ==== Lightbox ==== */
const Lightbox = ({ src, alt, open, onClose }) => {
  // khoá scroll nền khi mở
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(15,23,42,.55)',
        backdropFilter: 'blur(2px)',
        display: 'grid', placeItems: 'center',
        padding: 16
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute', top: 16, right: 16,
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(255,255,255,.9)', border: '1px solid #e5e7eb',
          display: 'grid', placeItems: 'center', fontWeight: 700, cursor: 'pointer'
        }}
      >×</button>

      <img
        src={src}
        alt={alt || 'preview'}
        style={{
          maxWidth: 'min(92vw, 1000px)',
          maxHeight: 'min(92vh, 1000px)',
          objectFit: 'contain',
          borderRadius: 16,
          boxShadow: '0 20px 60px rgba(0,0,0,.35)',
          background: '#0b0f19'
        }}
      />
    </div>
  )
}

/* ==== Message Bubble ==== */
const MessageBubble = ({ role, children, media, onImageLoad, onPreview, isStreaming = false }) => {
  const isUser = role === 'user'
  return (
    <div style={{ display: 'grid', justifyItems: isUser ? 'end' : 'start' }}>
      <div style={{
        maxWidth: 720,
        background: isUser ? '#111827' : '#ffffff',
        color: isUser ? 'white' : '#111827',
        border: isUser ? 'none' : '1px solid #e5e7eb',
        padding: media ? 8 : 12,
        borderRadius: 16,
        boxShadow: isUser ? '0 4px 14px rgba(0,0,0,0.15)' : '0 4px 14px rgba(0,0,0,0.06)',
        display: 'inline-block',
        width: 'fit-content',
        lineHeight: 1.6,
      }}>
        {media ? (
          <img
            src={media}
            alt="attachment"
            onLoad={onImageLoad}
            onClick={() => onPreview?.(media)}
            style={{ width: 260, borderRadius: 12, cursor: 'zoom-in', display: 'block' }}
          />
        ) : (
          <div style={{ whiteSpace: 'pre-wrap' }}>{children}</div>
        )}
      </div>
    </div>
  )
}

/* ==== Typing indicator bubble (iMessage/Messenger style) ==== */
const TypingBubble = () => {
  return (
    <div style={{ display: 'grid', justifyItems: 'start', marginBottom: 16 }}>
      <div style={{
        position: 'relative',
        background: '#ebeef2',
        height: 50,
        color: '#374151',
        border: '1px solid #e5e7eb',
        borderRadius: 20,
        padding: '10px 14px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#9ca3af', animation: 'typingDot 1.2s infinite ease-in-out' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#9ca3af', animation: 'typingDot 1.2s infinite ease-in-out .15s' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#9ca3af', animation: 'typingDot 1.2s infinite ease-in-out .3s' }} />

        {/* Tail */}
        <span style={{ position: 'absolute', left: -6, bottom: -2, width: 10, height: 10, borderRadius: '50%', background: '#ebeef2', border: '1px solid #e5e7eb' }} />
        <span style={{ position: 'absolute', left: -14, bottom: -6, width: 8, height: 8, borderRadius: '50%', background: '#ebeef2', border: '1px solid #e5e7eb' }} />
      </div>
    </div>
  )
}

/* ==== Auto Textarea ==== */
const AutoTextarea = React.forwardRef(function AutoTextarea(
  { value, onChange, onSend, placeholder, style },
  ref
) {
  const localRef = useRef(null)
  const textareaRef = ref || localRef

  const autoSize = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    const max = 240
    const h = Math.min(el.scrollHeight, max)
    el.style.height = h + 'px'
    el.style.overflowY = el.scrollHeight > max ? 'auto' : 'hidden'
  }

  useEffect(() => { autoSize() }, [value])

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return
      e.preventDefault()
      onSend?.()
    }
  }

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => { onChange(e); requestAnimationFrame(autoSize) }}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      rows={1}
      style={{
        flex: 1,
        background: 'transparent',
        color: '#111827',
        border: 'none',
        outline: 'none',
        padding: '12px 12px',
        fontSize: 18,
        lineHeight: '24px',
        minHeight: 44,
        resize: 'none',
        overflow: 'hidden',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        ...style,
      }}
      aria-label="Message input"
    />
  )
})

/* ==== Small toast ==== */
const Toast = ({ show, children }) => (
  <div aria-live="polite" style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', opacity: show ? 1 : 0, transition: 'opacity .2s ease', pointerEvents: 'none' }}>
    <div style={{ background: '#111827', color: 'white', padding: '6px 10px', borderRadius: 999, fontSize: 12, boxShadow: '0 6px 18px rgba(0,0,0,.18)' }}>{children}</div>
  </div>
)

/* ==== Main Page ==== */
const ChatPage = () => {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [mediaPreview, setMediaPreview] = useState(null)
  const [mediaFile, setMediaFile] = useState(null)
  const [recording, setRecording] = useState(false)

  const barRef = useRef(null)
  const barInnerRef = useRef(null)

  const [bottomPad, setBottomPad] = useState(96)
  const [ratings, setRatings] = useState({})
  const [copiedId, setCopiedId] = useState(null)
  const [streamingText, setStreamingText] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState(null)

  // ---- Anchor & scroll helpers ----
  const anchorMsgIdRef = useRef(null)
  const scrollToMsgById = (id, behavior = 'smooth', offset = 16) => {
    const el = document.querySelector(`[data-mid="${id}"]`)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior })
  }

  /* ==== Padding theo chiều cao input bar ==== */
  useEffect(() => {
    if (!barRef.current) return
    const update = () => {
      const h = barRef.current?.offsetHeight ?? 0
      setBottomPad(h + 16)
    }
    const ro = new ResizeObserver(update)
    ro.observe(barRef.current)
    window.addEventListener('resize', update)
    update()
    return () => { ro.disconnect(); window.removeEventListener('resize', update) }
  }, [])

  useEffect(() => {
    const el = barInnerRef.current; if (!el) return
    const compute = () => {
      const rect = el.getBoundingClientRect()
      const cs = window.getComputedStyle(el)
      const margin = parseFloat(cs.marginTop) + parseFloat(cs.marginBottom)
      setBottomPad(rect.height + margin + 8)
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    window.addEventListener('resize', compute)
    return () => { ro.disconnect(); window.removeEventListener('resize', compute) }
  }, [])

  /* ==== Copy/Rate ==== */
  const handleRate = (id, val) => setRatings(prev => ({ ...prev, [id]: prev[id] === val ? undefined : val }))
  const handleCopy = async (id, textVal) => {
    try { await navigator.clipboard.writeText(textVal); setCopiedId(id); setTimeout(() => setCopiedId(null), 1200) } catch {}
  }
  // const handleSendAudio = ({ blob, url, duration, peaks }) => {
  //   const id = Date.now()
  //   // anchor tới message audio mới
  //   anchorMsgIdRef.current = id
  //   // thêm message audio vào list
  //   setMessages(m => m.concat({
  //     id,
  //     role: 'user',
  //     audio: { url, duration, peaks }   // <— AudioBubble sẽ dùng 3 field này
  //   }))
  //   // sau render: nhảy viewport tới message audio
  //   setTimeout(() => {
  //     if (anchorMsgIdRef.current) scrollToMsgById(anchorMsgIdRef.current, 'smooth')
  //   }, 0)
  // }
  /* ==== Send ==== */
  const sendMessage = async () => {
    if (!text && !mediaPreview) return

    const now = Date.now()
    const newMsgs = []
    if (mediaPreview) newMsgs.push({ id: now, role: 'user', media: mediaPreview })
    if (text) newMsgs.push({ id: now + 1, role: 'user', text })

    const userAnchorId = newMsgs[newMsgs.length - 1].id
    anchorMsgIdRef.current = userAnchorId

    setMessages(m => m.concat(newMsgs))
    setText('')
    setMediaPreview(null)
    setMediaFile(null)

    setTimeout(() => {
      if (anchorMsgIdRef.current) scrollToMsgById(userAnchorId, 'smooth')
    }, 0)

    // Create assistant message for fake streaming
    const assistantId = Date.now() + 2
    anchorMsgIdRef.current = assistantId
    setMessages(m => m.concat({ id: assistantId, role: 'assistant', text: '' }))
    setIsStreaming(true)

    try {
      // Use regular chat endpoint for faster response
      const res = await fetch('/api/v1/chat/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ content: text || '[media]' }),
      })

      if (!res.ok) throw new Error('Network response was not ok')
      
      const j = await res.json()
      const fullReply = j?.message || 'Chào bạn! Bạn muốn hỏi thêm gì về Emostagram?'
      const genTimeSec = j?.data?.gen_time_sec
      
      // Fake streaming effect - show text word by word
      const words = fullReply.split(' ')
      let currentText = ''
      
      for (let i = 0; i < words.length; i++) {
        currentText += (i > 0 ? ' ' : '') + words[i]
        
        // Update message with current text
        setMessages(m => m.map(msg => 
          msg.id === assistantId 
            ? { ...msg, text: currentText }
            : msg
        ))
        
        // Small delay to make streaming visible
        await new Promise(resolve => setTimeout(resolve, 50))
      }
      
      // Streaming finished
      setIsStreaming(false)
      setTimeout(() => {
        if (anchorMsgIdRef.current) scrollToMsgById(assistantId, 'smooth')
      }, 0)

      // Attach generation time to this assistant message so UI can render it
      if (typeof genTimeSec === 'number') {
        setMessages(m => m.map(msg =>
          msg.id === assistantId
            ? { ...msg, genTimeSec }
            : msg
        ))
      }
      
    } catch (error) {
      console.error('Chat error:', error)
      setIsStreaming(false)
      // Update the assistant message with error
      setMessages(m => m.map(msg => 
        msg.id === assistantId 
          ? { ...msg, text: 'Sorry, something went wrong. Please try again.' }
          : msg
      ))
    }
  }

  // Voice input
  const startVoice = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice input not supported in this browser'); return
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    const rec = new SR()
    rec.lang = 'vi-VN'
    rec.interimResults = false
    rec.maxAlternatives = 1
    setRecording(true)
    rec.onresult = (e) => {
      const t = e.results[0][0].transcript
      setText(prev => (prev ? prev + ' ' + t : t))
    }
    rec.onend = () => setRecording(false)
    rec.onerror = () => setRecording(false)
    rec.start()
  }

  const onPickMedia = (e) => {
    const f = e.target.files?.[0]; if (!f) return
    const url = URL.createObjectURL(f)
    setMediaPreview(url)
    setMediaFile(f)
    // reset để chọn lại cùng file vẫn onChange
    e.target.value = ""
  }

  const showHero = messages.length === 0

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', color: '#111827' }}>
      <Helmet>
        <title>Chat - Emostagram</title>
        <style>{`
          @keyframes bounce {
            0%, 80%, 100% { 
              transform: translateY(2px);
              opacity: .6;
            }
            40% { 
              transform: translateY(-2px);
              opacity: 1;
            }
          }
          @keyframes typingDot {
            0%, 80%, 100% { 
              transform: translateY(2px);
              opacity: .55;
            }
            40% { 
              transform: translateY(-2px);
              opacity: 1;
            }
          }
        `}</style>
      </Helmet>

      {/* Lightbox overlay */}
      <Lightbox
        src={lightboxSrc}
        alt="image preview"
        open={lightboxOpen}
        onClose={() => { setLightboxOpen(false); setLightboxSrc(null) }}
      />

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '16px 16px 0 16px', display: 'grid', gap: 16 }}>
        {showHero ? (
          <div style={{ minHeight: '70vh', display: 'grid', alignContent: 'center', justifyItems: 'center', gap: 20 }}>
            <Avatar />
            <h1 style={{ marginTop: 8, fontSize: 36, fontWeight: 700 }}>Emostagram</h1>
            <div style={{ width: '100%', display: 'grid', justifyItems: 'center', gap: 12 }}>
              {mediaPreview && (
                <img src={mediaPreview} alt="preview" style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 14, boxShadow: '0 8px 26px rgba(0,0,0,0.12)' }} />
              )}
              <div style={{
                width: 'min(92vw, 760px)',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 18,
                boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: 8,
                gap: 8
              }}>
                <button
                  aria-label="attach"
                  onClick={() => document.getElementById('hero-file')?.click()}
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280',
                    display: 'grid', placeItems: 'center',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    flexShrink: 0
                  }}
                >
                  <IconPaperclip />
                </button>
                <input id="hero-file" accept="*/*" type="file" style={{ display: 'none' }} onChange={onPickMedia} />

                <AutoTextarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onSend={sendMessage}
                  placeholder="What do you want to know?"
                />

                <button
                  onClick={startVoice}
                  aria-label="voice"
                  title="Voice"
                  style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: '#0f172a', color: 'white', border: '1px solid #0f172a',
                    display: 'grid', placeItems: 'center',
                    boxShadow: '0 12px 28px rgba(2,6,23,0.35)',
                    flexShrink: 0
                  }}
                >
                  <IconMic />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Messages list */}
            <div
              style={{
                display: 'grid',
                gap: 6,
                padding: '0 8px',
                alignItems: 'start',
                gridAutoRows: 'max-content',
                margin: 0,
                paddingBottom: `calc(${bottomPad}px + env(safe-area-inset-bottom, 0px))`
              }}
            >
              {messages.map((m) => {
                const rated = ratings[m.id]
                return (
                  <div key={m.id} data-mid={m.id} style={{ display: 'grid', gap: 6, scrollMarginTop: 16 }}>
                  {isStreaming && m.role === 'assistant' && m.id === anchorMsgIdRef.current && !m.text ? (
                    <TypingBubble />
                  ) : m.audio ? (
                    // ==== Bubble AUDIO ====
                    <div style={{ padding: 12, background: '#f3f4f6', borderRadius: 12, border: '1px solid #e5e7eb' }}>
                      Audio message (duration: {m.audio.duration}s)
                    </div>
                  ) : (
                    <MessageBubble
                      role={m.role}
                      media={m.media}
                      onPreview={(src) => { setLightboxSrc(src); setLightboxOpen(true) }}
                      onImageLoad={() => {
                        if (anchorMsgIdRef.current === m.id) {
                          const id = m.id
                          requestAnimationFrame(() => scrollToMsgById(id, 'auto'))
                        }
                      }}
                      isStreaming={isStreaming && m.role === 'assistant' && m.id === anchorMsgIdRef.current}
                    >
                      {m.text}
                    </MessageBubble>
                  )}
                    {m.role === 'assistant' && !(isStreaming && m.id === anchorMsgIdRef.current) && m.text && (
                      <div style={{ position: 'relative' }}>
                        <Toast show={copiedId === m.id}>Copy thành công</Toast>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <button aria-label="copy" onClick={() => handleCopy(m.id, m.text)} style={actionBtnStyle(copiedId === m.id)}><IconCopy /></button>
                          {(rated === undefined || rated === 'up') && (
                            <button aria-label="like" onClick={() => handleRate(m.id, 'up')} style={actionBtnStyle(rated === 'up')} title="Like"><IconThumbUp /></button>
                          )}
                          {(rated === undefined || rated === 'down') && (
                            <button aria-label="dislike" onClick={() => handleRate(m.id, 'down')} style={actionBtnStyle(rated === 'down')} title="Dislike"><IconThumbDown /></button>
                          )}
                          {typeof m.genTimeSec === 'number' && (
                            <span style={{ color: '#6b7280', fontSize: 12 }}> {m.genTimeSec.toFixed(2)}s</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Bottom input bar */}
            <div ref={barRef} style={{ position: 'fixed', left: 0, right: 0, bottom: 0, paddingBottom: 'env(safe-area-inset-bottom)' }}>
              <div ref={barInnerRef} style={{ maxWidth: 980, margin: '12px auto', position: 'relative' }}>
                {mediaPreview && (
                  <img src={mediaPreview} alt="preview" style={{ position: 'absolute', bottom: '100%', left: 0, width: 56, height: 56, objectFit: 'cover', borderRadius: 12, boxShadow: '0 6px 20px rgba(0,0,0,0.12)', marginBottom: 8 }} />
                )}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 8,
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 16,
                  padding: 8,
                  paddingBottom: 12,
                }}>
                  <button aria-label="attach" onClick={() => document.getElementById('bottom-file')?.click()} style={{
                    width: 44, height: 44, borderRadius: 12,
                    border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280',
                    display: 'grid', placeItems: 'center',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    flexShrink: 0
                  }}>
                    <IconPaperclip />
                  </button>
                  <input id="bottom-file" accept="*/*" type="file" style={{ display: 'none' }} onChange={onPickMedia} />
                  <div style={{ flexShrink: 0 }}>
                    {/* <VoiceRecorder onSend={handleSendAudio} /> */}
                  </div>
                  <AutoTextarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onSend={sendMessage}
                    placeholder="What do you want to know?"
                  />

                  <button onClick={startVoice} aria-label="voice" title="Voice" style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: '#0f172a', color: 'white', border: '1px solid #0f172a',
                    display: 'grid', placeItems: 'center',
                    boxShadow: '0 12px 28px rgba(2,6,23,0.35)',
                    flexShrink: 0
                  }}>
                    <IconMic />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default ChatPage
