import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="top-container">
        <div className="game-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-img"
          />
          <h1 className="log-name">Emoji Game</h1>
        </div>
        <div className="scores-container">
          <p className="score-name">Score: 0</p>
          <p className="score-name">Top Score: 0</p>
        </div>
      </div>
    )
  }
}

export default NavBar
