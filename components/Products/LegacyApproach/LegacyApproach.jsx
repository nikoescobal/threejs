import styles from './legacyapproach.module.scss';
import Image from 'next/image';
import useStore from '../../../store/store';
import Link from 'next/link';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import { useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';
import translations from '../../../language';
import Card from '../../Generic/Card/Card';

function LegacyApproach() {
  const { isDarkMode } = useStore();
  const [error, setError] = useState(false);
  const { locale } = useRouter();

  return (
    <div
      className={`${styles.wrapper} ${
        !isDarkMode ? `${styles.light}` : ''
      }
      spacing-y
      spacing-x
      max-1920`}
    >
      <div className={`${styles['cards-wrapper']}`}>
        {content[locale].map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <ComingSoon style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          {translations['learn_more'][locale]}
        </ComingSoon>
      </div>
    </div>
  );
}

export default LegacyApproach;
