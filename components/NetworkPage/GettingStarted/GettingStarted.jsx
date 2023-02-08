import styles from './GettingStarted.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

function GettingStarted() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto');

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
      <div className={styles['right']}>
        <h3>{content[locale].learn_more}</h3>
        <div className={styles['list-wrapper']}>
          {
            content[locale].list.map((item, index) => (
              index !== 0
                ? <a key={uuid} rel='noreferrer' target="_blank" className={styles['recording']} href={item.url}>
                  {item.text}
                  <ArrowOutwardIcon />
                </a>
                : <Link key={uuid} href={item.url}>{item.text}</Link>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;
