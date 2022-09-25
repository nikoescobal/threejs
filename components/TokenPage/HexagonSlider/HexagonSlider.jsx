import { useEffect, useState } from 'react';
import useStore from '../../../store/store';
import styles from './hexagon_slider.module.scss';

function HexagonSlider() {
  const [currentRotation, setCurrentRotation] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const { isDarkMode } = useStore((state) => state);
  const data = [
    {
      title: 'title 1',
      body: 'body 1',
    },
    {
      title: 'title 2',
      body: 'body 2',
    },
    {
      title: 'title 3',
      body: 'body 3',
    },
    {
      title: 'title 4',
      body: 'body 4',
    },
    {
      title: 'title 5',
      body: 'body 5',
    },
    {
      title: 'title 6',
      body: 'body 6',
    },
  ]

  useEffect(() => console.log(currentRotation), [currentRotation])

  function handleTouchStart(e) {
      setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
      setTouchEnd(e.targetTouches[0].clientX);
  }

  function moveSliderLeft() {
    setCurrentRotation(currentRotation + 60);
    if (currentIndex === 0) {
      setCurrentIndex(5)
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  function moveSliderRight() {
    setCurrentRotation(currentRotation - 60);
    setCurrentIndex((currentIndex + 1) % 6)
  };

  function handleTouchEnd() {
      if (touchStart - touchEnd > 150) {
          // do your stuff here for left swipe
          moveSliderRight();
      }

      if (touchStart - touchEnd < -150) {
          // do your stuff here for right swipe
          moveSliderLeft();
      }
  }
  
  return (
    <div className={`${styles['container']} ${isDarkMode ? '' : `${styles.light}`}`}>
      <div className={`${styles['hexagon']} ${styles['animat']}`} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
      style={{
        transform: `rotateY(${currentRotation}deg) rotateX(0deg) rotateZ(-0deg)`
      }}>
        <div className={`${styles['side-faces']}`}>
          {
            data.map((item, index) => (
              <div className={`${styles['side']} ${index === currentIndex ? `${styles.active}` : ''}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          }
          
          {/* <div className={`${styles['side']}`}>
            side 1
          </div>
          <div className={`${styles['side']}`}>side 2</div>
          <div className={`${styles['side']}`}>side 3</div>
          <div className={`${styles['side']}`}>side 4</div>
          <div className={`${styles['side']}`}>side 5</div>
          <div className={`${styles['side']}`}>side 6</div> */}
        </div>
      </div>
      <div >
          <svg
            className={`${styles.arrow} ${styles.left}`}
            onClick={moveSliderLeft}
            xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" enableBackground="new 0 0 595.28 841.89" viewBox="0 0 776.09175 693.66538" height="693.66541" width="776.0918" y="0px" x="0px" id="Layer_1" version="1.1">
            <g transform="matrix(2.7190747,0,0,3.1037754,-326.9763,-1172.9045)" id="g3"><path style={{clipRule: 'evenodd', fillRule: 'evenodd'}} id="path5" d="m 130.838,381.118 c 1.125,28.749 5.277,54.82 12.695,78.018 7.205,22.53 18.847,40.222 36.812,53.747 52.018,39.16 153.369,16.572 153.369,16.572 l -4.632,-32.843 72.918,42.778 -58.597,58.775 -3.85,-27.303 c 0,0 -100.347,18.529 -163.905,-34.881 -37.659,-31.646 -53.293,-84.021 -51.593,-153.962 0.266,-0.247 4.728,-0.908 6.783,-0.901 z"/></g>
          </svg>
          <svg
            className={`${styles.arrow} ${styles.right}`}
            onClick={moveSliderRight}
            xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" enableBackground="new 0 0 595.28 841.89" viewBox="0 0 776.09175 693.66538" height="693.66541" width="776.0918" y="0px" x="0px" id="Layer_1" version="1.1">
            <g transform="matrix(2.7190747,0,0,3.1037754,-326.9763,-1172.9045)" id="g3"><path style={{clipRule: 'evenodd', fillRule: 'evenodd'}} id="path5" d="m 130.838,381.118 c 1.125,28.749 5.277,54.82 12.695,78.018 7.205,22.53 18.847,40.222 36.812,53.747 52.018,39.16 153.369,16.572 153.369,16.572 l -4.632,-32.843 72.918,42.778 -58.597,58.775 -3.85,-27.303 c 0,0 -100.347,18.529 -163.905,-34.881 -37.659,-31.646 -53.293,-84.021 -51.593,-153.962 0.266,-0.247 4.728,-0.908 6.783,-0.901 z"/></g>
          </svg>
        </div>
      {/* <div style={{marginTop: '8rem'}} >
        
        <button type='button' className={`${styles.arrow} ${styles.left}`} onClick={moveSliderLeft}>Left</button>
        <button type='button' onClick={moveSliderRight}>Right</button>
      </div> */}
  </div>
  )
}

export default HexagonSlider