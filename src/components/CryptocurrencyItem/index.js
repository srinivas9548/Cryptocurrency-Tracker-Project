import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li className="list-item-container">
      <div className="currency-logo-and-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
