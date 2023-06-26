import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard22 = (props) => {
  return (
    <>
      <div className={`feature-card22-feature-card ${props.rootClassName} `}>
        <div className="feature-card22-container">
          <img
            alt={props.image_alt}
            src="/spiritual-200h.png"
            className="feature-card22-image"
          />
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
          .feature-card22-image {
            width: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card22-text {
            font-size: 22px;
            font-style: normal;
            font-family: Tahoma;
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
  description:
    'Acompañamiento y coaching personalizado para empleados con discapacidad, maximizando su potencial y contribución.',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  title: 'Coaching y Acompañamiento',
}

FeatureCard22.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard22
