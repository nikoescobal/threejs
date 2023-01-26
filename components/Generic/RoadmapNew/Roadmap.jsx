import { useState } from 'react';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import RoadmapContent from './RoadmapContent';
import content from './content';
import styles from './roadmap.module.scss';
import useStore from '../../../store/store';

export default function Roadmap() {
  const [currentSlideindex, setCurrentSlideindex] = useState(0);
  const [currentProduct, setCurrentProduct] = useState('legacyApp');
  const [selectedButton, setSelectedButton] = useState(0);

  const handlePreviousClick = () => {
    setCurrentSlideindex(currentSlideindex - 1);
  };

  const handleNextClick = () => {
    setCurrentSlideindex(currentSlideindex + 1);
  };

  const handleAppBtnClick = (product, selectedButton) => {
    console.log(product);
    setCurrentSlideindex(0);
    setCurrentProduct(product);
    setSelectedButton(selectedButton);
  };

  const currentSlide = content[currentProduct][currentSlideindex];
  const totalSlides = content[currentProduct].length;
  const { isDarkMode } = useStore();

  // onClick={() => handleAppBtnClick("legacyApp")}
  return (
    <section
      className={`${styles['roadmap-wrapper']} ${
        !isDarkMode ? `${styles['light']}` : ''
      } spacing-x`}
    >
      <div className={styles['roadmap-title-wrapper']}>
        <h3 className={styles['title']}>Our Roadmap</h3>
        <div className={styles['legacy-button-wrapper']}>
          <Button
            className={`${styles['roadmap-button']} ${
              selectedButton === 0 ? `${styles['active-button']} ` : ''
            }`}
            onClick={() => handleAppBtnClick('legacyApp', 0)}
          >
            Legacy App
          </Button>
          <Button
            className={`${styles['roadmap-button']} ${
              selectedButton === 1 ? `${styles['active-button']} ` : ''
            }`}
            onClick={() => handleAppBtnClick('legacyWallet', 1)}
          >
            Legacy Wallet
          </Button>
          <Button
            className={`${styles['roadmap-button']} ${
              selectedButton === 2 ? `${styles['active-button']} ` : ''
            }`}
            onClick={() => handleAppBtnClick('legacyHealth', 2)}
          >
            Legacy Health
          </Button>
          <Button
            className={`${styles['roadmap-button']} ${
              selectedButton === 3 ? `${styles['active-button']} ` : ''
            }`}
            onClick={() => handleAppBtnClick('legacyNFT', 3)}
          >
            Legacy NFT
          </Button>
        </div>
      </div>

      <RoadmapContent slide={currentSlide} />
      <div className={styles['navigate-wrapper']}>
        <IconButton
          disabled={currentSlideindex === 0 ? `${styles.disabled}` : ''}
          onClick={handlePreviousClick}
          aria-label="delete"
        >
          <NavigateBeforeIcon />
        </IconButton>
        {`${currentSlideindex + 1} / ${totalSlides}`}
        <IconButton
          disabled={
            currentSlideindex === totalSlides - 1 ? `${styles.disabled}` : ''
          }
          onClick={handleNextClick}
          aria-label="delete"
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </section>
  );
}
