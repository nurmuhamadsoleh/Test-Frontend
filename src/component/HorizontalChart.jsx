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
import { Bar } from "react-chartjs-2";
const HorizontalChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        // label: "369",
        data: [48, 98, 60, 30, 65, 100],
        backgroundColor: "#FFE713",
        borderColor: "#FFE713",
        borderWidth: 1,
      },
      {
        // label: "333",
        data: [80, 90, 52, 70, 64, 95],
        backgroundColor: "#00A91B",
        borderColor: "#00A91B",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, //untuk menghilangkan label
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
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
  };
  return <Bar data={data} options={options} />;
};

export default HorizontalChart;
