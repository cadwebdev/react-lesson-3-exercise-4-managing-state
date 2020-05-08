import React, { Component } from 'react'

class Equation extends Component {
  constructor(props) {
    super(props)
    const valuesArray = this.makeNewQuestion()
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
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

  handleAnswer = (event) => {
    const answerWasCorrect = this.evaluateAnswer(event.target.name)
    this.props.handleAnswer(answerWasCorrect)
    const newValuesArray = this.makeNewQuestion()
    this.updateState(newValuesArray)
  }

  render() {
    return (
      <div>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button name="true" onClick={this.handleAnswer}>
          True
        </button>
        <button name="false" onClick={this.handleAnswer}>
          False
        </button>
      </div>
    )
  }
}

export default Equation
