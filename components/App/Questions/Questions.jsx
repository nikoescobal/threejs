/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './questions.module.scss';
import { questions } from './content';
import Image from 'next/image';
import Staff from '../../../public/backgrounds/staff.png';
import { Parallax } from 'react-scroll-parallax';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import { useMediaQuery } from '@mui/material';

function Questions() {
  const { isDarkMode } = useStore();
  const isTablet = useMediaQuery('(min-width: 768px');

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <div className="max-1920">
        {isTablet ? (
          <Parallax speed={30} className={`${styles.staff} max-1920`}>
            <div>
              <Image src={Staff} alt="staff" draggable="false" />
            </div>
          </Parallax>
        ) : (
          <div className={styles['staff']}>
            <Image className="" src={Staff} alt="staff" draggable="false" />
          </div>
        )}
      </div>

      <div className={`${styles['spacing-y']} spacing-x max-1920`}>
        <div className={styles.wrapper}>
          <h3>
            The Legacy Network app answers three essential questions for the
            user
          </h3>
          {questions.map((question, index) => (
            <div key={index} className={styles.question}>
              <h4>{question.title}</h4>
              <p>{question.text}</p>
            </div>
          ))}
          <div>
            <h4 className={styles.h3}>What is mental health crisis?</h4>
            <p className={styles.p}>
              A mental health crisis is any situation in which a person's
              actions, feelings, and behaviors can lead to them hurting
              themselves or others, and/or put them at risk of being unable to
              care for themselves or function in the community in a healthy
              manner.
            </p>
          </div>
          <div>
            <ComingSoon className={styles['btn-wrapper']}>
              More on mental health crisis
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
