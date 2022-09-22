/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './questions.module.scss';
import { questions } from '../../Constants/AppConstants';

function Questions() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <h2>
        The Legacy Network app answers three essential questions for the user
      </h2>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.title}</h3>
          <p>{question.text}</p>
        </div>
      ))}
      <div className={`${styles.solution}`}>
        Our solution to the global mental health crisis
      </div>
      <button className={`${styles.button}`}>
        More about mental health crisis
      </button>
    </section>
  );
}

export default Questions;
