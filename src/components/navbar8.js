import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [me, setMe] = useState(null)

  useEffect(() => {
    fetch('/api/v1/users/me', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => j && setMe(j.data || j))
      .catch(() => {})
  }, [])
  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <img
          src={props.imageSrc2}
          alt={props.imageAlt2}
          className="navbar8-image"
        />
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <Link
              to="/home"
              className="navbar8-link11 thq-body-small thq-link"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar8-text22">#home</span>
                </Fragment>
              )}
            </Link>
            <Link
              to="/about"
              className="navbar8-link21 thq-body-small thq-link"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar8-text16">#about</span>
                </Fragment>
              )}
            </Link>
            <Link
              to="/blogs"
              className="navbar8-link31 thq-body-small thq-link"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar8-text14">#emotions</span>
                </Fragment>
              )}
            </Link>
            <div
              onClick={() => { setLink5DropdownVisible(!link5DropdownVisible); setUserMenuOpen(false) }}
              className="navbar8-link4-dropdown-trigger"
            >
              <Link to="/community" className="navbar8-link51 thq-body-small thq-link">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar8-text27">#join</span>
                  </Fragment>
                )}
              </Link>
              <div className="navbar8-icon-container1">
                {link5DropdownVisible === true && (
                  <div className="navbar8-container2">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon10">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
                {link5DropdownVisible === false && (
                  <div className="navbar8-container3"></div>
                )}
              </div>
            </div>
            <Link to="/test" className="navbar8-link52 thq-body-small thq-link">
              {props.link41 ?? (
                <Fragment>
                  <span className="navbar8-text28">#join</span>
                </Fragment>
              )}
            </Link>
            <Link to="/chat" className="navbar8-link53 thq-body-small thq-link">
              {props.link411 ?? (
                <Fragment>
                  <span className="navbar8-text29">CHAT</span>
                </Fragment>
              )}
            </Link>
          </nav>
          <div className="navbar8-buttons1" style={{ position: 'relative' }}>
            {me ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button onClick={() => setUserMenuOpen(!userMenuOpen)} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <img src={me.picture} alt={me.name} style={{ width: 28, height: 28, borderRadius: 14 }} />
                  <span>{me.name}</span>
                </button>
                {userMenuOpen && (
                  <div style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', width: 240, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.12)', padding: 8, zIndex: 50 }}>
                    <Link to="/profile" style={{ display: 'block', padding: '8px 10px', textDecoration: 'none', color: '#111' }}>Settings</Link>
                    <button onClick={() => { fetch('/api/v1/auth/logout', { method: 'POST', credentials: 'include' }).then(() => window.location.reload()) }} style={{ width: '100%', textAlign: 'left', padding: '8px 10px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#b91c1c' }}>Sign out</button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  const envBase = process.env.REACT_APP_API_BASE
                  const guessBase = window.location.origin.includes(':3000')
                    ? window.location.origin.replace(':3000', ':5001')
                    : window.location.origin
                  const apiBase = envBase || guessBase
                  window.location.assign(`${apiBase}/api/v1/auth/login/google`)
                }}
                className="navbar8-action21 thq-button-outline thq-button-animated"
              >
                <span>Login with Google</span>
              </button>
            )}
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon12">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <Link
                to="/home"
                className="navbar8-link12 thq-body-small thq-link"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar8-text22">#home</span>
                  </Fragment>
                )}
              </Link>
              <Link to="/about" className="thq-body-small thq-link">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text16">#about</span>
                  </Fragment>
                )}
              </Link>
              <Link
                to="/blogs"
                className="navbar8-link32 thq-body-small thq-link"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar8-text14">#emotions</span>
                  </Fragment>
                )}
              </Link>
              <div className="navbar8-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar8-trigger"
                >
                  <span className="thq-body-small thq-link">
                    {props.link4 ?? (
                      <Fragment>
                        <span className="navbar8-text27">#join</span>
                      </Fragment>
                    )}
                  </span>
                  <div className="navbar8-icon-container2">
                    {link5AccordionOpen === true && (
                      <div className="navbar8-container4">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon16">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {link5AccordionOpen === false && (
                      <div className="navbar8-container5">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon18">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen === true && (
                  <div className="navbar8-container6">
                    <Link to="/home">
                      <div className="navbar8-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar8-page1-image1"
                        />
                        <div className="navbar8-content1">
                          <span className="navbar8-page11 thq-body-large">
                            {props.page1 ?? (
                              <Fragment>
                                <span className="navbar8-text15">Home</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page1Description ?? (
                              <Fragment>
                                <span className="navbar8-text17">
                                  Welcome to Emostagram, your safe space for
                                  emotional connections.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link to="/about">
                      <div className="navbar8-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar8-page2-image1"
                        />
                        <div className="navbar8-content2">
                          <span className="navbar8-page21 thq-body-large">
                            {props.page2 ?? (
                              <Fragment>
                                <span className="navbar8-text19">About</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page2Description ?? (
                              <Fragment>
                                <span className="navbar8-text24">
                                  Learn more about our mission and values.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blogs">
                      <div className="navbar8-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar8-page3-image1"
                        />
                        <div className="navbar8-content3">
                          <span className="navbar8-page31 thq-body-large">
                            {props.page3 ?? (
                              <Fragment>
                                <span className="navbar8-text23">Emotions</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page3Description ?? (
                              <Fragment>
                                <span className="navbar8-text26">
                                  Explore and express your emotions in a
                                  supportive environment.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link to="/community">
                      <div className="navbar8-menu-item4">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="navbar8-page4-image1"
                        />
                        <div className="navbar8-content4">
                          <span className="navbar8-page41 thq-body-large">
                            {props.page4 ?? (
                              <Fragment>
                                <span className="navbar8-text18">Join Us</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page4Description ?? (
                              <Fragment>
                                <span className="navbar8-text20">
                                  Join our community and start your EQ journey.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar8-buttons2">
              <button className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navbar8-text25">Sign Up</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navbar8-text21">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="navbar8-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        {link5DropdownVisible === true && (
          <div className="navbar8-container7 thq-box-shadow">
            <div className="navbar8-link5-menu-list">
              <Link to="/home">
                <div className="navbar8-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar8-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content5">
                    <span className="navbar8-page12 thq-body-large">
                      {props.page1 ?? (
                        <Fragment>
                          <span className="navbar8-text15">Home</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="navbar8-text17">
                            Welcome to Emostagram, your safe space for emotional
                            connections.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </Link>
              <Link to="/about">
                <div className="navbar8-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar8-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content6">
                    <span className="navbar8-page22 thq-body-large">
                      {props.page2 ?? (
                        <Fragment>
                          <span className="navbar8-text19">About</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="navbar8-text24">
                            Learn more about our mission and values.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </Link>
              <Link to="/blogs">
                <div className="navbar8-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar8-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content7">
                    <span className="navbar8-page32 thq-body-large">
                      {props.page3 ?? (
                        <Fragment>
                          <span className="navbar8-text23">Emotions</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="navbar8-text26">
                            Explore and express your emotions in a supportive
                            environment.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </Link>
              <Link to="/community">
                <div className="navbar8-menu-item8">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="navbar8-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content8">
                    <span className="navbar8-page42 thq-body-large">
                      {props.page4 ?? (
                        <Fragment>
                          <span className="navbar8-text18">Join Us</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page4Description ?? (
                        <Fragment>
                          <span className="navbar8-text20">
                            Join our community and start your EQ journey.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible === true && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar8-container8"
        ></div>
      )}
    </header>
  )
}

Navbar8.defaultProps = {
  linkUrlPage2: 'https://www.teleporthq.io',
  link3: undefined,
  page1: undefined,
  page1ImageSrc:
    'https://images.unsplash.com/photo-1567793750641-17951da21da0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxM3w&ixlib=rb-4.1.0&q=80&w=200',
  link2: undefined,
  link3Url: 'https://www.teleporthq.io',
  link2Url: 'https://www.teleporthq.io',
  page4ImageAlt: 'Join Us Image',
  page1Description: undefined,
  link1Url: 'https://www.teleporthq.io',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1644740833816-5f46a2d00607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxNHw&ixlib=rb-4.1.0&q=80&w=200',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1484933512367-8f563b74ec03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxM3w&ixlib=rb-4.1.0&q=80&w=200',
  logoAlt: 'Emostagram Logo',
  page4: undefined,
  page2: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  page3ImageAlt: 'Emotions Image',
  page2ImageAlt: 'About Image',
  page1ImageAlt: 'Home Image',
  page4Description: undefined,
  page3ImageSrc:
    'https://images.unsplash.com/photo-1541560052-3744e48ab80b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxNHw&ixlib=rb-4.1.0&q=80&w=200',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action2: undefined,
  link1: undefined,
  page3: undefined,
  page2Description: undefined,
  action1: undefined,
  linkUrlPage4: 'https://www.teleporthq.io',
  linkUrlPage1: 'https://www.teleporthq.io',
  page3Description: undefined,
  link4: undefined,
  link41: undefined,
  imageSrc2: '/screenshot%202025-08-19%20at%2012.00.44-200w.png',
  imageAlt2: 'image',
  link411: undefined,
}

Navbar8.propTypes = {
  linkUrlPage2: PropTypes.string,
  link3: PropTypes.element,
  page1: PropTypes.element,
  page1ImageSrc: PropTypes.string,
  link2: PropTypes.element,
  link3Url: PropTypes.string,
  link2Url: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  page1Description: PropTypes.element,
  link1Url: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  page4: PropTypes.element,
  page2: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  page4Description: PropTypes.element,
  page3ImageSrc: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.element,
  link1: PropTypes.element,
  page3: PropTypes.element,
  page2Description: PropTypes.element,
  action1: PropTypes.element,
  linkUrlPage4: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  page3Description: PropTypes.element,
  link4: PropTypes.element,
  link41: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  link411: PropTypes.element,
}

export default Navbar8
