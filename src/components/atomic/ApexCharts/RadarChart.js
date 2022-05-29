import React from 'react';

import Chart from 'react-apexcharts';

export default function PieChart() {
  const series = [
    {
      name: 'Average',
      data: [20, 100, 40, 30, 50, 80],
    },
    {
      name: 'Marks',
      data: [60, 80, 60, 70, 80, 90],
    },
  ];
  const options = {
    chart: {
      //   height: 230,
      type: 'radar',
    },
    plotOptions: {
      radar: {
        size: 155,
        polygons: {
          //   strokeColors: '#e9e9e9',
          //   fill: {
          //     colors: ['#f8f8f8', '#fff'],
          //   },
        },
      },
    },
    responsive: [
      {
        breakpoint: 960,
        options: {
          plotOptions: {
            radar: {
              size: undefined,
            },
          },
        },
      },
    ],
    // colors: ['#FF4560', '#262626'],
    // markers: {
    //   //   size: 4,
    //   colors: ['#fff'],
    //   strokeColor: '#FF4560',
    //   strokeWidth: 2,
    // },
    tooltip: {
      y: {
        formatter(val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: ['Maths', 'Science', 'Hindi', 'English', 'CS', 'SS'],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter(val, i) {
          if (i % 2 === 0) {
            return val;
          }
          return '';
        },
      },
    },
  };

  return <Chart options={options} series={series} type="radar" height={400} />;
}
