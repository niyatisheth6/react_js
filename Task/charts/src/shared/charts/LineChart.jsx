import React from "react";
import Header from "../header/Header";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, PointElement, LineElement } from "chart.js";

// Register the necessary components
Chart.register(CategoryScale, PointElement, LineElement);
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

function LineChart() {
  return (
    <div>
      <Header />
      <div className="container px-3 mx-auto">
        <div className="responsive-chart">
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}

export default LineChart;
