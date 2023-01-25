import Image from 'next/image';
import { useEffect, useState } from 'react';
import useStore from '../../../store/store';
import styles from './hexagon_slider.module.scss';
import Arrow from '../../../public/slider/arrow.svg';
import { useRouter } from 'next/router';
import content from './content';

function HexagonSlider() {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  useEffect(() => console.log(currentRotation), [currentRotation]);

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function moveSliderLeft() {
    setCurrentRotation(currentRotation + 60);
    if (currentIndex === 0) {
      setCurrentIndex(5);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function moveSliderRight() {
    setCurrentRotation(currentRotation - 60);
    setCurrentIndex((currentIndex + 1) % 6);
  }

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
    <div
      className={`
        ${styles['container']}
        ${styles[locale]}
        ${isDarkMode ? '' : `${styles.light}`}
      `}
    >
      <div
        className={`${styles['hexagon']} ${styles['animat']}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `rotateY(${currentRotation}deg) rotateX(0deg) rotateZ(-0deg)`,
        }}
      >
        <div className={`${styles['side-faces']}`}>
          {content[locale].map((item, index) => (
            <div
              className={`${styles['side']} ${
                index === currentIndex ? `${styles.active}` : ''
              }`}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a
                href="https://blog.legacynetwork.io/blogs/BMqUYdmjhe8AVi6by0EG"
                target="_blank"
                rel="noopener noreferrer"
                className={`read-more`}
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={styles['arrows-wrapper']}>
          <Image src={Arrow} alt="arrow-left" onClick={moveSliderLeft} />
          <Image src={Arrow} alt="arrowight" onClick={moveSliderRight} />
        </div>
      </div>
    </div>
  );
}

export default HexagonSlider;
