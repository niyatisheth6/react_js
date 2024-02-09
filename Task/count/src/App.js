import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="bg-slate-300 w-screen h-screen flex items-center justify-center gap-3">
      <Counter initialValue={0}/>
      <Counter initialValue={10}/>
      <Counter initialValue={15}/>

    </div>
  );
}

export default App;
