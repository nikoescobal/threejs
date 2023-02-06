import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination, Autoplay } from 'swiper';
import styles from './WalletHighlights.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { a11yProps } from '../../../utils';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import TabPanel from '../../Generic/TabPanel/TabPanel';

function WalletHighlights() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
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
      <div className={styles['grid']}>
        <div>
          <img src="/weapons/orb.png" alt="Legacy Network Orb" />
        </div>
        <div>
          <h2>{content[locale].title}</h2>
          <div className={styles['cards-wrapper']}>
            {
              content[locale].cards.map((card) => (
                <div key={uuid} className={styles.card}>
                  <img src={card.icon} alt="Card Icon" />
                  <span>{card.title}</span>
                  <p>{card.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default WalletHighlights;
