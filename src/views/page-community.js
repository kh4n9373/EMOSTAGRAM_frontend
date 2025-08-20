import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'

const Container = ({ children }) => (
  <main style={{ maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>{children}</main>
)

const Composer = ({ topics, onSubmit, loading, notice }) => {
  const [topicId, setTopicId] = useState('')
  const [context, setContext] = useState('')
  const [question, setQuestion] = useState('')
  const [imageFile, setImageFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ topic_id: topicId ? Number(topicId) : null, context, question, imageFile })
      .then(() => {
        setTopicId('')
        setContext('')
        setQuestion('')
        setImageFile(null)
      })
      .catch(() => {})
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, padding: 16, border: '1px solid #e5e7eb', borderRadius: 16, background: '#fff', marginBottom: 12 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ width: 40, height: 40, borderRadius: 20, background: '#e5e7eb' }} />
        <select value={topicId} onChange={(e) => setTopicId(e.target.value)} style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: '8px 10px' }}>
          <option value="">Select topic (optional)</option>
          {(topics || []).map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </div>
      <textarea placeholder="Describe the situation..." value={context} onChange={(e) => setContext(e.target.value)} rows={3} style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 12, padding: 12, fontSize: 16, resize: 'vertical' }} />
      <input placeholder="Open question for community..." value={question} onChange={(e) => setQuestion(e.target.value)} style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 12, padding: 12, fontSize: 16 }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ cursor: 'pointer', color: '#2563EB' }}>
          + Add image
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => setImageFile(e.target.files && e.target.files[0])} />
        </label>
        <button disabled={loading} type="submit" style={{ border: '1px solid #e5e7eb', background: '#fff', padding: '8px 12px', borderRadius: 999 }}>{loading ? 'Posting...' : 'Post'}</button>
      </div>
      {notice && (
        <div style={{
          background: notice.type === 'error' ? '#fee2e2' : '#ecfeff',
          color: notice.type === 'error' ? '#991b1b' : '#155e75',
          border: '1px solid #e5e7eb',
          borderRadius: 10,
          padding: '8px 10px'
        }}>
          {notice.message}
        </div>
      )}
    </form>
  )
}

const XCard = ({ item }) => (
  <article style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 12, padding: 16, border: '1px solid #e5e7eb', borderRadius: 16, background: 'rgba(255,255,255,0.85)' }}>
    <img src={item.user?.picture || item.user?.avatarUrl} alt={item.user?.name || 'user'} width={48} height={48} style={{ borderRadius: 24 }} />
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <strong>{item.user?.name || 'Anonymous'}</strong>
        <span style={{ color: '#6b7280', fontSize: 13 }}>{item.created_at}</span>
      </div>
      <p style={{ margin: '6px 0 6px 0' }}>{item.context}</p>
      <p style={{ margin: 0, color: '#111' }}><b>Q:</b> {item.question}</p>
      {item.image_url && (
        <img src={item.image_url} alt="attachment" style={{ width: '100%', borderRadius: 12, marginTop: 10 }} />
      )}
      <div style={{ display: 'flex', gap: 24, marginTop: 10, color: '#6b7280', fontSize: 14 }}>
        <span>💬 {item.stats?.comments_count ?? 0}</span>
        <span>👍 {item.stats?.upvotes_count ?? 0}</span>
        <span>👎 {item.stats?.downvotes_count ?? 0}</span>
        <span>❤️ {item.stats?.reactions_count ?? 0}</span>
      </div>
    </div>
  </article>
)

const Skeleton = () => (
  <div style={{ display: 'grid', gap: 12 }}>
    {[0,1,2].map((k) => (
      <div key={k} style={{ height: 120, borderRadius: 16, border: '1px solid #eee', background: 'linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 37%,#f3f4f6 63%)', backgroundSize: '400% 100%', animation: 'pulse 1.4s ease infinite' }} />
    ))}
  </div>
)

const useSituationsFeed = () => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasNext, setHasNext] = useState(true)

  const load = (reset = false) => {
    if (loading || (!hasNext && !reset)) return
    setLoading(true)
    const nextPage = reset ? 1 : page
    fetch(`/api/v1/situations/feed?page=${nextPage}&limit=10`, { credentials: 'include' })
      .then((r) => r.json())
      .then((j) => {
        const data = j?.data || j
        const payload = data?.data || data
        const list = payload?.items || []
        const pag = payload?.pagination
        setItems((prev) => (reset ? list : prev.concat(list)))
        if (pag) {
          setHasNext(!!pag.has_next)
          setPage(nextPage + 1)
        } else {
          setHasNext(false)
        }
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => { load(true) }, [])
  return { items, loading, hasNext, load }
}

const CommunityPage = () => {
  const feed = useSituationsFeed()
  const sentinelRef = useRef(null)
  const [topics, setTopics] = useState([])
  const [posting, setPosting] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) feed.load() })
    })
    io.observe(el)
    return () => io.disconnect()
  }, [sentinelRef.current, feed])

  useEffect(() => {
    fetch('/api/v1/topics', { credentials: 'include' })
      .then((r) => r.json())
      .then((j) => {
        const data = j?.data || j
        setTopics(Array.isArray(data?.data) ? data.data : data?.items || data || [])
      })
      .catch(() => {})
  }, [])

  const uploadToCloudinary = async (file) => {
    const url = 'https://api.cloudinary.com/v1_1/duqmsoxk4/image/upload'
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'emotional')
    const res = await fetch(url, { method: 'POST', body: formData })
    const data = await res.json()
    return data.secure_url
  }

  const [notice, setNotice] = useState(null)

  const handleSubmit = async ({ topic_id, context, question, imageFile }) => {
    if (!context?.trim() || !question?.trim()) return Promise.reject()
    try {
      setPosting(true)
      let image_url = ''
      if (imageFile) image_url = await uploadToCloudinary(imageFile)
      const res = await fetch('/api/v1/situations/contribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ topic_id, context, question, image_url }),
      })
      if (!res.ok) {
        if (res.status === 401) {
          setNotice({ type: 'error', message: 'Vui lòng đăng nhập để đăng bài.' })
        } else {
          const err = await res.text()
          setNotice({ type: 'error', message: `Đăng bài thất bại: ${err || res.status}` })
        }
        throw new Error('post_failed')
      }
      setNotice({ type: 'success', message: 'Đăng bài thành công.' })
      feed.load(true)
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    } finally {
      setPosting(false)
    }
  }

  return (
    <Container>
      <Helmet>
        <title>Community</title>
      </Helmet>
      <Composer topics={topics} onSubmit={handleSubmit} loading={posting} notice={notice} />
      <div style={{ display: 'grid', gap: 12 }}>
        {feed.items.map((it) => (
          <XCard key={it.id} item={it} />
        ))}
        {!feed.items.length && <Skeleton />}
      </div>
      <div ref={sentinelRef} style={{ height: 1 }} />
    </Container>
  )
}

export default CommunityPage


