import styles from './explanation.module.scss';
import generics from '../../../styles/generics.module.scss';
import Image from 'next/image';
import Shield from '../../../public/backgrounds/shield.png';
import useStore from '../../../store/store';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from '@mui/material';

function Explanation() {
  const { isDarkMode } = useStore();
  const isTablet = useMediaQuery('(min-width: 768px');

  return (
    <div
      className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''} ${
        generics['spacing-x']
      }`}
    >
      {/* <div className={styles['image-wrapper']}>
        <Image src={Shield} alt="shield" />
      </div> */}
      <div className="max-1920">
        {isTablet ? (
          <Parallax speed={30} className={`${styles.shield} max-1920`}>
            <div>
              <Image src={Shield} alt="shield" draggable="false" />
            </div>
          </Parallax>
        ) : (
          <div className={styles['shield']}>
            <Image src={Shield} alt="shield" draggable="false" />
          </div>
        )}
      </div>

      <div className={`max-1920`}>
        <h3>What is personal development about?</h3>
        <p>
          Personal development is about gaining a deep understanding of our own
          psyche as well as human nature in general. The goal is to find harmful
          traits in ourselves, understand how they prevent us from succeeding,
          and replace them step by step with more effective traits. During this
          developmental journey, we can find ourselves, overcome our fears and
          weaknesses, develop life-changing skills and unlock our full
          potential.
        </p>
      </div>
      <div style={{ marginBottom: '1.5rem' }} className={`max-1920`}>
        <h3>Why is it important?</h3>
        <p>
          We humans tend to believe that we don&apos;t have much control over
          our destiny. We think that our potential is as limited as our
          possibilities are. In reality, these beliefs are an illusion. Our
          success/happiness is a direct reflection of our personality and our
          personality is a direct reflection of our individual programming.
        </p>
        <p>
          This programming includes our beliefs, thoughts, habits, behavior
          patterns and our neurological conditioning. It controls everything.
          The way we approach certain challenges, how quickly we recover from
          setbacks, how we react to different situations etc. It also determines
          our level of self-confidence, self-love, resilience, assertiveness,
          discipline, emotional control, and more.
        </p>
      </div>
      <div className={`max-1920`}>
        <h3>What can be achieved? </h3>
        <ol>
          <li>
            Get to know yourself on a deeper level and gain control over your
            subconscious reactions and approaches.
          </li>
          <li>
            Learn how certain traits are connected to different outcomes and
            readjust where it’s needed.
          </li>
          <li>
            Sustainably improve all areas of your life such as career and
            finance, platonic relationships, romantic relationships, mental
            health, physical health and much more.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Explanation;
