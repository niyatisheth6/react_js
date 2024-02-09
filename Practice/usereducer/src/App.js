import "./App.css";
import MultiUseReducer from "./components/MultiUseReducer";
import UseReducre from "./components/UseReducre";
import UseReducre2 from "./components/UseReducre2";

function App() {
  return (
    <div>
      <h1>Frist Counter</h1>
      <UseReducre />
      <h1>Second Counter</h1>
      <UseReducre2 />
      <h1>Third Counter</h1>
      <MultiUseReducer />
    </div>
  );
}

export default App;
