import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="cta26-text1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text6">
                        Join Emostagram today!
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="cta26-text2 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Start your journey towards emotional intelligence and
                        authentic connections.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="cta26-button thq-button-filled"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text4">Sign up now</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  action1: undefined,
  content1: undefined,
  heading1: undefined,
  rootClassName: '',
}

CTA26.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CTA26
