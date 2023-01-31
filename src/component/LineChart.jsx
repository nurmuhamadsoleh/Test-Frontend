import React from "react";
// import { faker, faker } from "@faker-js/faker";
import annotationPlugin from "chartjs-plugin-annotation";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";
// Chart.pluginService.register(annotationPlugin);
import { Line } from "react-chartjs-2";
ChartJS.register;
CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend;

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Report Months",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      //   backgroundColor: "rgba(151,187,205,0.2)",
      borderColor: "#065535",
      //   borderWidth: 1,
      //   pointBorderColor: "#2984c5",
      //   pointBackgroundColor: "#fff",
      //   pointHoverRadius: 5,
      //   pointHoverBackgroundColor: "#2984c5",
      //   pointHoverBorderColor: "rgba(41, 132, 197, 0.5)",
      //   pointHoverBorderWidth: 7,
      //   pointRadius: 0,
      //   pointHitRadius: 30,
      //   borderColor: "#742774",
    },
  ],
};
// var line = [
//   {
//     type: "line",
//     mode: "vertical",
//     scaleID: "x-axis-0",
//     value: "MAR",
//     borderColor: "red",
//     borderWidth: 5,
//     // label: {
//     //   content: "TODAY",
//     //   enabled: true,
//     //   position: "top",
//     // },
//   },
// ];
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    options: {
      annotation: {
        drawTime: "afterDatasetsDraw", // (default)
        events: ["click"],
        dblClickSpeed: 350, // ms (default)
        annotations: [
          {
            drawTime: "afterDraw",
            id: "a-line-1",
            type: "line",
            mode: "vertical",
            scaleID: "y-axis-0",
            value: "10",
            borderColor: "red",
            borderWidth: 2,
          },
        ],
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
  },
};
const LineChart = () => {
  return <Line data={data} options={options} width={300} />;
};

export default LineChart;
