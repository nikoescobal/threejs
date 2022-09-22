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

function Features() {
  const { isDarkMode } = useStore();

  return (
    <section className={`${styles.section}`}>
      <h2>Key Features of the personal development App </h2>
      <div>
        {<Image src={kf4} alt="key feature 4" />}
        <h3>Education Area</h3>
        <p>
          In the education area of the app, the user can choose from various
          categories. Each category contains content, which can be text, video,
          animation, podcast (audio content) and other forms. Each category has
          its own level system. The AI uses targeted questions, user behavior,
          feedback app tracking and other parameters to decide how advanced the
          user already is and which content is relevant to them. This makes the
          system usable for everyone, whether beginner or professional. The
          content consists of both a theoretical and a practical part.
        </p>
        <button>See Details</button>
      </div>

      <div className={`${styles.health}`}>
        {<Image className={`${styles.img}`} src={kf2} alt="key feature 2" />}
        <h3>Health Area</h3>
        <p>
          The health area of the final app version is expected to include the
          following features:
        </p>
        <div>
          <div className={`${styles.sleep}`}>
            {<Image src={halfmoon} alt="half moon" />}
            <div>
              <h4>Detailed sleep analysis</h4>
              <p>
                Duration of falling asleep, total sleep duration, quality of
                sleep, sounds during sleep, etc.
              </p>
            </div>
          </div>
          <div>
            <h4>Detailed nutritional analysis</h4>
            <p>
              Macro and micronutrients consumed, calories consumed,
              identification of deficiencies, individual goals, etc.
            </p>
          </div>
          <div>
            <h4>Time Management & Routine Planning</h4>
            <p>
              Macro and micronutrients consumed, calories consumed,
              identification of deficiencies, individual goals, etc.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>
          The first artifical intelligence designed to analyze human behavior
        </h3>
        <p>
          Our artificial intelligence evaluates the collected information about
          the user and utilizes it to deliver individual and effective
          solutions. Over time, the AI turns into a personal coach which knows
          more about the user, than he knows about himself.
        </p>
        <p>
          It will be able to find errors in a person’s behavior, thinking and
          habit which lead to failure in certain important life areas. By
          systematically adjusting these things, the user will experience a
          great improvement in one’s life quality.
        </p>
        <button>More about in-app features</button>
      </div>
    </section>
  );
}

export default Features;
