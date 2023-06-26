import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard23 = (props) => {
  return (
    <>
      <div className={`feature-card23-feature-card ${props.rootClassName} `}>
        <div className="feature-card23-container">
          <img
            alt={props.image_alt}
            src="/professional-200h.png"
            className="feature-card23-image"
          />
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
            padding-left: 16px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card23-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card23-image {
            width: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card23-text {
            font-size: 22px;
            font-family: Tahoma;
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
  description:
    'Identificación y presentación de candidatos cualificados a través de nuestro proceso de selección inclusivo, asegurando un ajuste adecuado entre empresa y empleado.',
  title: 'Reclutamiento y Selección',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

FeatureCard23.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard23
