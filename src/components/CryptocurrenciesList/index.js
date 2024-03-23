import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrencyData} = this.props

    return (
      <div className="crypto-currencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="cryptocurrencies-table-container">
          <div className="table-column-header-container">
            <p className="table-column-header"> Coin Type</p>
            <div className="table-column-values">
              <p className="table-column-header-values">USD</p>
              <p className="table-column-header-values">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrencies-list-container">
            {cryptoCurrencyData.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                cryptocurrencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
