import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,

  cutout: 160,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  labels: ["Spinning", "Transportation", "Carding", "Heating & Cooling"],
  datasets: [
    {
      data: [22, 16, 27, 35],

      backgroundColor: [
        "rgba(87, 204, 120, 1)",
        "rgba(85, 219, 219, 1)",
        "rgba(226, 255, 50, 1)",
        "rgba(254, 193, 2, 1)",
      ],
      borderwidth: 0,
    },
  ],
};

export default function Temp() {
  return (
    <div className=" ">
      <Doughnut data={data} options={options} />
    </div>
  );
}
