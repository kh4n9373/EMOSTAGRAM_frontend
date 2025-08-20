import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="features24-feature1-title thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text3">Emotion Sharing</span>
                  </Fragment>
                )}
              </h2>
              <span className="features24-feature1-description thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text4">
                      Share your emotions openly and authentically with a
                      supportive community.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="features24-feature2-title thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text2">EQ Learning</span>
                  </Fragment>
                )}
              </h2>
              <span className="features24-feature2-description thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text6">
                      Access resources and tools to enhance your emotional
                      intelligence and personal growth.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="features24-feature3-title thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features24-text1">
                      Authentic Connections
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features24-feature3-description thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text5">
                      Connect with like-minded individuals who value genuine
                      interactions and meaningful relationships.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxM3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1594925591176-57d7d2f62205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxNXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Title: undefined,
  feature2ImgAlt: 'EQ Learning Image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1722657908940-9a52c21a8fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxNHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: undefined,
  feature1Title: undefined,
  feature1Description: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
  feature3ImgAlt: 'Authentic Connections Image',
  feature1ImgAlt: 'Emotion Sharing Image',
}

Features24.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
}

export default Features24
