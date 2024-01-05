import React from 'react';

const UserInput = props => (
  <div>
    <div
      input={props.expression}
      style={{ textAlign: 'right', fontSize: '40px' }}
    >
      {props.expression.length > 0 ? props.expression : '0'}
    </div>
  </div>
);

export default UserInput;
