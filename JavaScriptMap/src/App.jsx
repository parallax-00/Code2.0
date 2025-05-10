import "./App.css";
import React from "react";
function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {numbers.map((num) => {
        <ul key={Math.random}>
          <li>{num}</li>
        </ul>;
      })}
    </>
  );
}

export default App;
