import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="testimonial17-testimonial13 thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text31">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text27">
                  <span>
                    Emostagram has revolutionized the way we connect online.
                    It&apos;s refreshing to see a platform that values emotional
                    intelligence and authentic interactions over
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>superficial measures of popularity.</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Therapist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text40">
                        I&apos;ve learned so much about myself and others
                        through Emostagram. The community here is incredibly
                        supportive, and I feel like I can truly be myself
                        without judgment.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Michael Chen
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text38">Educator</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
                        As someone who struggles with expressing emotions,
                        Emostagram has been a game-changer for me. I&apos;ve
                        found a safe space to share my feelings and connect with
                        others on a deeper level.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Emily Rodriguez
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26">Student</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text32">
                        I recommend Emostagram to all my clients who are looking
                        to improve their emotional intelligence. It&apos;s a
                        fantastic platform for personal growth and building
                        meaningful relationships.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            David Thompson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text39">
                            Life Coach
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        The impact of Emostagram on my mental well-being has
                        been profound. I no longer feel the pressure to conform
                        to unrealistic standards, and instead, I focus on
                        genuine connections and self-improvement.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Name: undefined,
  author1Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1548142542-c53707f8b05b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxNHw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxM3w&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'Image of Michael Chen',
  content1: undefined,
  author4Alt: 'Image of David Thompson',
  heading1: undefined,
  review3: undefined,
  author3Name: undefined,
  review2: undefined,
  author1Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxNHw&ixlib=rb-4.1.0&q=80&w=1080',
  review4: undefined,
  author3Alt: 'Image of Emily Rodriguez',
  author4Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTUzNzAxM3w&ixlib=rb-4.1.0&q=80&w=1080',
  author1Alt: 'Image of Sarah Johnson',
  author2Position: undefined,
  author4Position: undefined,
  review1: undefined,
}

Testimonial17.propTypes = {
  author2Name: PropTypes.element,
  author1Position: PropTypes.element,
  author2Src: PropTypes.string,
  author3Position: PropTypes.element,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.element,
  author4Alt: PropTypes.string,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author1Name: PropTypes.element,
  author3Src: PropTypes.string,
  review4: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Name: PropTypes.element,
  author1Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author4Position: PropTypes.element,
  review1: PropTypes.element,
}

export default Testimonial17
