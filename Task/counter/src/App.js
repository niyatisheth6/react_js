import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <Counter card_num="1" initial={0} />
      </div>
      <div>
        <Counter card_num="2" initial={5} />
      </div>
      <div>
        <Counter card_num="3" initial={15} />
      </div>
      <div>
        <Counter card_num="4" initial={-5} />
      </div>
      <div>
        <Counter card_num="5" initial={25} />
      </div>
      <div>
        <Counter card_num="6" initial={-25} />
      </div>
    </div>
  );
}

export default App;
