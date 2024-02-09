import React from "react";
import Header from "../header/Header";
import { Doughnut } from "react-chartjs-2";
import { Chart, Title, Tooltip, ArcElement, Legend } from "chart.js";

// Register the necessary components
Chart.register(Title, Tooltip, ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: [
        "rgba(255, 159, 64, 0.7)",
        "rgba(255, 99, 132, 0.7)",
        "rgba(255, 205, 86, 0.7)",
      ],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Male", "Female", "Others"],
};

function DoughnutChart() {
  return (
    <div>
      <Header />
      <div className="container px-3 mx-auto">
        <div className="responsive-chart">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
