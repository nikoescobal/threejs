import styles from './pillarsofanunhappylife.module.scss';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';

function PillarsOfAnUnhappyLife() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto')

  return (
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
      `}
    >
      <h2>{content[locale].title}</h2>
      <p>{content[locale].description}</p>
      <div className={styles['row-wrapper']}>
        {
          content[locale].list.map((row) => (
            <div key={uuid} className={styles.row}>
              {row.map((item) => (
                <span key={uuid}>{item}</span>
              ))}
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default PillarsOfAnUnhappyLife;
