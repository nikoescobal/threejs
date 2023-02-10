import styles from './Events.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Gradient from '../../Generic/Gradient/Gradient';

function Events() {
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
      <Gradient className={styles.gradient} />
      <div className={styles['text-wrapper']}>
        <h2>{content[locale].title}</h2>
        <p>{content[locale].description}</p>
        <div className={styles['main-info-wrapper']}>
          <span>{content[locale].recordings}</span>
          <span>{content[locale].view_all}</span>
        </div>
        <div className={styles['list-wrapper']}>
          {
            content[locale].recordings_list.map((recording) => (
              <a key={uuid} className={styles['recording']} href={recording.src}>
                <img src={recording.img} alt="Recording header image" />
                <h3>{recording.title}</h3>
                <p>{recording.description}</p>
                <p className={styles['author']}>
                  {recording.author}
                  <span>
                    {' On '}
                    {recording.date}
                  </span>
                </p>
              </a>
            ))
          }
        </div>

      </div>
    </section>
  );
}

export default Events;
