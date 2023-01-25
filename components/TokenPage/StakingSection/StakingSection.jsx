import styles from './stakingsection.module.scss';
import generics from '../../../styles/generics.module.scss';

import Image from 'next/image';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';

function StakingSection() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto')

  return (
    <div
      className={`${styles['staking-section']} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
      <h3>{content[locale].title}</h3>
      <div className={`${styles['steps-wrapper']}`}>
        {content[locale].steps.map((step, index) => (
          <div key={uuid} className={`${styles['step']}`}>
            <p>{content[locale].step_translation} {index + 1}:</p>
            <p>{step.title}</p>
            <div>
              <Image src={step.img} alt="step icon" />
            </div>
            <p>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StakingSection;
