import "./App.css";
import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <>
      {/* <User img='https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' name='Parallax' age={18} isMarried='False' /> */}

      <Person name="Parallax" age="19" />
      <Product name="Galaxy S" price="$399" />
    </>
  );
}

export default App;

// const User = ({img, name, age, isMarried}) => {
//   return (
//     <section>
//       <img src={img} width={300}/>
//       <h2>Name: {name}</h2>
//       <h2>Age: {age}</h2>
//       <h2>is Married: {isMarried}</h2>
//     </section>
//   )
// }
