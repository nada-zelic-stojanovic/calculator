import React from 'react'
import PropTypes from 'prop-types'

import classes from './Display.module.css'

const UserInput = (props) => (
  <div>
    <div
      input={props.expression}
      className={`${classes.Content} ${classes.SmallerFont}`}
    >
      {props.expression.length > 0 ? props.expression : '0'}
    </div>
  </div>
)

UserInput.propTypes = {
  expression: PropTypes.string,
}

export default UserInput
