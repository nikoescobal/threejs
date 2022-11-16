import Image from 'next/image';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import Gradient from '../Gradient/Gradient';
import styles from './waveswrapper.module.scss';

function WavesWrapper({children, hideBottom}) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`
      ${styles['waves-wrapper']}
      ${!isDarkMode ? `${styles.light}` : ''}
      ${hideBottom ? `${styles['bottom-hidden']}` : ''}
    `}>
          {/* <Gradient style={{
            top: '-20%',
            left: '0%',
            width: '100vw',
          }} /> */}
      <div className={`${styles['waves-img-wrapper']}`}>
        {/* <div className={`${styles['radial-wrapper-top']}`}></div> */}
        <div className={`${styles['top-waves-wrapper']}`}>
          <img
            src="/backgrounds/wave-shape-darker.svg"
            className="waves-bg"
            alt="dark mode separator"
            draggable="false"
            style={{
              opacity: isDarkMode ? '1' : '0',
            }}
          />
          <img
            src="/backgrounds/wave-shape-light-new.svg"
            className="waves-bg"
            alt="light mode separator"
            draggable="false"
            style={{
              opacity: isDarkMode ? '0' : '1',
            }}
          />
        </div>
      </div>
      <div className={`${styles['content-wrapper']}`}>
        { children }
      </div>
      { !hideBottom && 
        <div className={`${styles['waves-img-wrapper']} ${styles['bottom']}}`}>
          <div className={`${styles['radial-wrapper-top']}`}></div>
          <img
            src="/backgrounds/wave-shape-dark-2.svg"
            className="waves-bg"
            alt="dark mode separator"
            draggable="false"
            style={{
              opacity: isDarkMode ? '1' : '0',
            }}
          />
          <img
            src="/backgrounds/wave-shape-light-new.svg"
            className="waves-bg"
            alt="light mode separator"
            draggable="false"
            style={{
              opacity: isDarkMode ? '0' : '1',
            }}
          />
        </div>
      }
    </div>
  )
}

WavesWrapper.propTypes = {
  disableBottom: PropTypes.bool,
}

WavesWrapper.defaultProps = {
  disableBottom: false,
}

export default WavesWrapper