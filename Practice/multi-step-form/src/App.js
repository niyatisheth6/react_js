import { Route, Routes } from "react-router-dom";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FormData from "./components/FormData";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/secondstep" element={<SecondStep />} />
      <Route path="/thirdstep" element={<ThirdStep />} />
      <Route path="/formdata" element={<FormData />} />
    </Routes>
  );
}

export default App;
