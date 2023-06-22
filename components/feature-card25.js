import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard25 = (props) => {
  return (
    <>
      <div className={`feature-card25-feature-card ${props.rootClassName} `}>
        <div className="feature-card25-container">
          <h2 className="feature-card25-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card25-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card25-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card25-text {
            font-size: 40px;
            font-family: Tangerine;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card25-feature-card {
              flex-direction: row;
            }
            .feature-card25-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card25-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard25.defaultProps = {
  rootClassName: '',
  title: 'Empoderamiento y Desarrollo Personal',
  description:
    'Talleres y conferencias para fortalecer habilidades de liderazgo, superar barreras y alcanzar el éxito más allá de las limitaciones.',
}

FeatureCard25.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard25
