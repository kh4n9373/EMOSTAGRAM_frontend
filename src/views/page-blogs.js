import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Container = ({ children }) => (
  <main
    style={{
      maxWidth: 1152,
      margin: '0 auto',
      padding: '0 16px',
    }}
  >
    {children}
  </main>
)

const Grid = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '240px 1fr 320px',
      gap: 32,
    }}
  >
    {children}
  </div>
)

const Sticky = ({ children }) => (
  <div style={{ position: 'sticky', top: 72 }}>{children}</div>
)

const SectionCard = ({ children }) => (
  <section
    style={{
      background: 'rgba(255,255,255,0.8)',
      border: '1px solid #e5e7eb',
      borderRadius: 16,
      padding: 16,
    }}
  >
    {children}
  </section>
)

const PrimaryNav = ({ items, onSelect }) => (
  <nav>
    {items.map((it) => (
      <button
        key={it.label}
        onClick={() => onSelect && onSelect(it.key)}
        style={{ display: 'flex', width: '100%', padding: '8px 12px', color: it.active ? '#111' : '#555', background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}
      >
        <span style={{ marginLeft: 8 }}>{it.label}</span>
      </button>
    ))}
  </nav>
)

const FollowingList = ({ people }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    {people.map((p) => (
      <li key={p.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
        <img src={p.avatarUrl} alt={p.name} width={28} height={28} style={{ borderRadius: '50%', marginRight: 8 }} />
        <span style={{ flex: 1 }}>{p.name}</span>
        {p.isActive && <span style={{ width: 8, height: 8, borderRadius: 4, background: '#16a34a' }} />}
      </li>
    ))}
  </ul>
)

const Tabs = ({ tabs, active, onChange }) => (
  <div style={{ display: 'flex', gap: 16, borderBottom: '1px solid #eee', marginBottom: 12 }}>
    {tabs.map((t) => (
      <button key={t} onClick={() => onChange(t)} style={{
        padding: '8px 0',
        border: 'none',
        borderBottom: active === t ? '2px solid #111' : '2px solid transparent',
        background: 'transparent',
        fontWeight: 600,
        cursor: 'pointer'
      }}>{t}</button>
    ))}
  </div>
)

const InfoBanner = ({ text }) => (
  <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, padding: 12, marginBottom: 12, color: '#4b5563' }}>{text}</div>
)

const SearchBar = ({ value, onChange, inputRef }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #e5e7eb', borderRadius: 12, padding: '8px 12px', marginBottom: 12, background: 'white' }}>
    <span aria-hidden>🔍</span>
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search blogs... (/ to focus)"
      aria-label="Search blogs"
      style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14 }}
    />
  </div>
)

const ActionsBar = ({ open, onToggleNotifications, onCloseNotifications }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
    <Link to="/blogs/new" style={{ textDecoration: 'none' }}>
      <button aria-label="Write" style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #e5e7eb', background: 'white', padding: '8px 12px', borderRadius: 10, cursor: 'pointer' }}>
        <span aria-hidden>✍️</span>
        <span>Write</span>
      </button>
    </Link>
    <button aria-label="Notifications" onClick={onToggleNotifications} style={{ border: '1px solid #e5e7eb', background: 'white', padding: '8px 10px', borderRadius: 10, cursor: 'pointer' }}>🔔</button>

    {open && (
      <>
        <div onClick={onCloseNotifications} style={{ position: 'fixed', inset: 0, background: 'transparent', zIndex: 10 }} />
        <div role="dialog" aria-label="Notifications" style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: 360, maxHeight: '70vh', overflowY: 'auto', background: 'white', color: '#111', border: '1px solid #e5e7eb', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.12)', padding: 16, zIndex: 11 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <strong>Notifications</strong>
            <button onClick={onCloseNotifications} aria-label="Close" style={{ background: 'transparent', border: 'none', fontSize: 18, cursor: 'pointer' }}>×</button>
          </div>
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: '#e5e7eb' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14 }}>User {i} reacted to your post.</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>2h</div>
              </div>
              <div style={{ width: 10, height: 10, borderRadius: 5, background: '#3B82F6', alignSelf: 'center' }} />
            </div>
          ))}
          <div style={{ paddingTop: 12, textAlign: 'center' }}>
            <a href="#" style={{ color: '#2563EB', textDecoration: 'none' }}>See all</a>
          </div>
        </div>
      </>
    )}
  </div>
)

