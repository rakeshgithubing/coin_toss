// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, altValue: 0}

  // let tossResult

  functionClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    // console.log(tossResult)
    if (tossResult !== 0) {
      return (
        this.setState(prevState => ({tails: prevState.tails + 1})),
        this.setState({altValue: tossResult})
      )
    }
    return (
      this.setState(prevState => ({heads: prevState.heads + 1})),
      this.setState({altValue: tossResult})
    )
  }

  render() {
    const {heads, tails, altValue} = this.state
    let img
    const total = heads + tails

    // using element variables conditional rendering
    if (altValue !== 0) {
      img = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    } else {
      img = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    }

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={img} className="image" alt="toss result" />
          <button className="button" type="button" onClick={this.functionClick}>
            Toss Coin
          </button>
          <div className="mini-container">
            <p className="paragraph-1">Total: {total}</p>
            <p className="paragraph-1">Heads: {heads}</p>
            <p className="paragraph-1">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
