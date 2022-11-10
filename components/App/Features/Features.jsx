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

function Features() {
  const { isDarkMode } = useStore((state) => state);

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
          Key Features of the Legacy Network App
        </h3>

        <div className={`${styles.content}`}>
          <div className={`${styles.imgwrapper}`}>
            <img src="/features/kf4.png" alt="key feature 1" />
          </div>
          <div style={{
            position: 'relative'
          }}>
            <h3>Education Area</h3>
            <p>
              In the education area of the app, the user can choose from various
              categories. Each category contains content, which can be text,
              video, animation, podcast (audio content) and other forms. Each
              category has its own level system. The AI uses targeted questions,
              user behavior, feedback app tracking and other parameters to
              decide how advanced the user already is and which content is
              relevant to them. This makes the system usable for everyone,
              whether beginner or professional. The content consists of both a
              theoretical and a practical part.
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
            }}>Health Area</h3>
            <p style={{
              position: 'relative',
              zIndex: '1'
            }}>
              The health area of the final app version is expected to include
              the following features:
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
                <h4>Detailed sleep analysis</h4>
                <p>
                  Duration of falling asleep, total sleep duration, quality of
                  sleep, sounds during sleep, etc.
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
                <h4>Detailed nutritional analysis</h4>
                <p>
                  Macro and micronutrients consumed, calories consumed,
                  identification of deficiencies, individual goals, etc.
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
                <h4>Time Management & Routine Planning</h4>
                <p>
                  Macro and micronutrients consumed, calories consumed,
                  identification of deficiencies, individual goals, etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.content}`}>
          <div className={`${styles.imgwrapper}`} style={{ padding: '2rem 0' }}>
            <img
              src="/illustrations/ai.png"
              alt="key feature 3"
              style={{
                transform: 'scale(1.5) translate(0%, 5%)',
              }}
            />
          </div>
          <div>
            <h3 className={styles['ai-features']}>
              The first artifical intelligence designed to analyze human
              behavior
            </h3>
            <p>
              Our artificial intelligence evaluates the collected information
              about the user and utilizes it to deliver individual and effective
              solutions. Over time, the AI turns into a personal coach which
              knows more about the user, than he knows about himself.
            </p>
            <p>
              It will be able to find errors in a person’s behavior, thinking
              and habit which lead to failure in certain important life areas.
              By systematically adjusting these things, the user will experience
              a great improvement in one’s life quality.
            </p>
          </div>
        </div>
      </section>
    </WavesWrapper>
  );
}

export default Features;
