import { Currency } from "../../types/currency";
import './Currencies.scss'

type CurrenciesProps = {
    currencies: Currency[] ;
    setCurrencySelected: React.Dispatch<React.SetStateAction<Currency | undefined>>
}

function Currencies({currencies, setCurrencySelected}: CurrenciesProps) {
    const handleClickCurrency = (currency:Currency) => {
        setCurrencySelected(currency)
    }
    return (
        <div className="currencies">
          <h3 className="currencies__title">Currencies</h3>
          <ul className="currencies__list">
            {currencies.map((currency) => (
              <li className="currencies__item" key={currency.code}>
                <button
                  type="button"
                  className="currencies__item-btn"
                  onClick={() => handleClickCurrency(currency)}
                >
                  {currency.description}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Currencies