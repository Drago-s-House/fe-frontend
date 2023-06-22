import React from 'react'

import PropTypes from 'prop-types'

const Number = (props) => {
  return (
    <>
      <div className={`number-number number ${props.rootClassName} `}>
        <span className="number-text">{props.Value}</span>
      </div>
      <style jsx>
        {`
          .number-number {
            position: relative;
            background-color: #ffffff;
          }
          .number-root-class-name {
            background-color: #e8e6da;
          }
          .number-root-class-name1 {
            background-color: #eae7cd;
          }
          .number-root-class-name2 {
            background-color: #d8d1aa;
          }
          @media (max-width: 479px) {
            .number-number {
              width: 40px;
              height: 40px;
            }
            .number-text {
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
            }
          }
        `}
      </style>
    </>
  )
}

Number.defaultProps = {
  rootClassName: '',
  Value: '1',
}

Number.propTypes = {
  rootClassName: PropTypes.string,
  Value: PropTypes.string,
}

export default Number
