import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import useStore from '../../store/store';
import styles from './burningrate.module.scss';
import content from './content';
import generics from '../../styles/generics.module.scss';

function BurningRate() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <section
      className={`${styles.wrapper} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
      <h2>Subscription Token Distribution</h2>
      <div className={`${styles['cards-wrapper']}`}>
        {content[locale].cards.map((card) => (
          <div key={uuid} className={`${styles['card']}`}>
            <div className={styles['img-wrapper']}>
              <img src={card.icon} alt="token distribution icon" />
            </div>
            <div className={styles['text-wrapper']}>
              <h5>{card.title}</h5>
              <p>{card.percentage}</p>
              <span>{card.description}</span>
            </div>
          </div>
        ))}
        <p>{content[locale].description}</p>
      </div>
    </section>
  );
}

export default BurningRate;
