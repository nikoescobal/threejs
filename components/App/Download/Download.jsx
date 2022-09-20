/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './download.module.scss';

function Download() {
  const { isDarkMode } = useStore();

  return (
    <section className={`${styles.section}`}>
      <h2>
        The Legacy Network app answers three essential questions for the user
      </h2>
      <h3>WHAT</h3>
      <p className="{}">
        Here, the user is told a fact, for example, that healthy self-confidence
        is important for success in various areas of life.
      </p>
      <h3>HOW</h3>
      <p>
        In the last step, the user is shown concrete steps on how to acquire
        self-confidence. The big goal is divided into small, achievable steps.
        If a step is not feasible for the user, the artificial intelligence
        offers alternatives.
      </p>
      <h3>WHY</h3>
      <p>
        Subsequently, it is explained in detail why a healthy self-confidence is
        important. Understandable correlations are shown to create an "aha
        experience".
      </p>
      <p>Our solution to the global mental health crisis</p>
      <button className={`${styles.button}`}>
        More about mental health crisis
      </button>
    </section>
  );
}

export default Download;
