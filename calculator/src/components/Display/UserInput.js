import React from 'react';

const userInput = props => (
    <div input={props.expression} style={{textAlign: 'right', fontSize: '30px'}}>
        {props.expression ? props.expression : '0'}
    </div>
);

export default userInput;