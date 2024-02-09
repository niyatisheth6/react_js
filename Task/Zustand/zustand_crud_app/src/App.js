import { Route, Routes } from "react-router-dom";
import TableData from "./components/TableData";
import FormData from "./components/FormData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TableData />} />
      <Route path="/form-data" element={<FormData />} />
    </Routes>
  );
}

export default App;
