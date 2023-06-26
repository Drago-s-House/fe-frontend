import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard25 = (props) => {
  return (
    <>
      <div className={`feature-card25-feature-card ${props.rootClassName} `}>
        <div className="feature-card25-container">
          <img
            alt={props.image_alt}
            src="/inspiration-200h.png"
            className="feature-card25-image"
          />
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
          .feature-card25-image {
            width: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card25-text {
            font-size: 22px;
            font-family: Tahoma;
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
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  description:
    'Talleres y conferencias para fortalecer habilidades de liderazgo, superar barreras y alcanzar el éxito más allá de las limitaciones.',
  rootClassName: '',
  title: 'Empoderamiento y Desarrollo Personal',
}

FeatureCard25.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard25
