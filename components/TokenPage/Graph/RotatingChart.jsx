/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../../store/store';
import styles from './chart.module.scss';
import Arrow from '../../../public/slider/arrow.svg';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const data = [
  {
    title: 'Ecosystem',
    description: ['Exchange liquidity', 'Play to earn pool', 'Staking pool'],
    // percentage: 30,
    percentage: 40,
    color: '#f73094',
    tokens: '288’000’000',
    // offset: 15
    offset: 20,
  },
  {
    title: 'Token Sale',
    description: ['Private sale', 'Public sale'],
    percentage: 20,
    color: '#775dd0',
    offset: 80,
    tokens: '144’000’000',
    x: 71,
    y: -62,
    rotation: 107,
  },
  {
    title: 'Development',
    description: ['Reserve for further development'],
    percentage: 10,
    color: '#ff4560',
    offset: 60,
    tokens: '72’000’000',
    x: 8,
    y: -63,
    rotation: 160,
  },
  {
    title: 'Team',
    description: ['Rewards for our amazing team members'],
    percentage: 15,
    color: '#feb019',
    offset: 50,
    tokens: '108’000’000',
    x: -29,
    y: -23,
    rotation: 205,
  },
  {
    title: 'Community & Marketing',
    description: ['Community events', 'Marketing deals', 'Raffles'],
    percentage: 10,
    color: '#00e396',
    offset: 35,
    tokens: '72’000’000',
    x: -26,
    y: 32,
    rotation: 251,
  },
  {
    title: 'Advisors & Partners',
    description: ['Rewards for people who helped us along the way'],
    percentage: 5,
    color: '#008ffb',
    offset: 25,
    tokens: '36’000’000',
    x: -6,
    y: 56.5,
    rotation: 275,
  },
];

function RotatingChart() {
  const { isDarkMode } = useStore();
  const [inactiveColor, setInactiveColor] = useState('#464444');

  useEffect(() => {
    if (isDarkMode) {
      setInactiveColor('#464444');
    } else {
      setInactiveColor('#CADBFF');
    }
  }, [isDarkMode]);

  const { currentChartColor, setCurrentChartColor } = useStore(
    (state) => state
  );

  const calculateOffset = (arcLength, prevArcOffset) => {
    const newOffset = (100 - arcLength + prevArcOffset) % 100;
    return newOffset;
  };

  const [currentRotation, setCurrentRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [rotationInfo] = useState([108, 72, 54 , 54, 36, 36, 108]);
  const [rotationInfo] = useState([144, 72, 36, 54, 36, 18, 144]);

  const turnClockwise = () => {
    setCurrentRotation(
      currentRotation +
        rotationInfo[selectedIndex] / 2 +
        rotationInfo[selectedIndex + 1] / 2
    );
    setCurrentChartColor(data[(selectedIndex + 1) % data.length].color);
    setSelectedIndex((selectedIndex + 1) % data.length);
  };

  const turnCounterClockwise = () => {
    if (selectedIndex === 0) {
      const lastItemLength = rotationInfo[rotationInfo.length - 1];
      const secondLastItemLength = rotationInfo[rotationInfo.length - 2];
      // move back with average of last two items
      setCurrentRotation(
        currentRotation - (lastItemLength + secondLastItemLength) / 2
      );
      setCurrentChartColor(data[data.length - 1].color);
      setSelectedIndex(data.length - 1);
    } else {
      setCurrentRotation(
        currentRotation -
          rotationInfo[selectedIndex] / 2 -
          rotationInfo[selectedIndex - 1] / 2
      );
      setCurrentChartColor(data[selectedIndex - 1].color);
      setSelectedIndex((selectedIndex - 1) % data.length);
    }
  };

  useEffect(() => {
    setCurrentChartColor(data[0].color);
  }, []);

  return (
    <div
      className={`${styles['chart-wrapper']} ${
        !isDarkMode ? `${styles.light}` : ''
      }`}
    >
      <div className={`${styles['donut-wrapper']}`}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 42 42"
          className={`${styles.donut}`}
          style={{
            rotate: `calc(${currentRotation}deg * -1)`,
          }}
        >
          {data.map((item, index) => (
            <>
              {index === 0 ? (
                <g
                  className={`${
                    selectedIndex === index ? `${styles.active}` : ''
                  }`}
                >
                  <circle
                    className={`${styles['donut-segment']} ${
                      selectedIndex === index ? `${styles.active}` : ''
                    }`}
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    fill="transparent"
                    strokeDashoffset={item.offset}
                    stroke={selectedIndex === index ? item.color : inactiveColor}
                    strokeDasharray={`${item.percentage} ${
                      100 - item.percentage
                    }`}
                    strokeWidth="9"
                  ></circle>
                  <text
                    x="88%"
                    y="55%"
                    textAnchor="middle"
                    stroke="rgba(0,0,0,0.2)"
                    fontSize="0.2rem"
                    strokeWidth="0px"
                    fontWeight="600"
                    fill="rgba(0,0,0,0.2)"
                  >
                    {item.percentage}%
                  </text>
                </g>
              ) : (
                <g
                  className={`${
                    selectedIndex === index ? `${styles.active}` : ''
                  }`}
                >
                  <circle
                    className={`${styles['donut-segment']} ${
                      selectedIndex === index ? `${styles.active}` : ''
                    }`}
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    fill="transparent"
                    strokeDashoffset={item.offset}
                    stroke={
                      selectedIndex === index ? item.color : inactiveColor
                    }
                    strokeDasharray={`${item.percentage} ${
                      100 - item.percentage
                    }`}
                    strokeWidth="9"
                  ></circle>
                  <text
                    x={`${item.x}%`}
                    y={`${item.y}%`}
                    dominantBaseline="central"
                    textAnchor="middle"
                    stroke="rgba(0,0,0,0.2)"
                    fontSize="0.2rem"
                    strokeWidth="0px"
                    fontWeight="600"
                    fill="rgba(0,0,0,0.2)"
                    style={{ transform: `rotateZ(${item.rotation}deg)` }}
                  >
                    {item.percentage}%
                  </text>
                </g>
              )}
            </>
          ))}
        </svg>
        {/* <button type="button" onClick={turnCounterClockwise} >Prev</button>
        <button type="button" onClick={turnClockwise} style={{margin: '4rem'}}>Next</button> */}
      </div>
      <div className={styles.bg}>
        <div className={`${styles['vesting-wrapper']}`}>
          <span style={{
            color: currentChartColor,
          }}>
            Vesting schedule coming soon
          </span>
        <div />
        </div>
        <div className={`${styles['chart-content']}`}>
          <div className={`${styles['items-wrapper']}`}>
            <h3 style={{ color: currentChartColor }}>
              {data[selectedIndex].percentage}%
            </h3>
            <h4 className={styles['title']} style={{color: currentChartColor}}>{data[selectedIndex].title}</h4>
            <p className={styles['token-percentage']}>
              {data[selectedIndex].tokens}
            </p>
            <ul className={styles.descriptions}>
              {data[selectedIndex].description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
            <a href="https://blogs.legacynetwork.io" className={`${styles['read-more']} read-more`}>
              Read More
              <ArrowRightAltIcon />
            </a>
            <div className={styles['arrows-wrapper']}>
              <Image
                src={Arrow}
                alt="arrow-left"
                onClick={turnCounterClockwise}
              />
              <Image src={Arrow} alt="arrowight" onClick={turnClockwise} />
              
              {/* <Link href="/">
                <a className='button-blue'>Read More</a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RotatingChart;
