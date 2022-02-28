import React from "react";
import Graph from "../Components/Graph/Graph";
import "./Dashboard.css";
const data1 = {
  labels: [0, 10, 20, 30, 40, 50, 60],
  datasets: [
    {
      label: "Temperature",
      data: [21, 21.2, 21.5, 20.9, 21, 21.5, 21.8],
      borderColor: ["rgba(255, 0, 0, 1)"],
      backgroundColor: ["rgba(255, 0, 0, 1)"],
      pointBackgroundColor: ["rgba(255, 0, 0, 1)"],
      pointBorderColor: ["rgba(255, 0, 0, 1)"],
    },
  ],
};
const data2 = {
  labels: [0, 10, 20, 30, 40, 50, 60],
  datasets: [
    {
      label: "Humidity",
      data: [58, 0, 57, 58, 61, 57, 57.1],
      borderColor: ["rgba(23,67,88,0.5)"],
      backgroundColor: ["rgba(23,67,88,0.5)"],
      pointBackgroundColor: ["rgba(23,67,88,0.5)"],
      pointBorderColor: ["rgba(23,67,88,0.5)"],
    },
  ],
};
const data3 = {
  labels: [0, 10, 20, 30, 40, 50, 60],
  datasets: [
    {
      label: "CO2",
      data: [500, 510, 700, 800, 300, 10, 0],
      borderColor: ["rgb(128,128,0)"],
      backgroundColor: ["rgb(128,128,0)"],
      pointBackgroundColor: ["rgb(128,128,0)"],
      pointBorderColor: ["rgb(128,128,0)"],
    },
  ],
};
const options1 = {
  scales: {
    yAxes: [
      {
        ticks: {
          max: 22,
          min: 19,
          stepSize: 0.1,
        },
      },
    ],
  },
};
const options2 = {
  scales: {
    yAxes: [
      {
        ticks: {
          max: 100,
          min: 0,
          stepSize: 10,
        },
      },
    ],
  },
};
const options3 = {
  scales: {
    yAxes: [
      {
        ticks: {
          max: 1000,
          min: 0,
          stepSize: 100,
        },
      },
    ],
  },
};
function Dashboard() {
  return (
    <div className="columns">
      <h1>Product Development Lab (EC3712)</h1>
      <h3>IOT smart mycological cultivator </h3>
      <Graph data={data1} options={options1} />
      <Graph data={data2} options={options2} />
      <Graph data={data3} options={options3} />
    </div>
  );
}
export default Dashboard;
