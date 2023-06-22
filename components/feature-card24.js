import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard24 = (props) => {
  return (
    <>
      <div className={`feature-card24-feature-card ${props.rootClassName} `}>
        <div className="feature-card24-container">
          <h2 className="feature-card24-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card24-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card24-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card24-text {
            font-size: 40px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card24-feature-card {
              flex-direction: row;
            }
            .feature-card24-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card24-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard24.defaultProps = {
  rootClassName: '',
  title: 'Gestión de Empleo',
  description:
    'Asistencia integral en la búsqueda y gestión de empleo, incluyendo reclutamiento, preselección y apoyo durante todo el proceso.',
}

FeatureCard24.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard24
