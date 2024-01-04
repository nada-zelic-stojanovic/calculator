import React, { Component } from 'react';
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

class Calculator extends Component {
  state = {
    inputExpression: [],
    result: '',
    prevInput: ''
  };

  handleInput = input => {
    const { inputExpression } = this.state;

    if (isNumber(input)) {
      const newInputExpression = addDigit(inputExpression, input);
      //console.log(newInputExpression);
      this.setState({ inputExpression: newInputExpression });
    } else if (input === 'switchSign') {
      const newInputExpression = switchSign(inputExpression);
      this.setState({ inputExpression: newInputExpression });
    } else if (input === '%') {
      const newInputExpression = handlePercent(inputExpression);
      this.setState({ inputExpression: newInputExpression });
    } else if (isNaN(input) && inputExpression.length > 0) {
      const newInputExpression = inputExpression.concat(input);
      this.setState({ inputExpression: newInputExpression });
    }
  };

  handleParentheses = inputPar => {
    const { inputExpression } = this.state;
    const newInputExpression = inputExpression.concat(inputPar);
    this.setState({ inputExpression: newInputExpression });
  }

  handleEquals = () => {
    const { inputExpression } = this.state;
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
    this.setState({
      result: result,
      prevInput: previousInput,
      inputExpression: ''
    });
  };

  handleClear = () => {
    this.setState({ inputExpression: '', result: '' });
  };

  handleBackspace = () => {
    let { inputExpression } = this.state;
    let expression = inputExpression.toString().trimRight().slice(0, -1);
    this.setState({ inputExpression: expression });
  };

  handlePow2 = () => {
    let result = Math.pow(this.state.inputExpression, 2);
    const { inputExpression } = this.state;
    let newInputExp = inputExpression + '^2';
    this.setState({ result: result, prevInput: newInputExp, inputExpression: '' });
  };

  handleSqrt = () => {
    let result = Math.sqrt(this.state.inputExpression);
    const { inputExpression } = this.state;
    let newInputExp = 'sqrt(' + inputExpression + ')';
    this.setState({ result: result, prevInput: newInputExp, inputExpression: '' });
  };

  handleReciprocal = () => {
    let result = 1 / this.state.inputExpression;
    const { inputExpression } = this.state;
    let newInputExp = '1/' + inputExpression;
    this.setState({ result: result, prevInput: newInputExp, inputExpression: '' });
  };

  render() {
    return (
      <div>
        <Display
          userInput={this.state.inputExpression}
          score={this.state.result}
          previousInput={this.state.prevInput}
        />
        <Controls
          clicked={this.handleInput}
          equalsClicked={this.handleEquals}
          clearClicked={this.handleClear}
          backspaceClicked={this.handleBackspace}
          xPow2Clicked={this.handlePow2}
          sqrtClicked={this.handleSqrt}
          reciprocalClicked={this.handleReciprocal}
          parenthesesClicked={this.handleParentheses}
        />
      </div>
    );
  }
}

export default Calculator;
