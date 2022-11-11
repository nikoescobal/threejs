import styles from './token_intro.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';

function TokenIntro() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`
      ${styles.wrapper}
      ${generics['spacing-x']}
      ${!isDarkMode ? `${styles.light}` : ''}
      `}
    >
      <div>
        <h3>What is Legacy Token (LGCT)?</h3>
        <p>
          Legacy Token (LGCT) is a multichain utility and payment token which
          allows users to get the most out of the Legacy Network ecosystem.
        </p>
      </div>
    </section>
  );
}

export default TokenIntro;
