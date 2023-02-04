import styles from './sidepressuresection.module.scss';
import generics from '../../../styles/generics.module.scss';
import MovingIcon from '@mui/icons-material/Moving';
import useStore from '../../../store/store';
import CloudIcon from '@mui/icons-material/Cloud';
import { useRouter } from 'next/router';
import content from './content';

function SidePressureSection() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <section
      className={`${styles.section} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
      <div className={styles['text-wrapper']}>
        <h2>{content[locale].title}</h2>
        <p>{content[locale].description}</p>
      </div>
      <div className={`${styles['cards-wrapper']}`}>
        {content[locale].cards.map((card) => (
          <div key={uuid} className={`${styles['card']}`}>
            <div className={styles['img-wrapper']}>
              <img src={card.icon} alt="side-pressure illustration" />
            </div>
            <div>
              <h4>{card.title}</h4>
              <span>{card.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SidePressureSection;
