/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import ClearContainer from '../../Generic/ClearContainer/ClearContainer';
import styles from './benefits.module.scss';
import generics from '../../../styles/generics.module.scss';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

function Benefits() {
  const { isDarkMode } = useStore();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [scale, setScale] = useState(1);

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
          title="Data Protection"
          to="/app"
          linkText="Read More"
          reducedPadding
        >
          <p>
            Part of our vision is to give people back control of their data.
            Legacy Network is the first technology company to use user’s data
            and psychology exclusively for them, not against them. Unlike
            various Big Data corporations, we will not monetize data and thus
            will not make our platforms available for serving ads. As we will
            not collect any personal data such as name or address, the user
            profiles cannot be assigned to a real person. A concrete data
            protection concept will be worked out during development together
            with experts.
          </p>
        </ClearContainer>
      </div>
      <div className={`${generics['alternating-rows']} max-1920`}>
        <div className={styles['img-wrapper']}>
          <img
            src="/illustrations/data-security.png"
            alt="cyber security illustration"
          />
        </div>
        <ClearContainer
          isComingSoon
          title="Cyber Security"
          to="/app"
          linkText="Read More"
          reducedPadding
        >
          <p>
            To ensure the security of our entire ecosystem, we will have several
            independent security audits performed. This concerns the token, or
            smart contract, as well as the app and all platforms. We will
            analyze past cyber-attacks on other systems and design our own
            systems to be immune to these as well as other attacks.
          </p>
        </ClearContainer>
      </div>
    </section>
  );
}

export default Benefits;
