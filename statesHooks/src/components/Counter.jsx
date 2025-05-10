import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0); // count is the value and setCount is the function which is used to 
                                            // reflect the change in value on the UI. "Rerender".

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
};

export default Counter;
