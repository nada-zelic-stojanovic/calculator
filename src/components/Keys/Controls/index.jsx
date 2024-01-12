import React from 'react'
import PropTypes from 'prop-types'

import Numbers from '../Numbers'
import Operators from '../Operators'
import AdditionalKeys from '../AdditionalKeys'
import classes from './Controls.module.css'

const Controls = (props) => (
  <div className={classes.Controls}>
    <AdditionalKeys
      cClicked={props.clearClicked}
      bClicked={props.backspaceClicked}
      sqrtClicked={props.sqrtClicked}
      xPow2Clicked={props.xPow2Clicked}
      powClicked={props.clicked}
      recClicked={props.reciprocalClicked}
      parenthesesClicked={props.parenthesesClicked}
    />
    <Operators clicked={props.clicked} equalsClicked={props.equalsClicked} />
    <Numbers clicked={props.clicked} />
  </div>
)

Controls.propTypes = {
  clearClicked: PropTypes.func,
  backspaceClicked: PropTypes.func,
  sqrtClicked: PropTypes.func,
  xPow2Clicked: PropTypes.func,
  clicked: PropTypes.func,
  equalsClicked: PropTypes.func,
  reciprocalClicked: PropTypes.func,
  parenthesesClicked: PropTypes.func,
}

export default Controls
