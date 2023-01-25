/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../../store/store';
import styles from './chart.module.scss';
import Arrow from '../../../public/slider/arrow.svg';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from 'next/router';
import content from './content';

function RotatingChart() {
  const { isDarkMode } = useStore();
  const [inactiveColor, setInactiveColor] = useState('#464444');
  const { locale } = useRouter()
  const data = content[locale];

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
            <a href="https://blog.legacynetwork.io/blogs/yd5uix1WXkySTNAmiIUM" className={`${styles['read-more']} read-more`}>
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
