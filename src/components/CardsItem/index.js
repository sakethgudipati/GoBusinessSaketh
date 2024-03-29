import './index.css'

const CardItem = props => {
  const {cardInfo} = props
  const {imgUrl, value, displayText} = cardInfo

  return (
    <li className="card-item">
      <img src={imgUrl} className="card-image" alt={displayText} />
      <div className="p1">
        <h1 className="value">{value}</h1>
        <p className="display-text">{displayText}</p>
      </div>
    </li>
  )
}

export default CardItem
