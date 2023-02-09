import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination, Autoplay } from 'swiper';
import styles from './WalletFunctions.module.scss';
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

function WalletFunctions() {
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
      <div>
        <h2>{content[locale].title}</h2>
        <p>{content[locale].description}</p>
      </div>
      <div className={styles['slide-wrapper']}>
        {/* <Swiper
            className={`${styles['fade-slider']}`}
            effect={'flip'}
            grabCursor={true}
            slideTo
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFlip, Navigation, Pagination]}
          >
            {
              content.pictures.map((item) => (
                <SwiperSlide key={uuid} className={`${styles['card']}`}>
                  <img src={item.src} alt={item.alt} />
                </SwiperSlide>
              ))
            }
        </Swiper> */}
        <div className={styles['img-wrapper']}>
          <img src={content.pictures[value].src} alt={content.pictures[value].
          alt} />
        </div>

        <div className={styles['text-wrapper']}>
          <Tabs value={value} onChange={handleChange} aria-label="wallet function tabs" className={styles['tabs-wrapper']}>
          {
            content[locale].tabs.map((tab, index) => (
              <Tab key={uuid} label={tab} {...a11yProps(index)} />
            ))
          }
          </Tabs>
          {
            content[locale].tab_panels.map((tabPanel, index) => (
              // <Tab key={uuid} label={tab} {...a11yProps(index)} />
              <TabPanel key={uuid} value={value} index={index}>
                <p>{tabPanel}</p>
              </TabPanel>
            ))
          }

        </div>
      </div>
    </section>
  );
}

export default WalletFunctions;
