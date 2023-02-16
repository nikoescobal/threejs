import Link from 'next/link';
import styles from './whatispersonaldevelopment.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import AlternatingGrid from '../../Generic/AlternatingGrid/AlternatingGrid';
import Gradient from '../../Generic/Gradient/Gradient';
import Image from 'next/image';

function WhatIsPersonalDevelopment() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <section
      className={`
        ${styles['main-wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-y
        spacing-x
        max-1920
      `}
    >
      <Gradient className={styles.gradient} />
      <div className={`${styles['cards-wrapper']}`}>
        {content[locale].map((item) => (
          <div key={uuid} className={styles['text-wrapper']}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatIsPersonalDevelopment;
