import React from "react";
import Chart from "react-apexcharts";
// import  from "react-apexcharts";

const StackedBar = () => {
  return (
    <Chart
      type="bar"
      width={280}
      height={240}
      series={[
        // Kuning
        {
          name: "Idle",
          data: [0, 0, 0, 0],
          color: "#E5EA00",
        },
        // abu2
        {
          name: "Disconnected",
          data: [0, 50, 0, 0],
          color: "#C5C5C5",
        },
        // Hijau
        {
          name: "Running",
          data: [150, 60, 200, 200],
          color: "#00A91B",
        },
        {
          name: "Alarm",
          data: [0, 0, 0, 0],
          color: "#DC3030",
        },
      ]}
      options={{
        // responsive: true,
        // title: {
        //   text: "Energy Consumption in Years",
        // },
        chart: {
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "20%",
          },
        },
        stroke: {
          width: 1,
        },
        xaxis: {
          // title: {
          //   text: "Energy Consumption in Years",
          // },
          categories: [
            "Main Line",
            "Steering Handle",
            "Coolant Filling",
            "Power Train",
            "Modular",
          ],
        },
        // yaxis: {
        //   title: {
        //     text: "Data in (k)",
        //   },
        // },
        legend: {
          position: "bottom",
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      }}
    />
  );
};

export default StackedBar;
