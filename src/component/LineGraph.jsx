import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.pluginService.register(annotationPlugin);

const LineGraph = () => {
  const chartRef = useRef(null);
  var chartData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        data: [12, 3, 2, 1, 8, 8, 2, 2, 3, 5, 7, 1],
      },
    ],
  };
  useEffect(() => {
    // console.log(chartRef?.current);
    if (chartRef?.current) {
      const chartToDraw = chartRef.current;

      new Chart(chartToDraw, {
        type: "line",
        data: chartData,
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
                value: "MAR",
                borderColor: "red",
                borderWidth: 2,
                label: {
                  content: "TODAY",
                  enabled: true,
                  position: "top",
                },
              },
            ],
          },
        },
      });
    }
  }, []);
  console.log(chartRef);
  return (
    <div className={{ width: "100%", height: 500 }}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};
export default LineGraph;
