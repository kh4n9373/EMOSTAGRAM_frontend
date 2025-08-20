import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

const NewBlogPage = () => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: 24 }}>
      <Helmet>
        <title>Write a new blog</title>
      </Helmet>
      <h2 style={{ marginTop: 0 }}>Write</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #e5e7eb', marginBottom: 12, fontSize: 20 }}
      />
      <input
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #e5e7eb', marginBottom: 12 }}
      />
      <textarea
        placeholder="Start writing..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={16}
        style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #e5e7eb', fontFamily: 'inherit', lineHeight: 1.6 }}
      />
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button disabled style={{ padding: '10px 14px', borderRadius: 10, border: '1px solid #e5e7eb', background: '#f3f4f6' }}>Publish (mock)</button>
        <button style={{ padding: '10px 14px', borderRadius: 10, border: '1px solid #e5e7eb', background: 'white' }}>Save draft (mock)</button>
      </div>
    </main>
  )
}

export default NewBlogPage


