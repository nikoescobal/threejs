import styles from './DiscoverOurNFT.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';
import NFTSlider from '../../ProductsNFTPage/NFTSlider/NFTSlider';
import { useState } from 'react';
import { useEffect } from 'react';

function DiscoverOurNFT() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')
  const [slideIndex, setSlideIndex] = useState(0);

  const handleRightClick = (index) => {
      setSlideIndex(index)
  }

  const handleLeftClick = (index) => {
      setSlideIndex(index)
  }

  useEffect(() => {
    console.log(slideIndex);
  }, [slideIndex])

  return (
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
        max-1920
      `}
    >
      <h2>{content[locale].title}</h2>
      <p>{content[locale].description}</p>
      <div className={styles['top-info']}>
        <p>{content.en.total.text} <span>{content.en.total.amount}</span></p>
        <p>{content.en.legendary.text} <span>{content.en.legendary.amount}</span></p>
      </div>
      <div className={styles['grid']}>
        <NFTSlider
          variant={2}
          onRightClick={handleRightClick}
          onLeftClick={handleLeftClick}
          characters={content.characters}
        />
        <div>
          <h3>{content[locale].info[slideIndex].title}</h3>
          <p>{content[locale].info[slideIndex].description}</p>
        </div>
      </div>
    </section>
  );
}

export default DiscoverOurNFT;
