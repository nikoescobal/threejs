import content from './content.js';
import styles from './legacymethods.module.scss';
import useStore from '../../../../store/store';
import MethodCard from '../MethodCard/MethodCard.jsx';
import Arrow from '../../../../public/icons/dotted-arrow.svg';
import { Diversity3 } from '@mui/icons-material';
import { useRouter } from 'next/router.js';

const LegacyMethods = () => {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();

  return (
    <section
      className={`${styles['legacy-method-wrapper']} ${
        !isDarkMode ? `${styles['light']}` : ''
      } spacing-x`}
    >
      <h2 className={styles['title']}>The Legacy Method</h2>
      <p className={styles['subtitle']} dangerouslySetInnerHTML={{__html: content[locale].subtitle}} />

      <div className={styles['legacy-methods']}>
        <div className={styles['left-content']}>
          {content[locale].list.slice(0, 3).map((method, index) => (
            <MethodCard
              className={styles['left']}
              key={index}
              title={method.title}
              description={method.description}
            />
          ))}
        </div>
        <div className={styles['divider-wrapper']}>
          <div className={styles['divider-content']}>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-left']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>
              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-right']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-left']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-right']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-left']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-right']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
          </div>
        </div>

        <div className={styles['right-content']}>
          {content[locale].list.slice(3, 6).map((method, index) => (
            <MethodCard
              className={styles['right']}
              key={index}
              title={method.title}
              description={method.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyMethods;
