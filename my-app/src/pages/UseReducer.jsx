// UseReducer.jsx
import React, { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const incrementClicks = useRef(0);
  const decrementClicks = useRef(0);
  const resetClicks = useRef(0);
  const totalClicks = useRef(0);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
    incrementClicks.current += 1;
    totalClicks.current += 1;
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
    decrementClicks.current += 1;
    totalClicks.current += 1;
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    resetClicks.current += 1;
    totalClicks.current += 1;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Counter: {state.count}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ margin: "0 10px" }}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>

      <h3>Button Click Tracking</h3>
      <p><b>Total Clicks: {totalClicks.current}</b></p>
    </div>
  );
}
