import "./App.css";
import Accordion from "./components/Accordion";
import { accordionData } from "./data/content";

function App() {
  return (
    <>
      <h1>Parallax</h1>
      <div className="accordian">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
}

export default App;
