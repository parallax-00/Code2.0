import "./App.css";
import useFetch from "./Hooks/useFetch";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((e) => {
          return <p key={e.id}>{e.title}</p>;
        })}
    </>
  );
}

export default App;
