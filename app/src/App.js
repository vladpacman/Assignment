import React, { useState } from "react";
import PopChart from "./components/PopChart";
import DonutChart from "./components/DonutChart";
import DonutChartURL from "./components/DonutChartURL";
import BarChart from "./components/BarChart";

function App() {
  const [dataProps, setDataProps] = useState([
    { x: "Hello please wait untill fetching...", y: 2 },
  ]);
  const [linkData, setLinkData] = useState([]);
  const [urlData, setURLData] = useState([]);

  let fetchedData;
  const getData = async function () {
    try {
      const response = await fetch("/all");
      const data = await response.json();
      fetchedData = await data;
      renderData("Anchor Text", setDataProps);
      renderData("Link Status", setLinkData);
      renderData("From URL", setURLData);
    } catch (error) {
      console.log(error);
    }
  };
  getData();

  const renderData = (field, state) => {
    const dataArr = [];
    const filteredData = [];
    for (let i = 1; i <= 300; i++) {
      dataArr.push(fetchedData[i][field].toLowerCase());
    }

    for (let i = 0; i < dataArr.length; i++) {
      let temp = dataArr[i];
      let countTemp = dataArr.filter((el) => el === temp);

      filteredData.push({ x: temp, y: countTemp.length });
    }
    const jsonObject = filteredData.map(JSON.stringify);
    const uniqueSet = new Set(jsonObject);
    const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    state(uniqueArray);
  };

  return (
    <div className="container">
      <p>Anchor Text</p>
      <PopChart chartData={dataProps} />
      <p>Link Status</p>
      <DonutChart chartData={linkData} />
      <p>From URL</p>
      <DonutChartURL chartData={urlData} />
      <p>BLdom</p>
      <BarChart chartData={urlData} />
    </div>
  );
}

export default App;
