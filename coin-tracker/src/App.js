import { useEffect, useState } from 'react';
import styled from './App.module.css';

function App() {
  const [loading, switchLoading] = useState(true);
  const [coins, setCoins] = useState('');
  const [money, setMoney] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setPrice(json[0].quotes.USD.price);
        switchLoading((current) => !current);
      });
  }, []);
  const updateMoney = (event) => {
    setMoney(event.target.value);
    setPurchaseAmount(event.target.value / price);
  };
  const calculate = (event) => {
    setPrice(event.target.value);
    setPurchaseAmount(event.target.value / money);
  };
  return (
    <div>
      <h1>The Coins!{loading ? null : `(${coins.length})`}</h1>
      <div className={styled.container}>
        <input
          type="text"
          placeholder="Enter the money"
          onChange={updateMoney}
          value={money}
        ></input>
      </div>
      <div className={styled.container}>
        {loading ? (
          <h3>loading....</h3>
        ) : (
          <select onChange={calculate}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
      <div className={styled.container}>You can buy {purchaseAmount}</div>
    </div>
  );
}

export default App;
