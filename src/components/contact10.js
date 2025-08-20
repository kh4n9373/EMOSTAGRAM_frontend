import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text21">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Emostagram Headquarters
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text18">
                    123 Emotions Street, EQ City, 45678
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="contact10-container3">
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text16">Support Center</span>
                </Fragment>
              )}
            </h3>
            <p className="contact10-text15 thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    For any inquiries or assistance, please contact our support
                    team at support@emostagram.com
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2: undefined,
  location2Description: undefined,
  location1Description: undefined,
  location1: undefined,
  content1: undefined,
  heading1: undefined,
}

Contact10.propTypes = {
  location2: PropTypes.element,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact10
