import React, {useState} from 'react';
import Display from './../../components/Display/Display';
import Controls from './../../components/Keys/Controls';
import  './Calculator.css';

const isNumber = x => !isNaN(x);

const addDigit = (inputExpression, digit) => {
  const lastIndex = inputExpression.length - 1;
  const lastElement = inputExpression[lastIndex];
  if (isNumber(lastElement)) {
    const newInputExpression = [
      ...inputExpression.slice(0, lastIndex),
      lastElement.toString().concat(digit)
    ];
    return newInputExpression;
  } else {
    const newInputExpression = [...inputExpression, digit];
    return newInputExpression;
  }
};

const switchSign = inputExpression => {
  const lastIndex = inputExpression.length - 1;
  const lastElement = inputExpression[lastIndex];
  if (isNumber(lastElement)) {
    const newInputExpression = [
      ...inputExpression.slice(0, lastIndex),
      '(-' + lastElement + ')'
    ];
    return newInputExpression;
  }
  return inputExpression;
};

const handlePercent = inputExpression => {
  const lastIndex = inputExpression.length - 1;
  const lastElement = inputExpression[lastIndex];
  console.log(lastElement);

  let newLastElement = lastElement / 100;
  const newInputExpression = [
    ...inputExpression.slice(0, lastIndex),
    +newLastElement
  ];
  return newInputExpression;
};

const Calculator = () => {
  const [inputExpression, setInputExpression] = useState('');
  const [result, setResult] = useState('');
  const [prevInput, setPrevInput] = useState('');

  const handleInput = input => {
    let newInputExpression;
    if (isNumber(input)) {
      newInputExpression = addDigit(inputExpression, input);
    } else if (input === 'switchSign') {
      newInputExpression = switchSign(inputExpression);
    } else if (input === '%') {
      newInputExpression = handlePercent(inputExpression);
    } else if (isNaN(input) && inputExpression.length > 0) {
      newInputExpression = inputExpression.concat(input);
    }
    setInputExpression(newInputExpression)
  };

  const handleParentheses = inputPar => {
    const newInputExpression = inputExpression.concat(inputPar);
    setInputExpression(newInputExpression);
  }

  const handleEquals = () => {
    let strInputExpression;
    if (typeof inputExpression === 'string') {
      strInputExpression = inputExpression.concat();
    } else {
      strInputExpression = inputExpression.join('');
    }
    let result;
    if (inputExpression.includes('^')) {
      let newArr = inputExpression.join('').split('^');
      let [num1, num2] = newArr;
      result = Math.pow(num1, num2);
    } else {
      result = eval(strInputExpression);
    }
    let previousInput = strInputExpression;
    setInputExpression([]);
    setPrevInput(previousInput);
    setResult(result);
  };

  const handleClear = () => {
    setInputExpression('');
    setResult('');
  };

  const handleBackspace = () => {
    let expression = inputExpression.toString().trimRight().slice(0, -1);
    setInputExpression(expression);
  };

  const handlePow2 = () => {
    let result = Math.pow(inputExpression, 2);
    let newInputExp = inputExpression + '^2';
    setInputExpression('');
    setResult(result);
    setPrevInput(newInputExp);
  };

  const handleSqrt = () => {
    let result = Math.sqrt(inputExpression);
    let newInputExp = 'sqrt(' + inputExpression + ')';
    setInputExpression('');
    setResult(result);
    setPrevInput(newInputExp);
  };

  const handleReciprocal = () => {
    let result = 1 / inputExpression;
    let newInputExp = '1/' + inputExpression;
    setInputExpression('');
    setResult(result);
    setPrevInput(newInputExp);
  };

    return (
      <div>
        <Display
          userInput={inputExpression}
          score={result}
          previousInput={prevInput}
        />
        <Controls
          clicked={handleInput}
          equalsClicked={handleEquals}
          clearClicked={handleClear}
          backspaceClicked={handleBackspace}
          xPow2Clicked={handlePow2}
          sqrtClicked={handleSqrt}
          reciprocalClicked={handleReciprocal}
          parenthesesClicked={handleParentheses}
        />
      </div>
    );
}

export default Calculator;
