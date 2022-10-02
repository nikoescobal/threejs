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
        <div >
          <Image src={Staff} alt="" draggable="false" />
        </div>
      </Parallax>

      <div className='spacing-x max-1920'>
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
