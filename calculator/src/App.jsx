import "./App.css";
import React, { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  const display = (val) => setValue(value + val);
  const Clear = () => setValue("");
  const calculate =(text) => setValue(eval('text'))

  return (
    <form>
      <input type="text" name="Value" value={value} />
      <span onClick={() => Clear("C")}>C</span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span onClick={() => display("+")}>+</span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span onClick={() => calculate("=")}>=</span>
    </form>
  );
}

export default App;
