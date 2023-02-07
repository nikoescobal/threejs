import styles from './stakingsection.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import Staking from '../../../public/mockups/how-staking-works.png';

function StakingSection() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <section
      className={`${styles['staking-section']} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
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
                <div className={styles['text-wrapper']}>
                  <p className={styles['number']}>{step.number}</p>
                  <h4 className={styles['title']}>{step.title}</h4>
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
