import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      fullWidth: false,
      labels: {
        fontColor: "#FFFFFF",
        fontSize: 12,
      },
    },
    title: {
      display: true,
      text: "Graph OEE",
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
  labels: ["Running", "Area Pooling 2", "Area Pooling 3", "Area Pooling 4"],
  datasets: [
    {
      //   label: "# of Votes",
      data: [15, 12, 19, 10],
      backgroundColor: ["#DC3030", "#267833", "#DC8230", "#C6D235"],
      borderColor: ["#DC3030", "#267833", "#DC8230", "#C6D235"],
      borderWidth: 1,
      //   fontColor: "white",
      color: "white",
      //   borderRadius: 50,
    },
  ],
};

const PieChart = () => {
  return (
    <Pie
      data={data}
      options={options}
      height={400}
      //   width={100}
      className="p-2"
    />
  );
};

export default PieChart;
