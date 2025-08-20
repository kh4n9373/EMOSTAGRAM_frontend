import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

const MetaPill = ({ children }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#6b7280' }}>{children}</span>
)

const BlogsDetailPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/v1/blogs/${id}`)
      .then((r) => r.json())
      .then((j) => { setData(j); setLoading(false) })
      .catch((e) => { setError(e); setLoading(false) })
  }, [id])

  if (loading) return <main style={{ maxWidth: 860, margin: '0 auto', padding: 24 }}>Loading...</main>
  if (error) return <main style={{ maxWidth: 860, margin: '0 auto', padding: 24 }}>Error loading post.</main>

  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: 24 }}>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <h1 style={{ marginTop: 0, fontSize: 42, lineHeight: 1.15 }}>{data.title}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <img src={data.author?.avatarUrl} alt={data.author?.name} width={44} height={44} style={{ borderRadius: 22 }} />
        <div>
          <div style={{ fontWeight: 600 }}>{data.author?.name}</div>
          <div style={{ fontSize: 14, color: '#6b7280' }}>{data.dateISO} · {data.readTimeMin ?? 6} min read</div>
        </div>
        <div style={{ flex: 1 }} />
        <button style={{ border: '1px solid #e5e7eb', background: 'white', padding: '8px 12px', borderRadius: 999, cursor: 'pointer' }}>{data.author?.isFollowed ? 'Following' : 'Follow'}</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 12, borderBottom: '1px solid #e5e7eb', marginBottom: 16 }}>
        <MetaPill>👏 {data.stats?.likes ?? 0}</MetaPill>
        <MetaPill>💬 {data.stats?.responses ?? 0}</MetaPill>
        <MetaPill>🔖 {data.stats?.bookmarks ?? 0}</MetaPill>
        <MetaPill>👁️ {data.stats?.views ?? 0}</MetaPill>
      </div>
      {data.coverImage && (
        <img src={data.coverImage} alt={data.title} style={{ width: '100%', borderRadius: 16, marginBottom: 16 }} />
      )}
      <article style={{ fontSize: 18, lineHeight: 1.8 }}>
        {(data.content || []).map((p, idx) => (
          <p key={idx} style={{ margin: '16px 0' }}>{p}</p>
        ))}
      </article>
    </main>
  )
}

export default BlogsDetailPage


