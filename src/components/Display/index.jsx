import React from 'react'
import PropTypes from 'prop-types'

import classes from './Display.module.css'
import UserInput from './UserInput'

const Display = (props) => {
  return (
    <div className={classes.Display}>
      <p result={props.score} className={classes.Content}>
        {props.score ? props.previousInput + ' = ' + props.score : '0'}
      </p>
      <UserInput expression={props.userInput} />
    </div>
  )
}

Display.propTypes = {
  score: PropTypes.number,
  userInput: PropTypes.string,
  previousInput: PropTypes.string,
}

export default Display
