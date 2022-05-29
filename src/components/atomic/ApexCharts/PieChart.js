import React from 'react';

import Chart from 'react-apexcharts';

export default function PieChart() {
  const options = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    legend: {
      show: false,
    },
  };
  const series = [44, 55, 41, 17, 15];

  return (
    <div className="d-flex justify-content-center">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
}
