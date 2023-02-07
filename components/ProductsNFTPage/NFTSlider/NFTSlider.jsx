import styles from './NFTSlider.module.scss';
import useStore from '../../../store/store';
import content from './content';
import Arrow from '../../../public/icons/double-arrow-left.svg';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';

function NFTSlider({variant, characters, onRightClick, onLeftClick}) {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')
  const [slideIndex, setSlideIndex] = useState(0);
  const list = characters?.length ? characters : content.nfts

  const handleLeftClick = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
      onLeftClick(slideIndex - 1)
    }
  }

  const handleRightClick = () => {
    if (slideIndex < content.nfts.length - 1) {
      setSlideIndex(slideIndex + 1);
      onRightClick(slideIndex + 1);
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
        list.map((nft, index) => <img key={uuid} src={nft.src} alt={nft.alt} data-active={index === slideIndex} />)
      }
      {
        variant === 1
          ? <div className={styles.bottom}>
              <button className={styles['arrow']} onClick={handleLeftClick}>
                <img src={Arrow.src} alt="left arrow for NFT slider" />
              </button>
              <span>{content[locale].characters[slideIndex]}</span>
              <button className={styles['arrow']} onClick={handleRightClick} style={{scale: '-1 1'}}>
                <img src={Arrow.src} alt="right arrow for NFT slider" />
              </button>
            </div>
          : null
      }
      {
        variant === 2
          ? <div className={styles['arrows-wrapper']}>
              <button className={styles['arrow']} onClick={handleLeftClick}>
                <img src={Arrow.src} alt="left arrow for NFT slider" />
              </button>
              <button className={styles['arrow']} onClick={handleRightClick} style={{scale: '-1 1'}}>
                <img src={Arrow.src} alt="right arrow for NFT slider" />
              </button>
            </div>
          : null
      }
      
      <div className={styles['indicators']}>
        {
          list.map((nft, index) => (
            <span key={uuid} data-active={index === slideIndex} />
          )          
        )
        }
      </div>
    </div>
  );
}

NFTSlider.propTypes = {
  variant: PropTypes.number,
  onLeftClick: PropTypes.func,
  onRightClick: PropTypes.func,
  // characters: PropTypes.arrayOf(PropTypes.string)
}

NFTSlider.defaultProps = {
  variant: 1,
  onLeftClick: () => {},
  onRightClick: () => {},
  // characters: []
}

export default NFTSlider;
