import { Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },
};

// export const data = {
//   datasets: [
//     {
//       label: "Spinning",
//       data: faker.datatype.number({ min: 0, max: 50000 }),
//       backgroundColor: "rgba(87, 204, 120, 1)",
//     },
//     {
//       label: "Transportation",
//       data: faker.datatype.number({ min: 0, max: 50000 }),
//       backgroundColor: "rgba(85, 219, 219, 1)",
//     },
//     {
//       label: "Carding",
//       data: faker.datatype.number({ min: 0, max: 50000 }),
//       backgroundColor: "rgba(226, 255, 50, 1)",
//     },
//     {
//       label: "Heating & Cooling",
//       data: faker.datatype.number({ min: 0, max: 50000 }),
//       backgroundColor: "rgba(254, 193, 2, 1)",
//     },
//   ],
// };
const data = {
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
      backgroundColor: "rgba(87, 204, 120, 1)",
    },
  ],
};

export default function DoughnutChart() {
  return (
    <div className="">{/* <Doughnut data={data} options={options} /> */}</div>
  );
}
