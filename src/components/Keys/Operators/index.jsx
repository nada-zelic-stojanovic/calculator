import React from 'react'
import PropTypes from 'prop-types'

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

Operators.propTypes = {
  clicked: PropTypes.func,
  equalsClicked: PropTypes.func,
}

export default Operators
