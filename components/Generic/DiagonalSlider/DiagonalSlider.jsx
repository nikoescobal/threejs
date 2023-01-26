import styles from './diagonalslider.module.scss';
import { useState } from 'react';
import SliderContent from '../SliderContent/SliderContent';
import useStore from '../../../store/store';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import benefits from './content';
import ComingSoon from '../ComingSoon/ComingSoon';
import useScrollbarSize from 'react-scrollbar-size';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import content from './content';
import { useRouter } from 'next/router';

function DiagonalSlider({ showBenefits }) {
  const { height, width } = useScrollbarSize();
  const { locale } = useRouter();

  const roadmapItems = content[locale].content;
  const { isDarkMode } = useStore((state) => state);
  const isTablet = useMediaQuery('(min-width: 768px)');
  const [openDialog, setOpenDialog] = useState(false);
  const [position, setPosition] = useState({ x: 1, y: 0 });
  // const offset = { x: 33, y: -6 };
  const [offset, setOffset] = useState({ x: 95, y: -6 });

  useEffect(() => {
    console.log(isTablet);
    if (isTablet) {
      setOffset({ x: 33, y: -6 });
    }
  }, [isTablet]);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const moveRight = () => {
    if (!showBenefits) {
      if (Math.abs(position.x) < roadmapItems.length - 2) {
        setPosition({ x: position.x - 1, y: position.y - 1 });
      }
    } else {
      if (Math.abs(position.x) < benefits.length - 2) {
        setPosition({ x: position.x - 1, y: position.y - 1 });
      }
    }
  };

  const moveLeft = () => {
    if (position.x < 1) {
      // setSelectedSlideIndex(position.x);
      setPosition({ x: position.x + 1, y: position.y + 1 });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => moveRight(),
    onSwipedRight: (eventData) => moveLeft(),
  });

  return (
    <div
      {...handlers}
      className={`${styles['slider']} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <div
        className={`${styles['slide-main']}`}
        style={{
          transform: `translate(${
            (position.x - (isTablet ? 0 : 1)) * offset.x
          }vw, ${position.y * offset.y}vw)`,
        }}
      >
        {roadmapItems.map((item, index) => (
          <div
            key={item.phase}
            className={`${styles['slide']} ${
              index === Math.abs(position.x - 1) ? `${styles['active']}` : ''
            }`}
            style={{
              transform: `translateY(${offset.y * index}vw)`,
            }}
          >
            <div className={`${styles['phase-wrapper']}`}>
              <p>{item.phase}</p>
            </div>
            <div className={`${styles['timeframe-wrapper']}`}>
              <p>{item.date}</p>
            </div>
            <SliderContent
              list={item.content}
              showBenefits={showBenefits}
              isActive={index === Math.abs(position.x - 1)}
            />
            <div></div>
          </div>
        ))}
      </div>
      <div className={`${styles['arrows-wrapper']}`}>
        <div>
          <button
            type="button"
            className={`${styles.arrow} ${styles.left}`}
            onClick={moveLeft}
          >
            <Image layout="fill" src="/slider/arrow.svg" alt="arrow" />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.right}`}
            style={{
              right: `calc(${width}px + 1%)`,
            }}
            onClick={moveRight}
          >
            <Image layout="fill" src="/slider/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
      <div className={styles['double-arrow']}>
        <Image layout="fill" src="/icons/double-arrow.svg" alt="arrow" />
      </div>
      {/* <SliderContent
          list={roadmapItems[Math.abs(position.x - 1)].content}
          open={openDialog}
          onClose={handleDialogClose}
        /> */}
    </div>
  );
}

DiagonalSlider.defaultProps = {
  showBenefits: false,
};

export default DiagonalSlider;
