import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Enev';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  /*
  rerenderingの条件
  1.自身が管理するstate値に変更があった時
  2.親から渡されるprops値に変更があった時
  3.親コンポーネントがrerenderingされた時
  */

  const [counter, setCounter] = useState(0);
  const changeCounter = (value) => setCounter((current) => current + value);
  const isMounted = useRef(false);
  // console.log('App', 'rerendered');

  // 1. mount
  useEffect(() => {
    console.log('mount');
  }, []);

  // 2. update
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('updated');
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer counter={counter} />
        {counter % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller changeCounter={changeCounter} />
      </section>
    </div>
  );
}

export default App;
