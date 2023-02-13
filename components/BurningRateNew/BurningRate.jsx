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
      className={`
      ${styles.wrapper}
      ${!isDarkMode ? `${styles.light}` : ''}
      spacing-x
      spacing-y
      max-1920`}
    >
      <h2>Subscription Token Distribution</h2>
      <div className={`${styles['cards-wrapper']}`}>
        {content[locale].cards.map((card) => (
          <div key={uuid} className={`${styles['card']}`}>
            <img src={card.icon} alt="token distribution icon" />
            <div className={styles['text-wrapper']}>
              <span>{card.title}</span>
              <span className={styles.percentage}>{card.percentage}</span>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
        <p>{content[locale].description}</p>
      </div>
    </section>
  );
}

export default BurningRate;
