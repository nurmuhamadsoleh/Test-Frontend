import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { Chart } from "react-chartjs-2";
const labels = [
  "00:00",
  "02:00",
  "04:00",
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
];
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "left",
      //   fullWidth: false,
      labels: {
        fontColor: "#FFFFFF",
        fontSize: 12,
      },
      //   display: false,
    },
    title: {
      display: true,
      text: "Production Daily",
    },
    // scales: {
    //   yAxes: {
    //     grid: {
    //       // drawBorder: true,
    //       color: "#FFFFFF",
    //     },
    //     ticks: {
    //       // beginAtZero: true,
    //       color: "white",
    //       fontSize: 12,
    //     },
    //   },
    //   xAxes: {
    //     grid: {
    //       // drawBorder: true,
    //       color: "#FFFFFF",
    //     },
    //     ticks: {
    //       // beginAtZero: true,
    //       color: "white",
    //       fontSize: 12,
    //     },
    //   },
    // },
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         fontColor: "#FFFFFF",
    //       },
    //     },
    //   ],
    //   xAxes: [
    //     {
    //       ticks: {
    //         fontColor: "#FFFFFF",
    //       },
    //     },
    //   ],
    // },
  },
};
const data = {
  labels,
  datasets: [
    {
      type: "line",
      //   label: "Dataset 1",
      borderColor: "#FFE713",
      borderWidth: 2,
      fill: true,
      data: [50, 80, 100, 130, 150, 180, 190, 198, 200, 200, 200, 200],
    },
    {
      type: "bar",
      //   label: "Dataset 2",
      backgroundColor: "#CA0000",
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],

      borderColor: "#CA0000",
      borderWidth: 2,
      //   fill: true,
    },
    {
      type: "bar",
      //   label: "Dataset 3",
      //   fill: true,
      borderWidth: 2,
      borderColor: "#00A91B",
      backgroundColor: "#00A91B",
      data: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
    },
  ],
};

const MultitypeChart = () => {
  return (
    <div className="mx-auto">
      <Chart
        type="bar"
        data={data}
        options={options}
        width={200}
        height={80}
        //   color={"#FFFFFF"}
        //   style={{ color: "#FFFFFF" }}
      />
    </div>
  );
};

export default MultitypeChart;
