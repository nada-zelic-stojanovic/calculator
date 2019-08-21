import React from 'react';


const userInput = props => (
    <div input={props.expression} style={{textAlign: 'right', fontSize: '30px'}}>
        {props.expression.length > 0 ? props.expression : '0'}
    </div>
);

export default userInput;