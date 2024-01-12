import React from 'react'
import classes from './Numbers.module.css'

const Numbers = (props) => (
  <div className={classes.Numbers}>
    <div>
      <button onClick={() => props.clicked(1)}>1</button>
      <button onClick={() => props.clicked(2)}>2</button>
      <button onClick={() => props.clicked(3)}>3</button>
    </div>
    <div>
      <button onClick={() => props.clicked(4)}>4</button>
      <button onClick={() => props.clicked(5)}>5</button>
      <button onClick={() => props.clicked(6)}>6</button>
    </div>
    <div>
      <button onClick={() => props.clicked(7)}>7</button>
      <button onClick={() => props.clicked(8)}>8</button>
      <button onClick={() => props.clicked(9)}>9</button>
    </div>
    <div>
      <button onClick={() => props.clicked('switchSign')}>+/-</button>
      <button onClick={() => props.clicked(0)}>0</button>
      <button onClick={() => props.clicked('.')}>.</button>
    </div>
  </div>
)

export default Numbers
