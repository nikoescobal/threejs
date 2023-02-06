import styles from './NFTSlider.module.scss';
import useStore from '../../../store/store';
import content from './content';
import Arrow from '../../../public/icons/double-arrow-left.svg';
import { useRouter } from 'next/router';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';
import { useState } from 'react';

function NFTSlider() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')
  const [slideIndex, setSlideIndex] = useState(0);

  const handleLeftClick = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  }

  const handleRightClick = () => {
    if (slideIndex < content.nfts.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  }

  return (
    <div
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
      `}
    >
      {
        content.nfts.map((nft, index) => <img key={uuid} src={nft.src} alt={nft.alt} data-active={index === slideIndex} />)
      }
      <div className={styles.bottom}>
        <button className={styles['arrow']} onClick={handleLeftClick}>
          <img src={Arrow.src} alt="left arrow for NFT slider" />
        </button>
        <span>{content[locale].characters[slideIndex]}</span>
        <button className={styles['arrow']} onClick={handleRightClick} style={{scale: '-1 1'}}>
          <img src={Arrow.src} alt="right arrow for NFT slider" />
        </button>
      </div>
      <div className={styles['indicators']}>
        {
          content.nfts.map((nft, index) => (
            <span key={uuid} data-active={index === slideIndex} />
          )          
        )
        }
      </div>
    </div>
  );
}

export default NFTSlider;
