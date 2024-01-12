import React from 'react'
import PropTypes from 'prop-types'

import classes from './AdditionalKeys.module.css'

const AdditionalKeys = (props) => (
  <div>
    <div className={classes.EraseButtons}>
      <button onClick={props.bClicked}>&#8678;</button>
      <br />
      <button onClick={props.cClicked}>C</button>
    </div>
    <div className={classes.Parentheses}>
      <button onClick={() => props.parenthesesClicked('(')}>(</button>
      <button onClick={() => props.parenthesesClicked(')')}>)</button>
    </div>
    <div className={classes.OperationButtons}>
      <button onClick={props.xPow2Clicked}>
        x<sup>2</sup>
      </button>
      <button onClick={() => props.powClicked('^')}>
        x<sup>y</sup>
      </button>
      <br />
      <button onClick={props.sqrtClicked}>&radic;</button>
      <button onClick={props.recClicked}>1/x</button>
    </div>
  </div>
)

AdditionalKeys.propTypes = {
  bClicked: PropTypes.func.isRequired,
  cClicked: PropTypes.func.isRequired,
  parenthesesClicked: PropTypes.func.isRequired,
  xPow2Clicked: PropTypes.func.isRequired,
  powClicked: PropTypes.func.isRequired,
  sqrtClicked: PropTypes.func.isRequired,
  recClicked: PropTypes.func.isRequired,
}

export default AdditionalKeys
