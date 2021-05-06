import React from "react";
import Chart from "react-apexcharts";

const PopChart = (props) => {
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
      type="treemap"
      height="450"
      width="100%"
    />
  );
};

export default PopChart;
