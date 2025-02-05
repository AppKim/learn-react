import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const upCount = () => {
    setCount((current) => current + 1);
    console.log(count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={upCount}>+</button>
    </div>
  );
};

export default Counter;
