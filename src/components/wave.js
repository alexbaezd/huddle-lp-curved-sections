import React from "react"
import PropTypes from 'prop-types'


const Wave = ({ colorFill }) => (
  <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title id="wave">Wave</title>
    <desc id="catDesc">
      An  animate waves
    </desc>
    <path fill={colorFill}>
      <animate
        repeatCount="indefinite"
        fill="freeze"
        attributeName="d"
        dur="10s"
        values="
              M0 32.9087C191.5 85.5 159 51.8273 446 12C660.818 -17.8105 941.564 19.6061 1169.5 32.9088C1806.5 70.0849 2208 70.5007 2560 32.9088V178.91L0 178.91V32.9087Z;
              M0 112.074C316 112.074 675 148.5 1115 40.5C1555 -67.4999 1652.79 75.7887 1870.5 112.074C2146.5 158.074 2156 214.166 2560 112.074V258.075L0 258.075V112.074Z;
              M0 65.6584C158 23.0001 397.5 0.5 547.5 0.5C697.5 0.5 1180.06 121 1478.5 121C1764.5 121 1626 -26.0004 2560 65.6585V211.66L0 211.66V65.6584Z;
              M0 32.9087C191.5 85.5 159 51.8273 446 12C660.818 -17.8105 941.564 19.6061 1169.5 32.9088C1806.5 70.0849 2208 70.5007 2560 32.9088V178.91L0 178.91V32.9087Z;
              "
      />
    </path>
  </svg>
)


Wave.propTypes = {
  colorFill:PropTypes.string.isRequired
}

export default Wave
