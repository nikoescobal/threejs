import styles from './token_intro.module.scss';
import generics from '../../../styles/generics.module.scss';
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
      ${generics['spacing-x']}
      ${!isDarkMode ? `${styles.light}` : ''}
      `}
    >
      <div className={styles['token-wrapper']}>
        <div className={styles['token-image']}>
          <div>
            <img src={Coins.src} alt="Coins mockup" />
          </div>
        </div>
        <div>
          <h2>{content[locale].title}</h2>
          <p className={styles['token-subtitle']}>{content[locale].subtitle}</p>
          <div className={styles['border']}></div>
          {content[locale].content.map((content, index) => (
            <div key={index}>
              <div className={styles['token-wrapper']}>
                <div className={styles['token-text']}>
                  <p className={styles['token-heading']}>{content.heading}</p>
                  <p className={styles['token-description']}>{content.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TokenIntro;
