import styles from './donutchart.module.scss'
// import ReactApexChart from 'react-apexcharts';
import dynamic from 'next/dynamic'

import { useState } from 'react';
import useStore from '../../../store/store';

function DonutChart() {
  const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
  const [data] = useState({
    series: [10, 10, 15, 20, 30],
    options: {
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return Math.round(val) + "%"
        },
      },
      chart: {
        type: 'donut',
      },
      colors: [
        '#008ffb',
        '#00e396',
        '#feb019',
        '#ff4560',
        '#f73094',
      ],
      labels: ['Personality disorder', 'Substance-use disorder', 'Cognitive disorder', 'Mental disorder', 'Mood disorder'],
      fill: {
        opacity: 0.8,
      },
      hover: {
        mode: null
      },
      stroke: {
        width: 0,
      },
      yaxis: {
        show: false,
      },
      legend: {
        show: true,
        position: 'bottom',
        labels: {
          colors: undefined,
          useSeriesColors: true,
        },
      },
      theme: {
        // monochrome: {
        //   enabled: true,
        //   color: '#1643bf',
        //   shadeTo: 'light',
        //   shadeIntensity: 0.5,
        // },
      },
      title: {
        text: 'USA',
        align: 'center'
      },
      tooltip: {
          custom: function({series, seriesIndex, dataPointIndex, w}) {
            return ''
          },
        // enabled: false,
        // onDatasetHover: {
        //   highlightDataSeries: false,
        // },
        // y: {
        //   formatter(value) {
        //     return `${value}%`;
        //   },
        // },
        // z: {
        //   formatter(value, opts) {
        //     const percent = opts.w.globals.seriesPercent[opts.seriesIndex][opts.dataPointIndex];
        //     console.log(opts);
        //     return `${percent.toFixed(0)}%`;
        //   },
        // },
      },
    },
  });
  const { isDarkMode } = useStore();

  return (
    <div className={`${styles.wrapper} ${isDarkMode ? '' : `${styles.light}`}`}>
      {(typeof window !== 'undefined') && 
      <ReactApexChart options={data.options} series={data.series} type="donut" width={420} />
      }
    </div>
  )
}

export default DonutChart