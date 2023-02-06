import styles from './AboutTheWallet.module.scss';
import useStore from '../../../store/store';
import content from './content';
import Arrow from '../../../public/icons/double-arrow-left.svg';
import { useRouter } from 'next/router';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';
import { useState } from 'react';

function AboutTheWallet() {
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
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
        max-1920
      `}
    >
      <div>
        <h2>{content[locale].title}</h2>
        <p>{content[locale].description}</p>
      </div>
      <img src="/mockups/legacy-wallet-about.png" alt="Legacy Wallet Illustration" />
    </section>
  );
}

export default AboutTheWallet;
