import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard21 = (props) => {
  return (
    <>
      <div className={`feature-card21-feature-card ${props.rootClassName} `}>
        <div className="feature-card21-container">
          <img
            alt={props.image_alt}
            src="/instructor-200h.png"
            className="feature-card21-image"
          />
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
          .feature-card21-image {
            width: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card21-text {
            font-size: 22px;
            font-style: normal;
            font-family: Tahoma;
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
  title: 'Asesoría en Desarrollo Organizacional',
  rootClassName: '',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  description:
    'Diagnóstico y consultoría para convertirse en una empresa inclusiva, creación de comités inclusivos y desarrollo de manuales inclusivos.',
}

FeatureCard21.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard21
