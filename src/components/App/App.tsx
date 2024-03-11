import React, { useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies'
import { Currency } from '../../types/currency';
import currencies from '../../data/currencies';
import Amount from '../Amount/Amount';

function App() {

  const [baseAmount, setBaseAmount] = useState(1);
  const [currencySelected, setCurrencySelected] = useState<Currency>();
  const amountValue = baseAmount * (currencySelected?.rate || 0);
  return (
    <div className="App">
      <Header baseAmount={baseAmount} setBaseAmount={setBaseAmount}/>
      <Currencies setCurrencySelected={setCurrencySelected}
      currencies={currencies}/>
       {currencySelected ? (
        <Amount currency={currencySelected.description} value={amountValue} description={currencySelected.code} />
      ) : (
        <div
          style={{
            color: 'red',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Veuillez selectionner une devise
        </div>
      )}
    </div>
  );
}

export default App;
