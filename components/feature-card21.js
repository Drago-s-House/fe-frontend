import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard21 = (props) => {
  return (
    <>
      <div className={`feature-card21-feature-card ${props.rootClassName} `}>
        <div className="feature-card21-container">
          <h2 className="feature-card21-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card21-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card21-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card21-text {
            font-size: 40px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card21-feature-card {
              flex-direction: row;
            }
            .feature-card21-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card21-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard21.defaultProps = {
  rootClassName: '',
  title: 'Asesoría en Desarrollo Organizacional',
  description:
    'Diagnóstico y consultoría para convertirse en una empresa inclusiva, creación de comités inclusivos y desarrollo de manuales inclusivos.',
}

FeatureCard21.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard21
