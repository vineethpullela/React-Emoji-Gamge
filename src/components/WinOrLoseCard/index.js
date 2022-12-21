import {Component} from 'react'
import './index.css'

class WinOrLossCard extends Component {
  render() {
    return (
      <div className="win-loss-card-container">
        <div className="text-container">
          <h1 className="win-loss-text">You Won</h1>
          <p className="score-text">Best Score</p>
          <p className="score">12/12</p>
          <button type="button" className="play-again-button">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="you won"
          className="won-img"
        />
      </div>
    )
  }
}

export default WinOrLossCard
