import Image from 'next/image';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './waveswrapper.module.scss';

function WavesWrapper({children}) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`${styles['waves-wrapper']} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <div className={`${styles['waves-img-wrapper']}`}>
        <div className={`${styles['radial-wrapper-top']}`}></div>
        <img src="/backgrounds/wave-shape-dark-2.svg" className="waves-bg" alt=""
          style={{
            opacity: isDarkMode ? '1' : '0',
          }}
         />
        <img src="/backgrounds/wave-shape-light-2.svg" className="waves-bg" alt=""
          style={{
            opacity: isDarkMode ? '0' : '1',
          }}
         />
      </div>
      {/* <img src="/backgrounds/wave-shape-dark.svg#svgView(viewBox(600, 00, 2000, 1050))" className="waves-bg" alt="" /> */}
      <div className={`${styles['content-wrapper']}`}>
        { children }
      </div>
      {/* <Image objectFit='fill' src="/backgrounds/wave-shape-light.svg#svgView(viewBox(600, 00, 2000, 1050))" className="waves-bg" alt="" /> */}
      <div className={`${styles['waves-img-wrapper']} ${styles['bottom']}}`}>
        <div className={`${styles['radial-wrapper-top']}`}></div>
        <img src="/backgrounds/wave-shape-dark-2.svg" className="waves-bg" alt=""
        style={{
          opacity: isDarkMode ? '1' : '0',
        }} />
        <img src="/backgrounds/wave-shape-light-2.svg" className="waves-bg" alt=""
          style={{
            opacity: isDarkMode ? '0' : '1',
          }}
         />
      </div>
    </div>
  )
}

export default WavesWrapper