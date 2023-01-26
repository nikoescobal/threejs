/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import ClearContainer from '../../Generic/ClearContainer/ClearContainer';
import styles from './dataprotection.module.scss';
import generics from '../../../styles/generics.module.scss';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';
import translations from '../../../language';

function DataProtection() {
  const { isDarkMode } = useStore();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [scale, setScale] = useState(1);
  const { locale } = useRouter();

  useEffect(() => {
    if (isDesktop) {
      setScale(1.5);
    } else {
      setScale(1);
    }
  }, [isDesktop]);

  return (
    <section
      className={`
      ${styles['app-wrapper']}
      ${generics['alternating-rows-wrapper']}
      ${!isDarkMode ? `${styles['light']}` : ''}
      spacing-x`}
    >
      <div className={`${generics['alternating-rows']} max-1920`}>
        <div className={styles['img-wrapper']}>
          <img
            src="/illustrations/data-protection.png"
            alt="data protection illustration"
          />
        </div>
        <ClearContainer
          isComingSoon
          title={content[locale].title}
          to="/app"
          linkText={translations.read_more[locale]}
          reducedPadding
        >
          <p>
            {content[locale].description}
          </p>
        </ClearContainer>
      </div>
    </section>
  );
}

export default DataProtection;
