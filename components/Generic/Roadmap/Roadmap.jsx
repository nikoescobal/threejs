import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import DiagonalSlider from '../DiagonalSlider/DiagonalSlider';
import SliderContent from '../SliderContent/SliderContent';
import styles from './roadmap.module.scss';
import Gradient from '../Gradient/Gradient';

function Roadmap({ title, showBackground, style }) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`
      ${styles.roadmap}
      ${styles['home-roadmap']}
      ${showBackground ? `${styles['background-visible']}` : ''}
      ${!isDarkMode ? `${styles.light}` : ''}`}
      style={style}
    >
      {showBackground &&
        <>
          <Gradient isHalf={true} style={{
            top: '-50vw',
            left: '0%',
          }} />
          <Gradient isHalf={true} style={{
            bottom: '-50vw',
            left: '0%',
            rotate: '180deg',
          }} />
          <div className={`${styles.before}`}>
            <svg width="1693" height="380" viewBox="0 0 1693 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.21048 374.358L1691.29 5.14067" stroke="#3C3C3C" strokeWidth="10" strokeDasharray="37 37"/>
            </svg>
            <svg width="1693" height="380" viewBox="0 0 1693 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.21048 374.358L1691.29 5.14067" stroke="#3C3C3C" strokeWidth="10" strokeDasharray="37 37"/>
            </svg>
          </div>
          <div className={`${styles.after}`}>
            <svg width="1693" height="380" viewBox="0 0 1693 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.21048 374.358L1691.29 5.14067" stroke="#3C3C3C" strokeWidth="10" strokeDasharray="37 37"/>
            </svg>
            <svg width="1693" height="380" viewBox="0 0 1693 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.21048 374.358L1691.29 5.14067" stroke="#3C3C3C" strokeWidth="10" strokeDasharray="37 37"/>
            </svg>
          </div>
        </>
      }
      <h3>{title}</h3>
      <DiagonalSlider />
    </div>
  );
}

Roadmap.propTypes = {
  showBackground: PropTypes.bool,
}

Roadmap.defaultProps = {
  showBackground: true,
}

export default Roadmap;
