import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard28 = (props) => {
  return (
    <>
      <div className={`feature-card28-feature-card ${props.rootClassName} `}>
        <div className="feature-card28-container">
          <h2 className="feature-card28-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card28-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card28-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card28-text {
            font-size: 22px;
            font-family: Georgia;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card28-feature-card {
              flex-direction: row;
            }
            .feature-card28-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card28-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard28.defaultProps = {
  title: 'Emprendimiento para Todos',
  description:
    'Apoyo en la creación y promoción de emprendimientos inclusivos a través de nuestro bazar de emprendimiento.',
  rootClassName: '',
}

FeatureCard28.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard28
