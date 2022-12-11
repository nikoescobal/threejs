import styles from './donutchart.module.scss'
// import ReactApexChart from 'react-apexcharts';
// import dynamic from 'next/dynamic'

// import { useState } from 'react';
import useStore from '../../../store/store';
import { useMediaQuery } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend);

const colors = (opacity) => {
  return [
    `rgba(255, 99, 132, ${opacity})`,
    `rgba(54, 162, 235, ${opacity})`,
    `rgba(255, 206, 86, ${opacity})`,
    `rgba(75, 192, 192, ${opacity})`,
    `rgba(153, 102, 255, ${opacity})`,
    `rgba(255, 159, 64, ${opacity})`,
    `rgba(200, 50, 255, ${opacity})`,
    `rgba(139, 195, 74, ${opacity})`
  ]
} 

function DonutChart({series, labels, titleText, subtitle, legendPosition}) {
  // const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
  const isTablet = useMediaQuery('(min-width: 768px');
  
  const { isDarkMode } = useStore();
  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: series,
        backgroundColor: colors(0.2),
        borderColor: colors(1),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`${styles.wrapper} ${isDarkMode ? '' : `${styles.light}`}`}>
      <div>
        <h4>{titleText}</h4>
        <div className={styles['subtitle-wrapper']}>
          <p>{subtitle}</p>
        </div>
        { !isTablet &&
          <div className={styles['colors-wrapper']}>
            {
              labels.map((label, index) => (
                <div key={label}>
                  <span style={{
                    display: 'inline-block',
                    border: `1px solid ${colors(1)[index]}`,
                    background: colors(0.2)[index],
                    height: '1rem',
                    width: '1rem'
                  }} />
                  <span>{label}</span>
                </div>
              ))
            }
          </div>
        }
        <Doughnut 
          data={data} 
          plugins={[ChartDataLabels]}
          options={{
            plugins: {
              legend: {
                display: isTablet,
                fullSize: false,
                // maxWidth: 150,
                labels: {
                  boxWidth: 20,
                },
                title: {
                  display: false, 
                  text: 'Per Million'
                },
                position: isTablet ? legendPosition : 'top',
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