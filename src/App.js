import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    const valuesArray = this.makeNewQuestion()
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
      numCorrect: 0,
      numQuestions: 0,
    }
  }

  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100)
    const value2 = Math.floor(Math.random() * 100)
    const value3 = Math.floor(Math.random() * 100)
    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3)
    return [value1, value2, value3, proposedAnswer]
  }

  updateState = (newValuesArray) => {
    this.setState((currState) => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
    }))
  }

  evaluateAnswer = (givenAnswer) => {
    const correctAnswer =
      this.state.value1 + this.state.value2 + this.state.value3

    if (
      (correctAnswer === this.state.proposedAnswer && givenAnswer === 'true') ||
      (correctAnswer !== this.state.proposedAnswer && givenAnswer === 'false')
    ) {
      return true
    } else {
      return false
    }
  }

  handleClick = (event) => {
    const answerWasCorrect = this.evaluateAnswer(event.target.name)
    if (answerWasCorrect) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1,
      }))
    }
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1,
    }))
    this.updateState(this.makeNewQuestion())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button name="true" onClick={this.handleClick}>
            True
          </button>
          <button name="false" onClick={this.handleClick}>
            False
          </button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    )
  }
}

export default App
