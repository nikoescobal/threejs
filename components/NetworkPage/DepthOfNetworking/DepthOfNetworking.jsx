import styles from './DepthOfNetworking.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

function DepthOfNetworking() {
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
      <h2>{content[locale].title}</h2>
      <p>{content[locale].description}</p>
      <div className={styles['levels-wrapper']}>
        {
          content[locale].levels.map((level, index) => (
            <div key={uuid} className={styles['level']}>
              <span>Level {index + 1}</span>
              <h3>{level.title}</h3>
              <p>{level.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default DepthOfNetworking;
