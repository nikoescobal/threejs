import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import DiagonalSlider from '../DiagonalSlider/DiagonalSlider';
import SliderContent from '../SliderContent/SliderContent';
import styles from './roadmap.module.scss';

function Roadmap({ showBackground }) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`
      ${styles.roadmap}
      ${styles['home-roadmap']}
      ${showBackground ? `${styles['background-visible']}` : ''}
      ${!isDarkMode ? `${styles.light}` : ''}`}>
      {/* { isDarkMode && <img src="/assets/backgrounds/waves-layered-dark-2.svg#svgView(viewBox(600, 00, 2000, 1050))" className="waves-bg" alt="" /> }
      { !isDarkMode && <img src="/assets/backgrounds/waves-layered-light-2.svg#svgView(viewBox(600, 00, 2000, 1050))" className="waves-bg" alt="" /> } */}

      {/* <h4>Roadmap</h4> */}
      <div className={`${styles.before}`}>
        <div>
          {/* <img src="/assets/backgrounds/dashed-lines.png" alt="" />
            <img src="/assets/backgrounds/dashed-lines.png" alt="" /> */}
        </div>
      </div>
      <div className={`${styles.after}`}>
        <div>
          {/* <img src="/assets/backgrounds/dashed-lines.png" alt="" /> */}
          {/* <img src="/assets/backgrounds/dashed-lines.png" alt="" /> */}
        </div>
      </div>

      {/* <img src="assets/backgrounds/radial.png" className={`${styles.rad}`} alt="" />
      <img src="assets/backgrounds/radial.png" className={`${styles.rad}`} alt="" /> */}
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
