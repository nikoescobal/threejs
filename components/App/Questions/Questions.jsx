/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './questions.module.scss';
import { questions } from './content';
import Image from 'next/image';
import Staff from '../../../public/backgrounds/staff.png';
import { Parallax } from 'react-scroll-parallax';

function Questions() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <Parallax speed={30} className={`${styles.staff} max-1920`}>
        <div>
          <Image src={Staff} alt="" draggable="false" />
        </div>
      </Parallax>

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
          <div className={`${styles.solution}`}>
            Our solution to the global mental health crisis
          </div>
          <div>
            <button className="button-blue">
              More on mental health crisis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
