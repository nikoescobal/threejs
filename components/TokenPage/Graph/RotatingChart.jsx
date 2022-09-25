/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../../store/store';
import styles from './chart.module.scss';

function RotatingChart() {
  const {isDarkMode } = useStore()
  const data = [
    {
      title: 'Ecosystem',
      description: 'test',
      percentage: 30,
      color: '#f73094',
      offset: 15
    },
    {
      title: 'Token Sale',
      description: 'test 2',
      percentage: 20,
      color: '#775dd0',
      offset: 85,
      x: 88,
      y: -50,
      rotation: 90
    },
    {
      title: 'Development',
      description: 'Development has an allocation of 15% which cut across design, research and development.',
      percentage: 15,
      color: '#ff4560',
      offset: 65,
      x: 18,
      y: -67,
      rotation: 152
    },
    {
      title: 'Team',
      description: 'test 3',
      percentage: 15,
      color: '#feb019',
      offset: 50,
      x: -29,
      y: -23,
      rotation: 205
    },
    {
      title: 'Community & Marketing',
      description: 'test 4',
      percentage: 10,
      color: '#00e396',
      offset: 35,
      x: -26,
      y: 32,
      rotation: 251
    },
    {
      title: 'Advisors & Partners',
      description: 'test 5',
      percentage: 10,
      color: '#008ffb',
      offset: 25,
      x: 6,
      y: 63,
      rotation: 288
    },
  ];
  const { currentChartColor, setCurrentChartColor } = useStore((state) => state);

  const calculateOffset = (arcLength, prevArcOffset) => {
    const newOffset = (100 - arcLength + prevArcOffset) % 100;  
    return newOffset;
  };

  const [currentRotation, setCurrentRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotationInfo] = useState([108, 72, 54 , 54, 36, 36, 108]);
  
  const turnClockwise = () => {
    setCurrentRotation(currentRotation + (rotationInfo[selectedIndex] / 2) + (rotationInfo[selectedIndex + 1] / 2));
    setCurrentChartColor(data[(selectedIndex + 1) % (data.length)].color);
    setSelectedIndex((selectedIndex + 1) % (data.length));
  };
  
  const turnCounterClockwise = () => {
    if (selectedIndex === 0) {
      // console.log(rotationInfo[selectedIndex] / 2);
      // setCurrentRotation(currentRotation - (rotationInfo[0] / 2) + (rotationInfo[data.length] / 2));

      //hard-coded, fix this
      setCurrentRotation(currentRotation - 72);
      setCurrentChartColor(data[data.length - 1].color);
      setSelectedIndex(data.length - 1);
    }
    else {
      setCurrentRotation(currentRotation - (rotationInfo[selectedIndex] / 2) - (rotationInfo[selectedIndex - 1] / 2));
      setCurrentChartColor(data[selectedIndex - 1].color);
      setSelectedIndex((selectedIndex - 1) % (data.length));
    }
  };

  useEffect(() => {
    setCurrentChartColor(data[0].color)
    // console.log('current rotation', currentRotation);
    // console.log('current index', selectedIndex);
  }, [])

  return (
    <div className={`${styles['chart-wrapper']} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <div className={`${styles['donut-wrapper']}`}>
      <div >
          <svg
            className={`${styles.arrow} ${styles.left}`}
            onClick={turnCounterClockwise}
            xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" enableBackground="new 0 0 595.28 841.89" viewBox="0 0 776.09175 693.66538" height="693.66541" width="776.0918" y="0px" x="0px" id="Layer_1" version="1.1">
            <g transform="matrix(2.7190747,0,0,3.1037754,-326.9763,-1172.9045)" id="g3"><path style={{clipRule: 'evenodd', fillRule: 'evenodd'}} id="path5" d="m 130.838,381.118 c 1.125,28.749 5.277,54.82 12.695,78.018 7.205,22.53 18.847,40.222 36.812,53.747 52.018,39.16 153.369,16.572 153.369,16.572 l -4.632,-32.843 72.918,42.778 -58.597,58.775 -3.85,-27.303 c 0,0 -100.347,18.529 -163.905,-34.881 -37.659,-31.646 -53.293,-84.021 -51.593,-153.962 0.266,-0.247 4.728,-0.908 6.783,-0.901 z"/></g>
          </svg>
          <svg
            className={`${styles.arrow} ${styles.right}`}
            onClick={turnClockwise}
            xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" enableBackground="new 0 0 595.28 841.89" viewBox="0 0 776.09175 693.66538" height="693.66541" width="776.0918" y="0px" x="0px" id="Layer_1" version="1.1">
            <g transform="matrix(2.7190747,0,0,3.1037754,-326.9763,-1172.9045)" id="g3"><path style={{clipRule: 'evenodd', fillRule: 'evenodd'}} id="path5" d="m 130.838,381.118 c 1.125,28.749 5.277,54.82 12.695,78.018 7.205,22.53 18.847,40.222 36.812,53.747 52.018,39.16 153.369,16.572 153.369,16.572 l -4.632,-32.843 72.918,42.778 -58.597,58.775 -3.85,-27.303 c 0,0 -100.347,18.529 -163.905,-34.881 -37.659,-31.646 -53.293,-84.021 -51.593,-153.962 0.266,-0.247 4.728,-0.908 6.783,-0.901 z"/></g>
          </svg>
      </div>
        <svg width="100%" height="100%" viewBox="0 0 42 42" className={`${styles.donut}`}
        style={{
          rotate: `calc(${currentRotation}deg * -1)`
        }}>
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
        </svg>
        {/* <button type="button" onClick={turnCounterClockwise} >Prev</button>
        <button type="button" onClick={turnClockwise} style={{margin: '4rem'}}>Next</button> */}
      </div>
      <div className={`${styles['chart-content']}`}>
        <div className={`${styles['items-wrapper']}`}>
          <h3 style={{color: currentChartColor}}>
            {data[selectedIndex].percentage}%
          </h3>
          <h4>
            {data[selectedIndex].title}
          </h4>
          <p>
            {data[selectedIndex].description}
          </p>
          <div>
            <Link href="/">
              <a className='button-blue'>Read More</a>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default RotatingChart;
