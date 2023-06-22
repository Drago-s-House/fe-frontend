import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard22 = (props) => {
  return (
    <>
      <div className={`feature-card22-feature-card ${props.rootClassName} `}>
        <div className="feature-card22-container">
          <h2 className="feature-card22-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card22-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card22-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card22-text {
            font-size: 40px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card22-feature-card {
              flex-direction: row;
            }
            .feature-card22-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card22-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard22.defaultProps = {
  rootClassName: '',
  title: 'Coaching y Acompañamiento',
  description:
    'Acompañamiento y coaching personalizado para empleados con habilidades diversas, maximizando su potencial y contribución.',
}

FeatureCard22.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard22
