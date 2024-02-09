import { Route, Routes } from "react-router-dom";

import "./App.css";
import ModalForm from "./shared/ModalForm";
import AllCard from "./components/AllCard";
import DisplayData from "./components/DisplayData";
import Pagination from "./components/Pagination";
import Pagination2 from "./components/Pagination2";
import Pagination3 from "./components/Pagination3";
import Pagination4 from "./components/Pagination4";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllCard />} />
        <Route path="/display-data" element={<DisplayData />} />
        <Route path="/pagination-1" element={<Pagination />} />
        <Route path="/pagination-2" element={<Pagination2 />} />
        <Route path="/pagination-3" element={<Pagination3 />} />
        <Route path="/pagination-4" element={<Pagination4 />} />
        <Route path="/card" element={<ModalForm />} />
      </Routes>
    </div>
  );
}

export default App;
