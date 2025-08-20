import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div
      className={`steps2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="steps2-text10 thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="steps2-text11 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions"></div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text24">Create Your Profile</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text13 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Set up your Emostagram profile by sharing your interests,
                      goals, and what you hope to gain.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text26">Connect with Others</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text16 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Find and connect with like-minded individuals who are also
                      focused on emotional intelligence &amp; connections.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text17 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text28">Share Your Emotions</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text19 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Express your feelings, thoughts, and experiences in a safe
                      and supportive environment.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text20 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text29">Learn and Grow</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text22 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text27">
                      Engage in discussions, participate in EQ-focused
                      activities, and access resources to enhance your emotional
                      intelligence journey.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text23 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Title: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step4Description: undefined,
  step3Title: undefined,
  step4Title: undefined,
  step1Description: undefined,
  step3Description: undefined,
  rootClassName: '',
}

Steps2.propTypes = {
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step4Description: PropTypes.element,
  step3Title: PropTypes.element,
  step4Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Steps2
