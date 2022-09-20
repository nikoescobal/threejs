/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './questions.module.scss';
import { questions } from '../../Constants/Constants.js';

function Questions() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.title}</h3>
          <p>{question.text}</p>
        </div>
      ))}
      <span>Our solution to the global mental health crisis</span>
      <button className={`${styles.button}`}>
        More about mental health crisis
      </button>
    </section>
  );
}

export default Questions;
