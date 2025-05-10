import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={()=>setCount(count + 1)}>Click to Increment</button>
    </div>
  );
};

export default Counter;
