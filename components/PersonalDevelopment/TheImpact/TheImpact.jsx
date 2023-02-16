import styles from './theimpact.module.scss';
import useStore from '../../../store/store';
import Link from 'next/link';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import { useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';
import translations from '../../../language';
import CardNoImage from '../../Generic/CardNoImage/CardNoImage';

function TheImpact({ className, title, description }) {
  const { isDarkMode } = useStore();
  const [error, setError] = useState(false);
  const { locale } = useRouter();

  return (
    <div
      className={`${styles.wrapper} ${className} ${
        !isDarkMode ? `${styles.light}` : ''
      }
      spacing-y
      spacing-x
      max-1920`}
    >
      <div className={styles['heading']}>
        <h2>The Impact</h2>
        <p>
          With practice, users can improve all aspects of life - from work to
          relationships and mental wellbeing.
        </p>
      </div>

      <div className={`${styles['cards-wrapper']} `}>
        {content[locale].map((card) => (
          <CardNoImage key={card.title} card={card} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          // marginTop: '2rem',
          position: 'relative',
          zIndex: '1',
        }}
      ></div>
    </div>
  );
}

export default TheImpact;
