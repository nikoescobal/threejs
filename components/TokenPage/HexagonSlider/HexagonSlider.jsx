import Image from 'next/image';
import { useEffect, useState } from 'react';
import useStore from '../../../store/store';
import styles from './hexagon_slider.module.scss';
import Arrow from '../../../public/slider/arrow.svg';

function HexagonSlider() {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const { isDarkMode } = useStore((state) => state);
  const data = [
    {
      title: 'Get rewarded for learning',
      body: 'Our goal is to make education as playful and entertaining as possible. Many people struggle with building the necessary discipline to educate themselves on a regular basis. The main reason for this problematic is found in neurology. As things stand today, most people are neurologically addicted to instant gratification, short-termed dopamine release within the brain. We aim to take advantage of this effect and to use it for the user instead of using it against him',
    },
    {
      title: 'Get access to our products and services',
      body: 'The Legacy Token (LGCT) serves as the main payment method for subscriptions and purchases within our ecosystem. This allows us to create automatisms such as redistributions and to act independently of third-party providers.',
    },
    {
      title: 'Stake your Legacy Token (LGCT) for additional benefits',
      body: 'Staking your Legacy Token (LGCT) will grant you additional benefits such as staking rewards, airdrops, whitelist spots, discounts and access to exclusive services. ',
    },
    {
      title: 'Business to business utility',
      body: 'We plan to make selected parts of our ecosystem such as content libraries and code accessible for other businesses in future. The Legacy Token (LGCT) will be needed to access our B2B services which will benefit the community.',
    },
    {
      title: 'Get rewarded for contributing to our ecosystem',
      body: 'In future, users will be able to perform certain actions within the social part of our ecosystem and to earn rewards for doing so.',
    },
    {
      title: 'More about to come',
      body: `We haven't even started yet! Our goal is to create as much value for our community as possible. For this reason, new, exciting features will be announced on a regular basis.`,
    },
  ];

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
      className={`${styles['container']} ${
        isDarkMode ? '' : `${styles.light}`
      }`}
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
          {data.map((item, index) => (
            <div
              className={`${styles['side']} ${
                index === currentIndex ? `${styles.active}` : ''
              }`}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a
                href="http://blog.legacynetwork.io"
                target="_blank"
                rel="noopener noreferrer"
                className={`read-more`}
              >
                Read More
              </a>
            </div>
          ))}

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
      <div>
        <div className={styles['arrows-wrapper']}>
          <Image src={Arrow} alt="arrow-left" onClick={moveSliderLeft} />
          <Image src={Arrow} alt="arrowight" onClick={moveSliderRight} />
          {/* <Link href="/">
            <a className='button-blue'>Read More</a>
          </Link> */}
        </div>
      </div>
      {/* <div style={{marginTop: '8rem'}} >

        <button type='button' className={`${styles.arrow} ${styles.left}`} onClick={moveSliderLeft}>Left</button>
        <button type='button' onClick={moveSliderRight}>Right</button>
      </div> */}
    </div>
  );
}

export default HexagonSlider;
