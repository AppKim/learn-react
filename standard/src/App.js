import { useEffect, useState } from 'react';
import Button from './Button';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const upCounter = () => setCounter((current) => current + 1);
  const search = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log('upCounter');
  }, [counter]);
  useEffect(() => {
    if (keyword !== undefined && keyword.length > 5) console.log('serach');
  }, [keyword]);

  return (
    <div>
      <h1>Welcome Back! </h1>
      <Button text="Continue" />
      <hr />
      <input
        type="text"
        placeholder="keyoword"
        value={keyword}
        onChange={search}
      ></input>
      <h1>{counter}</h1>
      <button onClick={upCounter}>Click Me</button>
    </div>
  );
}

export default App;
