import { Route, Routes } from "react-router-dom";
import "./App.css";
import DoughnutChart from "./shared/charts/DoughnutChart";
import LineChart from "./shared/charts/LineChart";
import BarChart from "./shared/charts/BarChart";
import LineBarChart from "./shared/charts/LineBarChart";
import PieChart from "./shared/charts/PieChart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PieChart />} />
      <Route path="/doughnut-chart" element={<DoughnutChart />} />
      <Route path="/line-chart" element={<LineChart />} />
      <Route path="/bar-chart" element={<BarChart />} />
      <Route path="/line-bar-chart" element={<LineBarChart />} />
    </Routes>
  );
}

export default App;
