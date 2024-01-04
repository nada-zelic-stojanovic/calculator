import React from 'react';
import Numbers from './Numbers/Numbers';
import Operators from './Operators/Operators';
import AdditionalKeys from './AdditionalKeys/AdditionalKeys';
import classes from './Controls.module.css';

const controls = props => (
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
    <Operators clicked={props.clicked} equalsClicked={props.equalsClicked}/>
    <Numbers clicked={props.clicked} />
  </div>
);

export default controls;
