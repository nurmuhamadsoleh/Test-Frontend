import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { HorizontalBar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
      color: "#FFFFFF",
      fontSize: 12,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      //   position: "right",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
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
  },
};
const data = {
  labels: [
    "Area Pooling 1",
    "Area Polling 2",
    "Area Polling 3",
    "Area Polling 4",
  ],
  datasets: [
    {
      //   label: "My First dataset",
      backgroundColor: "#F2512D",
      borderColor: "#F2512D",
      borderWidth: 2,
      data: [110, 80, 120, 110],
    },
    {
      //   label: "My Last dataset",
      backgroundColor: "#C7F446",
      borderColor: "#C7F446",
      data: [115, 90, 120, 150],
    },
  ],
};
const Horizontal = () => {
  return (
    <Bar
      data={data}
      options={options}
      width={100}
      height={80}
      //   className="text-white"
    />
  );
};

export default Horizontal;
