import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Counter/Controller";
import Viewer from "./components/Counter/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(false);
  const updateCount = (value) => {
    setCount(count + value);
  };
  useEffect(() => {
    console.log("update count");
  }, [count]);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = !isMounted.current;
      return;
    }
    console.log("rendering");
  });
  return (
    <>
      <div className="counter">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count}></Viewer>
        </section>
        <section>
          <Controller updateCount={updateCount}></Controller>
        </section>
      </div>
    </>
  );
}

export default App;