const PostCard = ({ item }) => (
  <article style={{ display: 'grid', gridTemplateColumns: item.coverImage ? '1fr 160px' : '1fr', gap: 16, padding: 16, border: '1px solid #e5e7eb', borderRadius: 16, background: 'rgba(255,255,255,0.8)' }}>
    <div>
      <h3 style={{ margin: 0, fontSize: 20 }}>
        <Link to={`/blogs/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{item.title}</Link>
      </h3>
      {item.subtitle && <p style={{ margin: '8px 0', color: '#6b7280' }}>{item.subtitle}</p>}
      <div style={{ fontSize: 14, color: '#6b7280' }}>
        {item.dateISO} • {item.readTimeMin ?? 5} min • {item.stats?.views ?? 0} • {item.stats?.responses ?? 0}
      </div>
    </div>
    {item.coverImage && (
      <Link to={`/blogs/${item.id}`}>
        <img src={item.coverImage} alt={item.title} style={{ width: '100%', height: 96, objectFit: 'cover', borderRadius: 12 }} />
      </Link>
    )}
  </article>
)

const Skeleton = () => (
  <div style={{ display: 'grid', gap: 12 }}>
    {[0,1,2].map((k) => (
      <div key={k} style={{ height: 120, borderRadius: 16, border: '1px solid #eee', background: 'linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 37%,#f3f4f6 63%)', backgroundSize: '400% 100%', animation: 'pulse 1.4s ease infinite' }} />
    ))}
  </div>
)

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch(url)
      .then((r) => r.json())
      .then((j) => mounted && (setData(j), setLoading(false)))
      .catch((e) => mounted && (setError(e), setLoading(false)))
    return () => { mounted = false }
  }, [url])
  return { data, loading, error }
}

const useInfiniteFeed = (source) => {
  const [items, setItems] = useState([])
  const [cursor, setCursor] = useState(null)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const load = () => {
    if (loading || done) return
    setLoading(true)
    const qs = new URLSearchParams({ limit: '10' })
    if (cursor) qs.set('cursor', cursor)
    const path = source === 'profile' ? '/api/v1/profile-blogs' : source === 'library' ? '/api/v1/library-blogs' : '/api/v1/blogs'
    fetch(`${path}?${qs.toString()}`)
      .then((r) => r.json())
      .then((j) => {
        setItems((prev) => prev.concat(j.items || []))
        if (j.nextCursor) setCursor(j.nextCursor)
        else setDone(true)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    // reset when tab changes (future-proof)
    setItems([])
    setCursor(null)
    setDone(false)
  }, [source])

  return { items, loading, done, load }
}

const BlogsPage = () => {
  const [tab, setTab] = useState('For you')
  const [query, setQuery] = useState('')
  const [notifOpen, setNotifOpen] = useState(false)
  const [source, setSource] = useState('all') // all | profile | library
  const feed = useInfiniteFeed(source)
  const { data: staff } = useFetch('/api/v1/staff-picks')
  const { data: following } = useFetch('/api/v1/followings')
  const sentinelRef = useRef(null)
  const searchInputRef = useRef(null)

  useEffect(() => {
    feed.load()
  }, [tab, source])

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) feed.load()
      })
    })
    io.observe(el)
    return () => io.disconnect()
  }, [sentinelRef.current, feed])

  // responsive: show/hide columns using window width
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const showLeft = width >= 1024
  const showRight = width >= 1280
  const gridStyle = useMemo(() => {
    if (showLeft && showRight) {
      return { display: 'grid', gap: 32, gridTemplateColumns: '240px 1fr 320px' }
    }
    if (showLeft && !showRight) {
      return { display: 'grid', gap: 32, gridTemplateColumns: '240px 1fr' }
    }
    return { display: 'grid', gap: 32, gridTemplateColumns: '1fr' }
  }, [showLeft, showRight])

  // keyboard shortcuts for search
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault()
        searchInputRef.current && searchInputRef.current.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const visibleItems = useMemo(() => {
    if (!query) return feed.items
    const q = query.toLowerCase()
    return feed.items.filter((it) =>
      (it.title || '').toLowerCase().includes(q) ||
      (it.subtitle || '').toLowerCase().includes(q) ||
      (it.author?.name || '').toLowerCase().includes(q)
    )
  }, [feed.items, query])

  return (
    <Container>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div style={gridStyle}>
        {showLeft && (
        <aside>
          <Sticky>
            <SectionCard>
              <PrimaryNav
                items={[
                  { key: 'profile', label: 'Profile', active: source === 'profile' },
                  { key: 'library', label: 'Library', active: source === 'library' },
                ]}
                onSelect={(key) => setSource(key)}
              />
            </SectionCard>
            <div style={{ height: 16 }} />
            <SectionCard>
              <h4 style={{ marginTop: 0, marginBottom: 12 }}>Following</h4>
              {following?.items?.length ? (
                <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: 4 }}>
                  <FollowingList people={following.items} />
                </div>
              ) : (
                <div style={{ color: '#6b7280' }}>No following yet.</div>
              )}
            </SectionCard>
          </Sticky>
        </aside>
        )}

        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <SearchBar value={query} onChange={setQuery} inputRef={searchInputRef} />
            </div>
            <ActionsBar open={notifOpen} onToggleNotifications={() => setNotifOpen((v) => !v)} onCloseNotifications={() => setNotifOpen(false)} />
          </div>
          <Tabs tabs={['For you', 'Featured']} active={tab} onChange={setTab} />
          <InfoBanner text="“Following” và chủ đề của bạn đã chuyển vào trang Following mới." />
          <div style={{ display: 'grid', gap: 12 }}>
            {visibleItems.map((it) => (
              <PostCard key={it.id} item={it} />
            ))}
            {!feed.items.length && <Skeleton />}
          </div>
          <div ref={sentinelRef} style={{ height: 1 }} />
        </section>

        {showRight && (
        <aside>
          <Sticky>
            <SectionCard>
              <h4 style={{ marginTop: 0 }}>Staff Picks</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {staff?.items?.length ? staff.items.map((sp) => (
                  <li key={sp.id} style={{ padding: '8px 0' }}>
                    <Link to={`/blogs/${sp.id}`} style={{ textDecoration: 'none', color: '#111' }}>{sp.title}</Link>
                    <div style={{ color: '#6b7280', fontSize: 13 }}>{sp.author?.name} · {sp.dateISO}</div>
                  </li>
                )) : <div style={{ color: '#6b7280' }}>No staff picks.</div>}
              </ul>
            </SectionCard>
          </Sticky>
        </aside>
        )}
      </div>
    </Container>
  )
}

export default BlogsPage


