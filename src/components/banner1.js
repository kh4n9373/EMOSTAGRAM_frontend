import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2">
          <h2 className="banner1-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner1-text3">Connect Emotionally</span>
              </Fragment>
            )}
          </h2>
        </div>
      </div>
      <h3 className="banner1-text1 thq-heading-3">
        {props.content1 ?? (
          <Fragment>
            <span className="banner1-text2">
              Join a community that values emotional connections and authentic
              interactions.
            </span>
          </Fragment>
        )}
      </h3>
    </div>
  )
}

Banner1.defaultProps = {
  content1: undefined,
  heading1: undefined,
  rootClassName: '',
}

Banner1.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner1
