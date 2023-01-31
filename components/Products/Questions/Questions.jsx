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
        {isTablet ? (
          <Parallax speed={90} className={`${styles.staff}`}>
            <div>
              <Image src={Staff} alt="staff" draggable="false" />
            </div>
          </Parallax>
        ) : (
          <div className={styles['staff']}>
            <Image className="" src={Staff} alt="staff" draggable="false" />
          </div>
        )}
        <div className={styles.wrapper}>
          <h3>
            {questions[locale].title}
          </h3>
          {questions[locale].list.map((question, index) => (
            <div key={index} className={styles.question}>
              <h4>{question.title}</h4>
              <p>{question.text}</p>
            </div>
          ))}
          <div>
            <h4 className={styles.h3}>{questions[locale].mental_health}</h4>
            <p className={styles.p}>
              {questions[locale].mental_description}
            </p>
          </div>
          <div>
            <ComingSoon className={styles['btn-wrapper']}>
              {questions[locale].more}
            </ComingSoon>
            {/* <button className="button-blue">
              More on mental health crisis
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
