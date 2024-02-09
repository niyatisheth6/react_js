import { Route, Routes } from "react-router-dom";
import FormData from "./components/FormData";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formdata" element={<FormData />} />
    </Routes>
  );
}

export default App;
