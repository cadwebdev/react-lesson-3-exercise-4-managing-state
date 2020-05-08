import React, { Component } from 'react'
import './App.css'
import Equation from './Equation'
import Score from './Score'

class App extends Component {
  state = {
    numCorrect: 0,
    numQuestions: 0,
  }

  handleAnswer = (answerWasCorrect) => {
    if (answerWasCorrect) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1,
      }))
    }
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1,
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="game">
          <h2>Mental Math</h2>
          <Equation handleAnswer={this.handleAnswer} />
          <Score
            numCorrect={this.state.numCorrect}
            numQuestions={this.state.numQuestions}
          />
        </div>
      </div>
    )
  }
}

export default App
