import styles from './donutchart.module.scss'
// import ReactApexChart from 'react-apexcharts';
import dynamic from 'next/dynamic'

import { useState } from 'react';
import useStore from '../../../store/store';
import { useMediaQuery } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart({series, labels, titleText, legendPosition}) {
  const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
  const isTablet = useMediaQuery('(min-width: 768px');
  // const [data] = useState({
  //   // series: [10, 10, 15, 20, 30],
  //   series: series,
  //   options: {
  //     dataLabels: {
  //       enabled: true,
  //       formatter: function (val) {
  //         return Math.round(val) + "%"
  //       },
  //     },
  //     chart: {
  //       type: 'donut',
  //     },
  //     colors: [
  //       '#008ffb',
  //       '#00e396',
  //       '#feb019',
  //       '#ff4560',
  //       '#f73094',
  //     ],
  //     // labels: ['Personality disorder', 'Substance-use disorder', 'Cognitive disorder', 'Mental disorder', 'Mood disorder'],
  //     labels: labels,
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     hover: {
  //       mode: null
  //     },
  //     stroke: {
  //       width: 0,
  //     },
  //     yaxis: {
  //       show: false,
  //     },
  //     legend: {
  //       show: true,
  //       position: 'left',
  //       labels: {
  //         colors: undefined,
  //         useSeriesColors: true,
  //       },
  //     },
  //     theme: {
  //       // monochrome: {
  //       //   enabled: true,
  //       //   color: '#1643bf',
  //       //   shadeTo: 'light',
  //       //   shadeIntensity: 0.5,
  //       // },
  //     },
  //     title: {
  //       // text: 'USA',
  //       text: titleText,
  //       align: 'center'
  //     },
  //     tooltip: {
  //         custom: function({series, seriesIndex, dataPointIndex, w}) {
  //           return ''
  //         },
  //       // enabled: false,
  //       // onDatasetHover: {
  //       //   highlightDataSeries: false,
  //       // },
  //       // y: {
  //       //   formatter(value) {
  //       //     return `${value}%`;
  //       //   },
  //       // },
  //       // z: {
  //       //   formatter(value, opts) {
  //       //     const percent = opts.w.globals.seriesPercent[opts.seriesIndex][opts.dataPointIndex];
  //       //     console.log(opts);
  //       //     return `${percent.toFixed(0)}%`;
  //       //   },
  //       // },
  //     },
  //   },
  // });
  // const [mobileData] = useState({
  //   // series: [10, 10, 15, 20, 30],
  //   series: series,
  //   options: {
  //     dataLabels: {
  //       enabled: true,
  //       formatter: function (val) {
  //         return Math.round(val) + "%"
  //       },
  //     },
  //     chart: {
  //       type: 'donut',
  //     },
  //     colors: [
  //       '#008ffb',
  //       '#00e396',
  //       '#feb019',
  //       '#ff4560',
  //       '#f73094',
  //     ],
  //     // labels: ['Personality disorder', 'Substance-use disorder', 'Cognitive disorder', 'Mental disorder', 'Mood disorder'],
  //     labels: labels,
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     hover: {
  //       mode: null
  //     },
  //     stroke: {
  //       width: 0,
  //     },
  //     yaxis: {
  //       show: false,
  //     },
  //     legend: {
  //       show: true,
  //       position: 'top',
  //       labels: {
  //         colors: undefined,
  //         useSeriesColors: true,
  //       },
  //     },
  //     theme: {
  //       // monochrome: {
  //       //   enabled: true,
  //       //   color: '#1643bf',
  //       //   shadeTo: 'light',
  //       //   shadeIntensity: 0.5,
  //       // },
  //     },
  //     title: {
  //       // text: 'USA',
  //       text: titleText,
  //       align: 'center'
  //     },
  //     tooltip: {
  //         custom: function({series, seriesIndex, dataPointIndex, w}) {
  //           return ''
  //         },
  //       // enabled: false,
  //       // onDatasetHover: {
  //       //   highlightDataSeries: false,
  //       // },
  //       // y: {
  //       //   formatter(value) {
  //       //     return `${value}%`;
  //       //   },
  //       // },
  //       // z: {
  //       //   formatter(value, opts) {
  //       //     const percent = opts.w.globals.seriesPercent[opts.seriesIndex][opts.dataPointIndex];
  //       //     console.log(opts);
  //       //     return `${percent.toFixed(0)}%`;
  //       //   },
  //       // },
  //     },
  //   },
  // });
  const { isDarkMode } = useStore();
  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: series,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(200, 50, 255, 0.2)',
          'rgba(139, 195, 74, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(200, 50, 255, 1)',
          'rgba(139, 195, 74, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`${styles.wrapper} ${isDarkMode ? '' : `${styles.light}`}`}>
      <div>
        <h4>{titleText}</h4>
        <p>Per Million</p>
        <Doughnut 
          data={data} 
          plugins={[ChartDataLabels]}
          options={{
            plugins: {
              legend: {
                display: true,
                fullSize: false,
                // maxWidth: 150,
                labels: {
                  boxWidth: 20,
                },
                title: {
                  display: false, 
                  text: 'Per Million'
                },
                position: isTablet ? legendPosition : 'left',
              },
              title: {
                display: true,
                text: 'Per million'
              },
              subtitle: {
                display: true,
                text: 'Per million'
              },
              datalabels: {
                display: function(context) {
                  console.log(context.dataIndex);
                  if (context.dataIndex !== 5 && context.dataIndex !== 6) {
                    return true
                  }
                  return false
                  // return context.dataIndex !== 5 ; // display labels with an odd index
                },
                clip: true,
                clamp: true, 
                color: isDarkMode ? 'white' : 'black',
                formatter: (value, ctx) => {
                  const datapoints = ctx.chart.data.datasets[0].data
                  const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
                  const percentage = value / total * 100
                  return percentage.toFixed(2) + "%";
                },
              }
            },
            // maintainAspectRatio: false,
            responsive: true
          }}
        />
      </div>
      {/* {(typeof window !== 'undefined') && 
      <ReactApexChart options={isTablet ? data.options : mobileData.options} series={isTablet ? data.series : mobileData.series} type="donut" width={isTablet ? 450 : 320} /> 
      }*/}
    </div>
  )
}

export default DonutChart