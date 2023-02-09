import styles from './TokenIntro.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import Coins from '../../../public/illustrations/twocoins.png';

function TokenIntro() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();

  return (
    <section
      className={`
      ${styles.wrapper}
      ${!isDarkMode ? `${styles.light}` : ''}
      spacing-x
      max-1920
      `}
    >
      <div className={styles['token-wrapper']}>
        <div className={styles['token-image']}>
          <img src={Coins.src} alt="Coins mockup" />
        </div>
        <div>
          <h2>{content[locale].title}</h2>
          <p className={styles['token-subtitle']}>{content[locale].subtitle}</p>
          <div className={styles['info']}>
            {content[locale].content.map((content, index) => (
              <div key={index} className={styles['token']}>
                <span className={styles['token-title']}>{content.heading}</span>
                <span className={styles['token-description']}>{content.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenIntro;
