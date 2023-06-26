import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard231 = (props) => {
  return (
    <>
      <div className={`feature-card231-feature-card ${props.rootClassName} `}>
        <div className="feature-card231-container">
          <img
            alt={props.image_alt}
            src="/training-200h.png"
            className="feature-card231-image"
          />
          <h2 className="feature-card231-text">{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card231-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card231-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card231-image {
            width: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card231-text {
            font-size: 22px;
            font-family: Tahoma;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card231-feature-card {
              flex-direction: row;
            }
            .feature-card231-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card231-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard231.defaultProps = {
  description:
    'Capacitación en políticas y procedimientos inclusivos, selección inclusiva y ajustes razonables para promover la diversidad y la inclusión en el entorno laboral.',
  title: 'Transformación Inclusiva',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

FeatureCard231.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard231
