import "./App.css";
import Greetings from "./components/Greetings";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

import React from "react";

// const Cart = () => {
//   const items = ["Phone", "Laptop", "AirPods"];
//   return (
//     <div>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 && <h2>You have {items.length} items in your cart.</h2>}
//       <p> Items in the Cart: </p>
//       {items.map((i) => (
//         <ul key={Math.random()}>
//           <li>{i} </li>
//         </ul>
//       ))}
//     </div>
//   );
// };

function App() {
  return (
    <>
      {/* <Password isValid={true} /> */}
      {/* <Cart /> */}
      <Weather />
      <UserStatus loggedIn={true} admin={true} />
      <Greetings timeOfDay="evening" />
    </>
  );
}
// const IsValid = () => {
//   return <h1>Password is Valid</h1>;
// };
// const IsNotValid = () => {
//   return <h1>Password is not Valid</h1>;
// };

// const Password = ({ isValid }) => {
//   // if (isValid) {
//   //   return <IsValid />;
//   // }
//   // return <IsNotValid />;
//   return isValid ? <IsValid /> : <IsNotValid />;
// };
export default App;
