import React from 'react'
import classes from './Operators.module.css'

const Operators = (props) => (
  <div className={classes.Operators}>
    <button onClick={() => props.clicked('+')} style={{ marginTop: '18px' }}>
      +
    </button>
    <button onClick={() => props.clicked('-')}>-</button>
    <button onClick={() => props.clicked('*')}>x</button>
    <button onClick={() => props.clicked('/')}>/</button>
    <button onClick={() => props.clicked('%')}>%</button>
    <button onClick={props.equalsClicked}>=</button>
  </div>
)

export default Operators
