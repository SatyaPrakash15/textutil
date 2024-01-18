import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import Alert from "./components/alert";

function App() {
  return (
    <div>
      <Navbar title="Textutil2" about="About us" />
      {/* <Alert alert="this is alert" /> */}
      <div className="container my-7">
        <Textform heading="Enter your text for Analyze" />
      </div>
    </div>
  );
}

export default App;
