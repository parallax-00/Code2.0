import React, { useReducer, useState } from "react";
import { reducer, initialState } from "./context";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("0");

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleIncrementByAmount = () => {
    dispatch({ type: "addVal", payload: +value || 0 });
    setValue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "subVal", payload: +value || 0 });
    setValue(0);
  };

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleIncrementByAmount}>Add</button>
      <button onClick={handleDecrementByAmount}>Sub</button>
    </div>
  );
};

export default Counter;
