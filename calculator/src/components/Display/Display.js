import React from 'react';
import classes from './Display.module.css';
import UserInput from './UserInput';

const display = props => {
  return (
    <div className={classes.Display}>
      <p result={props.score} style={{ textAlign: 'right', fontSize: '35px' }}>
        {props.score ? props.score : '0'}
      </p>
      <UserInput className={classes.UserInput} expression={props.userInput} />
    </div>
  );
};

export default display;
