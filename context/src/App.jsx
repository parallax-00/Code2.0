import "./App.css";
import UserContextProvider from "./Context/UserConProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Parallax!</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
