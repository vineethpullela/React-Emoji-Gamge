import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {emojiDetails} = this.props
    const {emojiName, emojiUrl, id} = emojiDetails

    return (
      <li className="emoji-container">
        <img src={emojiUrl} alt={emojiName} key={id} className="emoji-img" />
      </li>
    )
  }
}

export default EmojiCard
