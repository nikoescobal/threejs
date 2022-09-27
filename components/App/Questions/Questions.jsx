/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './questions.module.scss';
import { questions } from '../../Constants/AppConstants';
import Image from 'next/image';
import Staff from '../../../public/backgrounds/staff.png';

function Questions() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''} `}
    >
      <div className={styles.staff}>
        <Image src={Staff} alt="" draggable="false" />
      </div>
      <div className='spacing-x'>
        <h3>
          The Legacy Network app answers three essential questions for the user
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
        <button className={`${styles.button} button-blue`}>
          More about mental health crisis
        </button>
      </div>
    </section>
  );
}

export default Questions;
