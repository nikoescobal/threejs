import styles from './Tribes.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';
import NFTSlider from '../NFTSlider/NFTSlider';
import { useState } from 'react';
import Gradient from '../../Generic/Gradient/Gradient';

function Tribes() {
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
      {/* <Gradient className={styles['gradient']} /> */}
      <div className={styles['text-wrapper']}>
        <h2>{content[locale].title}</h2>
        <p>{content[locale].description_1}</p>
        <br />
        <p>{content[locale].information[slideIndex]}</p>
      </div>
      {/* <p>{content[locale].description_2}</p> */}
      <NFTSlider onLeftClick={handleLeftClick} onRightClick={handleRightClick}  />
    </section>
  );
}

export default Tribes;
