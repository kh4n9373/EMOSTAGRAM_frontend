import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        className="footer4-image"
      />
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo"></div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link1 thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text14">About Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link2 thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text18">Contact Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link3 thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text21">FAQ</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link4 thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text20">Terms of Service</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link5 thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text16">Privacy Policy</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="footer4-text10 thq-body-small">
                © 2025 TeleportHQ
              </span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text19">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="footer4-text12 thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text15">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="footer4-text13 thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text17">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link1: undefined,
  termsLink: undefined,
  link5: undefined,
  cookiesLink: undefined,
  link2: undefined,
  privacyLink: undefined,
  link4: undefined,
  link3: undefined,
  imageSrc: '/emostagram-high-resolution-logo-transparent-200h.png',
  imageAlt: 'image',
}

Footer4.propTypes = {
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  link5: PropTypes.element,
  cookiesLink: PropTypes.element,
  link2: PropTypes.element,
  privacyLink: PropTypes.element,
  link4: PropTypes.element,
  link3: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Footer4
