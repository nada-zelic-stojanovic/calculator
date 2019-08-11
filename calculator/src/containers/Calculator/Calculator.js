import React, { Component } from 'react';
import Display from './../../components/Display/Display';
import Controls from './../../components/Keys/Controls';
import classes from './Calculator';

class Calculator extends Component {
  state = {
    inputExpression: '',
    result: '',
    prevInput: ''
  };

  handleInput = input => {
    if (
      isNaN(input) &&
      input !== '.' &&
      (input !== '-' && input !== this.state.inputExpression[0])
    ) {
      input = ' ' + input + ' ';
    }
    let newInput = this.state.inputExpression + input;
    this.setState({ inputExpression: newInput });
  };

  handleEquals = () => {
    let inputArr = this.state.inputExpression.replace(/ /g, '').split('');
    let result;
    if (inputArr.includes('^')) {
      let newArr = inputArr.join('').split('^');
      let [num1, num2] = newArr;
      result = Math.pow(num1, num2);
    } else {
      result = eval(this.state.inputExpression);
    }
    let previousInput = this.state.inputExpression;
    this.setState({ result: result, prevInput: previousInput, inputExpression: '' });
  };

  handleClear = () => {
    this.setState({ inputExpression: '', result: '' });
  };

  handleBackspace = () => {
    let expression = this.state.inputExpression.trimRight().slice(0, -1);
    this.setState({ inputExpression: expression });
  };

  handlePow2 = () => {
    let result = Math.pow(this.state.inputExpression, 2);
    this.setState({ result: result });
  };

  handleSqrt = () => {
    let result = Math.sqrt(this.state.inputExpression);
    this.setState({ result: result });
  };

  handleReciprocal = () => {
      let result = 1 / this.state.inputExpression;
      this.setState({ result: result });
  }

  render() {
    return (
      <div className={classes.Calculator}>
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
        />
      </div>
    );
  }
}

export default Calculator;
