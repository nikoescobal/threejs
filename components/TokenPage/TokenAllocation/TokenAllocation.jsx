/* eslint-disable no-unused-vars */
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useStore from '../../../store/store';
import styles from './TokenAllocation.module.scss';
import Arrow from '../../../public/slider/arrow.svg';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from 'next/router';
import content from './content';
import TokenAllocationChart from '../TokenAllocationChart/TokenAllocationChart';

function TokenAllocation() {
  const { isDarkMode } = useStore();
  const [inactiveColor, setInactiveColor] = useState('#464444');
  const { locale } = useRouter()

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

  return (
    <div
      className={`
      ${styles['wrapper']}
        ${!isDarkMode ? `${styles.light}` : ''}
        spacing-x
        max-1920
        `
      }
    >
      <h2>{content[locale].title}</h2>
      <TokenAllocationChart />
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

export default TokenAllocation;
