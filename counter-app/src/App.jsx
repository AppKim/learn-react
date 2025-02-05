import Viewer from './components/Viewer';
import Controller from './components/Controller';
import './App.css';
import { useState } from 'react';

function App() {
  /*
  rerenderingの条件
  1.自身が管理するstate値に変更があった時
  2.親から渡されるprops値に変更があった時
  3.親コンポーネントがrerenderingされた時
  */

  const [counter, setCounter] = useState(0);
  const changeCounter = (value) => setCounter((current) => current + value);
  console.log('App', 'rerendered');

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer counter={counter} />
      </section>
      <section>
        <Controller changeCounter={changeCounter} />
      </section>
    </div>
  );
}

export default App;
