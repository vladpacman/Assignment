import React from "react";
import Chart from "react-apexcharts";

const DonutChartURL = (props) => {
  const urls = props.chartData.map((el) => el.x);
  const providerGroup = (arr) => {
    const select = (url) => {
      return url.split(".")[1];
    };
    const newArr = arr.map((el) => select(el));
    return newArr;
  };

  const urlData = providerGroup(urls);
  let urlOptions;
  const renderData = () => {
    const dataArr = [];
    const filteredData = [];
    for (let i = 1; i < urlData.length; i++) {
      dataArr.push(urlData[i]);
    }

    for (let i = 0; i < dataArr.length; i++) {
      let temp = dataArr[i];
      let countTemp = dataArr.filter((el) => el === temp);

      filteredData.push({ x: temp, y: countTemp.length });
    }
    const jsonObject = filteredData.map(JSON.stringify);
    const uniqueSet = new Set(jsonObject);
    const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    urlOptions = uniqueArray;
  };
  renderData();

  let state = {
    options: {
      chart: {
        height: 350,
        type: "treemap",
      },
    },
    series: urlOptions.map((el) => el.y),
    chartOptions: {
      labels: urlOptions.map((el) => el.x),
    },
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      labels={state.chartOptions}
      type="donut"
      height="450"
      width="100%"
    />
  );
};
export default DonutChartURL;
