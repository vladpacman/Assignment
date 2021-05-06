import React from "react";
import Chart from "react-apexcharts";

const DonutChart = (props) => {
  let state = {
    options: {
      chart: {
        height: 350,
        type: "treemap",
      },
    },
    series: props.chartData.map((el) => el.y),
    chartOptions: {
      labels: props.chartData.map((el) => el.x),
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
export default DonutChart;
