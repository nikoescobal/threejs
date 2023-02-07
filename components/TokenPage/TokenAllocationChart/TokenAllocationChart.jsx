/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../../store/store';
import styles from './TokenAllocationChart.module.scss';
import Arrow from '../../../public/slider/arrow.svg';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from 'next/router';
import content from './content';

function TokenAllocationChart() {
  const { isDarkMode } = useStore();
  const [inactiveColor, setInactiveColor] = useState('#1960EA');
  const { locale } = useRouter()
  const data = content[locale];
  const { uuid } = require('crypto')

  useEffect(() => {
    if (isDarkMode) {
      setInactiveColor('#1960EA');
    } else {
      setInactiveColor('#79a4f6');
    }
  }, [isDarkMode]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  // const [rotationInfo] = useState([108, 72, 54 , 54, 36, 36, 108]);

  return (
    <div
      className={`${styles['wrapper']} ${
        !isDarkMode ? `${styles.light}` : ''
      }`}
    >
      <div className={`${styles['donut-wrapper']}`}>
        {/* <svg
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
                    onMouseOver={() => setSelectedIndex(index)}
                    onMouseLeave={() => setSelectedIndex(null)}
                    className={`${styles['donut-segment']} ${
                      selectedIndex === index ? `${styles.active}` : ''
                    }`}
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    fill="transparent"
                    strokeDashoffset={item.offset}
                    // stroke={!isNaN(selectedIndex) && selectedIndex === index ? item.color : inactiveColor}
                    stroke={item.color}
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
                    onMouseOver={() => setSelectedIndex(index)}
                    onMouseLeave={() => setSelectedIndex(null)}
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    fill="transparent"
                    strokeDashoffset={item.offset}
                    // stroke={
                    //   selectedIndex === index ? item.color : inactiveColor
                    // }
                    stroke={
                      item.color
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
        </svg> */}
        <svg width="344" height="344" viewBox="0 0 344 344" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onMouseOver={() => setSelectedIndex(0)}
            onMouseLeave={() => setSelectedIndex(null)}
            d="M344 172C344 208.323 332.501 243.713 311.151 273.099C289.801 302.485 259.696 324.357 225.151 335.582C190.606 346.806 153.394 346.806 118.849 335.582C84.304 324.357 54.1991 302.485 32.8491 273.099L88.5094 232.659C101.319 250.291 119.382 263.414 140.109 270.149C160.836 276.884 183.164 276.884 203.891 270.149C224.618 263.414 242.681 250.291 255.491 232.659C268.301 215.028 275.2 193.794 275.2 172H344Z" fill="#1960EA"/>
          <path
            onMouseOver={() => setSelectedIndex(1)}
            onMouseLeave={() => setSelectedIndex(null)}
            d="M97.5904 327.072C71.4707 314.538 48.9399 295.61 32.0888 272.044L88.0533 232.027C98.1639 246.166 111.682 257.523 127.354 265.043L97.5904 327.072Z" fill="#103C59"/>
          <path
            onMouseOver={() => setSelectedIndex(2)}
            onMouseLeave={() => setSelectedIndex(null)}
            d="M118.18 8.63713C144.048 0.114846 171.571 -2.14251 198.482 2.05087C225.393 6.24425 250.924 16.7685 272.973 32.7573C295.022 48.7462 312.958 69.7426 325.306 94.0184C337.655 118.294 344.062 145.156 344 172.391L275.2 172.235C275.237 155.893 271.393 139.777 263.984 125.211C256.575 110.646 245.813 98.0477 232.584 88.4544C219.354 78.8611 204.036 72.5465 187.889 70.0305C171.742 67.5145 155.229 68.8689 139.708 73.9823L118.18 8.63713Z" fill="#4066A0"/>
          <path
            onMouseOver={() => setSelectedIndex(3)}
            onMouseLeave={() => setSelectedIndex(null)}
            d="M33.2778 273.687C17.2306 251.795 6.59238 226.416 2.23289 199.625C-2.12659 172.834 -0.0835314 145.391 8.19503 119.541C16.4736 93.691 30.7526 70.1671 49.8646 50.8929C68.9766 31.6186 92.3789 17.1412 118.158 8.6444L139.695 73.9866C124.227 79.0847 110.186 87.7711 98.7188 99.3357C87.2516 110.9 78.6842 125.015 73.717 140.525C68.7499 156.035 67.524 172.5 70.1397 188.575C72.7554 204.65 79.1384 219.877 88.7667 233.012L33.2778 273.687Z" fill="#0D2535"/>
        </svg>

        {/* <button type="button" onClick={turnCounterClockwise} >Prev</button>
        <button type="button" onClick={turnClockwise} style={{margin: '4rem'}}>Next</button> */}
      </div>
      <div className={styles['right']}>
        {data.map((item, index) => (
          <div key={uuid}>
            <span
              className={styles.dot} style={{color: !isNaN(selectedIndex) && selectedIndex === index ? item.color : inactiveColor}}>{item.percentage}%</span>
            <span className={styles.title} style={{color: !isNaN(selectedIndex) && selectedIndex === index ? item.color : inactiveColor}}>{item.title}</span>
            <div className={styles['sub-list-wrapper']}>
              {
                item.description.map((subItem) => (
                  <span key={uuid}>{subItem}</span>
                ))
              }
            </div>
          </div>
        ))}
      </div>
      {/* <div className={styles.bg}>
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
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default TokenAllocationChart;
