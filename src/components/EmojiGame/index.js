/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedEmojis: [], isGameEnd: false, topScore: 0}

  getShuffledEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  render() {
    const {clickedEmojis, isGameEnd, topScore} = this.state
    const shuffledEmojisList = this.getShuffledEmojis()

    return (
      <div className="app-container">
        <NavBar />
        <ul className="emojis-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
        <WinOrLossCard />
      </div>
    )
  }
}

export default EmojiGame
