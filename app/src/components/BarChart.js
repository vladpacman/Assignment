import React from "react";
import Chart from "react-apexcharts";

const BarChart = (props) => {
  let state = {
    options: {
      chart: {
        height: 350,
        type: "treemap",
      },
    },
    series: [
      {
        data: props.chartData,
      },
    ],
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      labels={state.chartOptions}
      type="bar"
      height="450"
      width="100%"
    />
  );
};
export default BarChart;
