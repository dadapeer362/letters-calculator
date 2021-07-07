// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeEnter = event => {
    const {value} = event.target
    this.setState(prevState => ({count: value}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="content-container">
            <h1 className="heading-1">Calculate the Letters you enter</h1>
            <label className="paragraph-1" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              className="input-style"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onChangeEnter}
              id="phraseText"
            />
            <p className="paragraph-2">No.of letters: {count.length}</p>
          </div>
          <img
            className="img-size"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
