import React from "react";
import Header from "../header/Header";
import { Chart, Title, Tooltip, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register the necessary components
Chart.register(Title, Tooltip, ArcElement, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

function PieChart() {
  return (
    <div>
      <Header />
      <div className="container px-3 mx-auto">
        <div className="responsive-chart">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default PieChart;
