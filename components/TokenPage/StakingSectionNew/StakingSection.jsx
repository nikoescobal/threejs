import styles from './stakingsection.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import Staking from '../../../public/mockups/how-staking-works.png';
import Gradient from '../../Generic/Gradient/Gradient';
import CheckIcon from '@mui/icons-material/Check';

function StakingSection() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <section
      className={`
        ${styles['staking-section']}
        ${!isDarkMode ? `${styles.light}` : ''}
        spacing-y
        spacing-x
        max-1920`}
    >
      <Gradient className={styles.gradient} />
      <div className={styles['content-left']}>
        <div className={styles['img-wrapper']}>
          <img src={Staking.src} alt="staking mockup"></img>
        </div>
      </div>

      <div className={styles['content-right']}>
        <h2>{content[locale].title}</h2>
        <div className={`${styles['steps-wrapper']}`}>
          {content[locale].steps.map((step) => (
            <div key={uuid} className={`${styles['step']}`}>
              <div className={styles['title-wrapper']}>
                <p className={styles['number']}>{step.number}</p>
                <div className={styles['title-wrapper']}>
                  <CheckIcon className={styles.check} />
                  <h3 className={styles['title']}>{step.title}</h3>
                </div>
                <p className={styles['description']}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StakingSection;
