import React from 'react'
import classes from './Display.module.css'
import UserInput from './UserInput'

const Display = (props) => {
  return (
    <div className={classes.Display}>
      <p result={props.score} style={{ textAlign: 'right', fontSize: '40px' }}>
        {props.score ? props.previousInput + ' = ' + props.score : '0'}
      </p>
      <UserInput expression={props.userInput} />
    </div>
  )
}

export default Display
