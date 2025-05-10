import UserList from "./components/UserList";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <UserList />
      <ProductList/>
    </>
  );
}

export default App;
