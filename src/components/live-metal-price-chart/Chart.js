import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import style from "../css/LiveMetal/LiveMetalPriceChart.module.css";

const Chart = () => {
  const data = {
    labels: [
      "Sunday",
      "February",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Price in EGY",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(189,145,47,0.4)",
        borderColor: "rgba(189,145,47,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(189,145,47,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(189,145,47,1)",
        pointHoverBorderColor: "rgba(189,145,47,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [911.8, 911.0, 912, 912.6, 910.8, 912.1, 912.4, 911.6, 912.8],
      },
    ],
  };
  return (
    <div className={style.chart_container}>
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          scale: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 222,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
