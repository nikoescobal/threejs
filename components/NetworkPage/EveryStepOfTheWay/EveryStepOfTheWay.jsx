import styles from './EveryStepOfTheWay.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

function EveryStepOfTheWay() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
        max-1920
      `}
    >
      <span>{content[locale].surtitle}</span>
      <h2>{content[locale].title}</h2>
      <p>{content[locale].description}</p>
      <img src='/mockups/network-step-of-the-way.webp' alt='Board mockup' />
    </section>
  );
}

export default EveryStepOfTheWay;
