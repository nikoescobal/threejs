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
      <div style={{marginTop: '8rem'}}>
        <button type='button' onClick={moveSliderLeft}>Left</button>
        <button type='button' onClick={moveSliderRight}>Right</button>
      </div>
  </div>
  )
}

export default HexagonSlider