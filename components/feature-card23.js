import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard23 = (props) => {
  return (
    <>
      <div className={`feature-card23-feature-card ${props.rootClassName} `}>
        <div className="feature-card23-container">
          <h2 className="feature-card23-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card23-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card23-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card23-text {
            font-size: 40px;
            font-family: Tangerine;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card23-feature-card {
              flex-direction: row;
            }
            .feature-card23-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card23-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard23.defaultProps = {
  rootClassName: '',
  title: 'Reclutamiento y Selección',
  description:
    'Identificación y presentación de candidatos cualificados a través de nuestro proceso de selección inclusivo, asegurando un ajuste adecuado entre empresa y empleado.',
}

FeatureCard23.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard23
