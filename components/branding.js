import React from 'react'

import PropTypes from 'prop-types'

const Branding = (props) => {
  return (
    <>
      <div className={`branding-branding ${props.rootClassName} `}>
        <img
          alt={props.Logo_alt}
          src="/eusebio%20fundacion%20(2)-200h.png"
          className="branding-logo"
        />
      </div>
      <style jsx>
        {`
          .branding-branding {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .branding-logo {
            width: var(--dl-size-size-large);
            height: auto;
            object-fit: cover;
          }

          @media (max-width: 767px) {
            .branding-logo {
              width: 15px;
              height: 15px;
            }
          }
          @media (max-width: 479px) {
            .branding-logo {
              width: var(--dl-size-size-large);
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Branding.defaultProps = {
  image_src: '7ad0a0e8-da6e-4899-8ac9-26b3145835b3',
  Logo_alt: 'image',
  rootClassName: '',
  image_alt: 'image',
  CompanyName: 'Helpa',
  Logo_src: 'daf76001-d0b0-439e-a629-94233518e39f',
}

Branding.propTypes = {
  image_src: PropTypes.string,
  Logo_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  CompanyName: PropTypes.string,
  Logo_src: PropTypes.string,
}

export default Branding
