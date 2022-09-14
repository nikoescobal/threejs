/* eslint-disable no-unused-vars */
import { useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../../store/store';
// import ReactApexChart from 'react-apexcharts';
import styles from './chart.module.scss';

function Chart() {
  // const [data] = useState({
  //   series: [10, 10, 15, 15, 20, 30],
  //   options: {
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     chart: {
  //       type: 'donut',
  //     },
  //     colors: [
  //       '#008ffb',
  //       '#00e396',
  //       '#feb019',
  //       '#ff4560',
  //       '#775dd0',
  //       '#f73094',
  //     ],
  //     labels: ['Advisors & Partners', 'Community & Marketing', 'Team', 'Development', 'Token Sale', 'Ecosystem'],
  //     fill: {
  //       opacity: 1,

  //     },
  //     stroke: {
  //       width: 0,
  //     },
  //     yaxis: {
  //       show: false,
  //     },
  //     legend: {
  //       show: false,
  //       position: 'right',
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
  //     tooltip: {
  //       onDatasetHover: {
  //         highlightDataSeries: false,
  //       },
  //       y: {
  //         formatter(value) {
  //           return `${value}%`;
  //         },
  //       },
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
  const [dataSmall] = useState({
    series: [10, 10, 15, 15, 20, 30],
    options: {
      dataLabels: {
        enabled: false,
      },
      chart: {
        type: 'donut',
      },
      labels: ['Advisors & Partners', 'Community & Marketing', 'Team', 'Development', 'Token Sale', 'Ecosystem'],
      fill: {
        opacity: 1,
        colors: ['#ffffff'],
      },
      stroke: {
        width: 0,
        colors: [
          '#005aff',
          '#7d53fa',
          '#0f8bff',
          '#c750ff',
        ],
      },
      yaxis: {
        show: false,
      },
      legend: {
        show: true,
        position: 'top',
      },
      theme: {
        // monochrome: {
        //   enabled: true,
        //   color: '#1643bf',
        //   shadeTo: 'light',
        //   shadeIntensity: 0.5,
        // },
      },
    },
  });
  const isTablet = useMediaQuery('(min-width: 768px)');
  const [rotation, setRotation] = useState('15deg');
  const data = [
    {
      title: 'Ecosystem',
      percentage: 30,
      color: '#f73094',
      offset: 15
    },
    {
      title: 'Token Sale',
      percentage: 20,
      color: '#775dd0',
      offset: 85,
      x: 88,
      y: -50,
      rotation: 90
    },
    {
      title: 'Development',
      percentage: 15,
      color: '#ff4560',
      offset: 65,
      x: 18,
      y: -67,
      rotation: 152
    },
    {
      title: 'Team',
      percentage: 15,
      color: '#feb019',
      offset: 50,
      x: -29,
      y: -23,
      rotation: 205
    },
    {
      title: 'Community & Marketing',
      percentage: 10,
      color: '#00e396',
      offset: 35,
      x: -26,
      y: 32,
      rotation: 251
    },
    {
      title: 'Advisors & Partners',
      percentage: 10,
      color: '#008ffb',
      offset: 25,
      x: 6,
      y: 63,
      rotation: 288
    },
  ];
  const { setCurrentChartColor } = useStore((state) => state);

  // const [offset, setOffset] = useState(data[0].percentage / 2);
  // const offset = useRef(data[0].percentage / 15);

  const calculateOffset = (arcLength, prevArcOffset) => {
    const newOffset = (100 - arcLength + prevArcOffset) % 100;  
    // setOffset(newOffset);
    // offset.current = newOffset;
    return newOffset;
  };

  const initialOffset = data[0].offset;
  const [currentRotation, setCurrentRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotationInfo, setRotationInfo] = useState([108, 72, 54 , 54, 36, 36, 108]);
  const [revolutions, setRevolutions] = useState(1);
  // const [rotationInfo, setRotationInfo] = useState([
  //   ((108 / 2) + (72 / 2)) * revolutions,
  //   ((108 / 2) + (72) + (54 / 2))  * revolutions,
  //   ((108 / 2) + (72) + (54) + (54 / 2))  * revolutions,
  //   ((108 / 2) + (72) + (54) + (54) + (36 / 2))  * revolutions,
  //   ((108 / 2) + (72) + (54) + (54) + (36) + (36 / 2))  * revolutions,
  //   360]);

  // useEffect(() => {
  //   const temp = {};
  //   const info = data.forEach((item) => {
      
  //   });
  // }, []);
  
  const turnClockwise = () => {
    setCurrentRotation(currentRotation + (rotationInfo[selectedIndex] / 2) + (rotationInfo[selectedIndex + 1] / 2));
    setSelectedIndex((selectedIndex + 1) % (data.length));
  };
  
  const turnCounterClockwise = () => {
    if (selectedIndex === 0) {
      // console.log(rotationInfo[selectedIndex] / 2);
      // setCurrentRotation(currentRotation - (rotationInfo[0] / 2) + (rotationInfo[data.length] / 2));

      //hard-coded, fix this
      setCurrentRotation(currentRotation - 72);
      setSelectedIndex(data.length - 1);
    }
    else {
      setCurrentRotation(currentRotation - (rotationInfo[selectedIndex] / 2) - (rotationInfo[selectedIndex - 1] / 2));
      console.log('else');
      setSelectedIndex((selectedIndex - 1) % (data.length));
    }
  };

  useEffect(() => {
    console.log('current rotation', currentRotation);
    console.log('current index', selectedIndex);
    // console.log('selected Rotation', rotationInfo[selectedIndex]);
  }, [selectedIndex])

  // data.forEach((item) => data.offset = calculateOffset)

  return (
    <div className={`${styles['apex-chart']}`}>
      { isTablet && 
        <div>
          {/* <ReactApexChart options={data.options} series={data.series} type="donut" width={500} /> */}

        </div> }
      <div className={`${styles['donut-wrapper']}`}>
        <svg width="40%" height="40%" viewBox="0 0 42 42" className={`${styles.donut}`}
        style={{
          rotate: `calc(${currentRotation}deg * -1)`
        }}>
          {/* <circle className={`${styles['donut-hole']}`} cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle> */}
          {/* <circle className={`${styles['donut-ring']}`} cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle> */}

          {
            data.map((item, index) => (
              <>
                { index === 0 
                  ? <g className={`${selectedIndex === index ? `${styles.active}` : ''}`}>
                    
                    <circle className={`${styles['donut-segment']} ${selectedIndex === index ? `${styles.active}` : ''}`} cx="21" cy="21" r="15.91549430918954" fill="transparent" strokeDashoffset={item.offset} stroke={selectedIndex === index ? item.color : '#464444'} strokeDasharray={`${item.percentage} ${100 - item.percentage}`} strokeWidth="9">
                      
                  </circle>
                  <text x="88%" y="55%" textAnchor="middle" stroke="rgba(0,0,0,0.2)" fontSize="0.2rem" strokeWidth="0px" fontWeight="600" fill='rgba(0,0,0,0.2)' >{item.percentage}%</text>
                  </g>
                  : 
                  <g className={`${selectedIndex === index ? `${styles.active}` : ''}`}>
                    <circle className={`${styles['donut-segment']} ${selectedIndex === index ? `${styles.active}` : ''}`} cx="21" cy="21" r="15.91549430918954" fill="transparent" strokeDashoffset={item.offset} stroke={selectedIndex === index ? item.color : '#464444'} strokeDasharray={`${item.percentage} ${100 - item.percentage}`} strokeWidth="9"></circle>
                    <text x={`${item.x}%`} y={`${item.y}%`} dominantBaseline="central" textAnchor="middle" stroke="rgba(0,0,0,0.2)" fontSize="0.2rem" strokeWidth="0px" fontWeight="600" fill='rgba(0,0,0,0.2)' style={{transform: `rotateZ(${item.rotation}deg)`}}>{item.percentage}%</text>
                  </g>
                }
              </>
            ))
          }
          {/* <circle className={`${styles['donut-segment']}`} cx="21" cy="21" r="15.91549430918954" fill="transparent" strokeDashoffset={calculateOffset(item.percentage, offset)} stroke={item.color} strokeDasharray={`${item.percentage} ${100 - item.percentage}`} strokeWidth="6"></circle> */}
          {/* <circle className={`${styles['donut-segment']}`} cx="21" cy="21" r="15.91549430918954" fill="transparent" strokeDashoffset="15" stroke="#f73094" strokeDasharray="30 70" strokeWidth="6"></circle>
          <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#775dd0" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="85"></circle> */}
          {/* <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ff4560" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="65"></circle> */}
          {/* <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#feb019" strokeWidth="6" strokeDasharray="15 85" strokeDashoffset="50"></circle> */}
          {/* <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#00e396" strokeWidth="6" strokeDasharray="10 90" strokeDashoffset="35"></circle> */}
          {/* <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#008ffb" strokeWidth="6" strokeDasharray="10 90" strokeDashoffset="25"></circle> */}
        </svg>
      </div>
      {/* { !isTablet && <ReactApexChart options={dataSmall.options} series={dataSmall.series} type="donut" width={350} /> } */}
      <button type="button" onClick={turnCounterClockwise} >Prev</button>
      <button type="button" onClick={turnClockwise} style={{margin: '4rem'}}>Next</button>
    </div>
  );
}

export default Chart;
