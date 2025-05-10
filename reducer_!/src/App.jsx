//! State is the current state of the UI .
//! Dispatch dispatch the (type) of action.
//! Reducer is a function in which the "type" of action and its corresponding operation is defined along with the state manipulation code.
//! initialState is the initial state of UI when the program first loads.

import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <h1>Parallax</h1>
      <Counter />
    </>
  );
}

export default App;
