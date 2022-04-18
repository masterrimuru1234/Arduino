import React, { useEffect, useState } from "react";
import Graph from "../Components/Graph/Graph";
import "./Dashboard.css";
import axios from "axios";
const data1 = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  datasets: [
    {
      label: "Temperature Static",
      data: [14, 15, 14, 15, 19, 18, 18, 17.5, 19, 18.5],
      borderColor: ["rgba(255, 0, 0, 1)"],
      backgroundColor: ["rgba(255, 0, 0, 1)"],
      pointBackgroundColor: ["rgba(255, 0, 0, 1)"],
      pointBorderColor: ["rgba(255, 0, 0, 1)"],
    },
  ],
};
const data2 = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7,8,9],
  datasets: [
    {
      label: "Humidity Static",
      data: [90, 80, 85, 79, 82, 91, 85, 88, 90, 78],
      borderColor: ["rgba(23,67,88,0.5)"],
      backgroundColor: ["rgba(23,67,88,0.5)"],
      pointBackgroundColor: ["rgba(23,67,88,0.5)"],
      pointBorderColor: ["rgba(23,67,88,0.5)"],
    },
  ],
};
const dataLayerTemp = [];
const dataLayerHumi = [];
const data3 = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  datasets: [
    {
      label: "Temperature Live",
      data: dataLayerTemp,
      borderColor: ["rgba(255, 0, 0, 1)"],
      backgroundColor: ["rgba(255, 0, 0, 1)"],
      pointBackgroundColor: ["rgba(255, 0, 0, 1)"],
      pointBorderColor: ["rgba(255, 0, 0, 1)"],
    },
  ],
};
const data4 = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7,8,9],
  datasets: [
    {
      label: "Humidity Live",
      data: dataLayerHumi,
      borderColor: ["rgba(23,67,88,0.5)"],
      backgroundColor: ["rgba(23,67,88,0.5)"],
      pointBackgroundColor: ["rgba(23,67,88,0.5)"],
      pointBorderColor: ["rgba(23,67,88,0.5)"],
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
  // const [ temp, setTemp] = useState();
  // const [ humidity, setHumidity] = useState();
  const getDataD = async () => {
    const pushDataToDataLayer = async () => {
      async function getApiRes(){
        const ApiRes = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=Rourkela&appid=4f411661706a581bf03c9e8118330789`
        ); 
        const temp = ApiRes.data.main.temp;
        const humidity = ApiRes.data.main.humidity;
        dataLayerTemp.push(parseFloat(temp) - 273.15 +(Math.random()));
        dataLayerHumi.push(parseFloat(humidity)+(Math.random()));
    };
    await getApiRes();
    }
    setInterval( pushDataToDataLayer, 3000);
    // await new Promise(resolve => setTimeout(() => resolve(pushDataToDataLayer()), 2000));
  }
  getDataD();
  useEffect(() => {
    async function getApiRes(){
      const ApiRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Rourkela&appid=4f411661706a581bf03c9e8118330789`
      ); 
      
      // setSearchData(ApiRes.data.main);
      // setWind(ApiRes.data.wind.speed);
      console.log(ApiRes.data.main);
      console.log(ApiRes.data.main.humidity);
      console.log(ApiRes.data.main.temp);
      const temp = ApiRes.data.main.temp;
      const humidity = ApiRes.data.main.humidity;
      dataLayerTemp.push(parseFloat(temp) - 273.15);
      dataLayerHumi.push(parseFloat(humidity)+(Math.random()));
      // setTemp(ApiRes.data.main.temp);
      // setHumidity(ApiRes.data.main.humidity)
      // console.log(searchdata['name'])
      // console.log(location.data.main.temp)
  };
  getApiRes();
  },[])
  return (
    <div className="columns">
      <h1>Product Development Lab (EC3712)</h1>
      <h3>IOT smart mycological cultivator </h3>
      <Graph data={data1} options={options1} />
      <Graph data={data2} options={options2} />
      <Graph data={data3} options={options1} />
      <Graph data={data4} options={options2} />
      {/* <Graph data={data3} options={options3} /> */}
    </div>
  );
}
export default Dashboard;
