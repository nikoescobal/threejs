/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './questions.module.scss';
import { questions } from './content';
import Image from 'next/image';
import Staff from '../../../public/backgrounds/staff.webp';
import { Parallax } from 'react-scroll-parallax';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

function Questions() {
  const { isDarkMode } = useStore();
  const isTablet = useMediaQuery('(min-width: 768px');
  const { locale } = useRouter();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <div className={`${styles['spacing-y']} spacing-x max-1920`}>
        <div className={styles.wrapper}>
          <h2 className={styles['main-title']}>{questions[locale].title}</h2>
          <div className={styles['questions-wrapper']}>
            {questions[locale].list.map((question, index) => (
              <div key={index} className={styles.question}>
                <h3 className={styles['sub-title']}>{question.title}</h3>
                <p>{question.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
