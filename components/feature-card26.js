import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard26 = (props) => {
  return (
    <>
      <div className={`feature-card26-feature-card ${props.rootClassName} `}>
        <div className="feature-card26-container">
          <h2 className="feature-card26-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card26-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card26-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card26-text {
            font-size: 22px;
            font-family: Georgia;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card26-feature-card {
              flex-direction: row;
            }
            .feature-card26-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card26-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard26.defaultProps = {
  title: 'Transformación Inclusiva',
  description:
    'Capacitación en políticas y procedimientos inclusivos, selección inclusiva y ajustes razonables para promover la diversidad y la inclusión en el entorno laboral.',
  rootClassName: '',
}

FeatureCard26.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard26
