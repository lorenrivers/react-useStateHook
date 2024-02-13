import { useState } from "react";

export default function App() {
  let [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  function decreaseCounter() {
    setMyCounterState(myCounterState - 1);
  }

  function reset() {
    setMyCounterState((myCounterState = 0));
  }

  return (
    <div>
      <p onClick={reset}>{myCounterState} cookies.</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={decreaseCounter}>Lose a cookie</button>
    </div>
  );
}
