import { Route, Routes } from "react-router";
import "./App.css";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Read/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/update" element={<Update/>}></Route>
    </Routes>

  </div>;
}

export default App;
