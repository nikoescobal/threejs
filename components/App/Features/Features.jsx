/* eslint-disable react/no-unescaped-entities */
import { floorPowerOfTwo } from 'three/src/math/MathUtils';
import useStore from '../../../store/store';
import Image from 'next/image';
import styles from './features.module.scss';
import kf1 from '../../../public/features/kf1.png';
import kf2 from '../../../public/features/kf2.png';
import kf3 from '../../../public/features/kf3.png';
import kf4 from '../../../public/features/kf4.png';
import muscles from '../../../public/icons/muscles.svg';
import clock from '../../../public/icons/clock.svg';
import halfmoon from '../../../public/icons/halfmoon.svg';
import WavesWrapper from '../../Generic/WavesWrapper/WavesWrapper';
import generics from '../../../styles/generics.module.scss';
import Gradient from '../../Generic/Gradient/Gradient';
import Circles from '../../Generic/Circles/Circles';
import { useRouter } from 'next/router';
import content from './content';

function Features() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <WavesWrapper hideBottom={true}>
      <Gradient
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
        }}
      />
      <Gradient
        style={{
          top: '125%',
          left: '0%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
        }}
      />
      <Circles className={styles.circles} />
      <section
        className={`${styles.section} ${
          !isDarkMode ? `${styles.light}}` : ''
        } spacing-x max-1920`}
      >
        <h3 className={styles['key-features']}>
          {content[locale].title}
        </h3>

        <div className={`${styles.content}`}>
          <div className={`${styles.imgwrapper}`}>
            <img src="/features/kf4.png" alt="key feature 1" />
          </div>
          <div style={{
            position: 'relative'
          }}>
            <h3>{content[locale].education.title}</h3>
            <p>
              {content[locale].education.description}
            </p>
          </div>
        </div>

        <div className={`${styles.content}`}>
          <div className={`${styles.imagereverse}`}>
            <img src="/features/health-2.png" alt="key feature 2" />
          </div>

          <div className={`${styles['health-wrapper']}`}>
            <div className={`${styles.healthline}`}>
              <img src="/illustrations/healthline.svg" alt="heathline" />
            </div>
            <h3 style={{
              position: 'relative',
              zIndex: '1'
            }}>{content[locale].health.title}</h3>
            <p style={{
              position: 'relative',
              zIndex: '1'
            }}>
              {content[locale].health.description}
            </p>

            <div className={`${styles.wrapper}`} style={{
              position: 'relative',
              zIndex: '1'
            }}>
              <div className={`${styles.icons}`}>
                <img
                  src="/features/health-moon.png"
                  alt="halfmoon icon"
                  style={{ scale: '1.25', zIndex: '1' }}
                />
              </div>
              <div className={`${styles.healthtext}`}>
                <h4>{content[locale].sleep.title}</h4>
                <p>
                  {content[locale].sleep.description}
                </p>
              </div>
            </div>
            <div className={`${styles.wrapper}`} style={{
              position: 'relative',
              zIndex: '1'
            }}>
              <div className={`${styles.icons}`}>
                <img
                  src="/features/health-muscle.png"
                  alt="muscles icon"
                  style={{ scale: '1.25', zIndex: '1' }}
                />
              </div>
              <div className={`${styles.healthtext}`}>
                <h4>{content[locale].nutritional.title}</h4>
                <p>
                  {content[locale].nutritional.description}
                </p>
              </div>
            </div>

            <div className={`${styles.wrapper}`} style={{
              position: 'relative',
              zIndex: '1'
            }}>
              <div className={`${styles.icons}`}>
                <img
                  src="/features/health-time.png"
                  alt="clock icon"
                  style={{ scale: '1.25', zIndex: '1' }}
                />
              </div>
              <div className={`${styles.healthtext}`}>
                <h4>{content[locale].time.title}</h4>
                <p>
                {content[locale].time.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.content}`}>
          <div className={`${styles.imgwrapper}`} style={{ padding: '2rem 0' }}>
            <img
              src="/illustrations/ai.webp"
              alt="key feature 3"
              style={{
                transform: 'scale(1.5) translate(0%, 5%)',
              }}
            />
          </div>
          <div>
            <h3 className={styles['ai-features']}>
              {content[locale].ai.title}
            </h3>
            <p>
              {content[locale].ai.description_1}
            </p>
            <p>
              {content[locale].ai.description_2}
            </p>
          </div>
        </div>
      </section>
    </WavesWrapper>
  );
}

export default Features;
