import styles from './token_intro.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';

function TokenIntro() {
  const { isDarkMode } = useStore();

  return (
    <section className={`
      ${styles.wrapper}
      ${generics['spacing-x']}
      ${!isDarkMode ? `${styles.light}` : ''}
      `}>
      <div>
        <h3>What is LGCN?</h3>
        <p>
          LGCN is a multichain utility token that allows users to get the most out of the Legacy Network ecosystem. With a supply of 72,000,000. The LGCN Token powers the economy across the network of games built on the Legacy Network app.
        </p>
      </div>
    </section>
  )
}

export default TokenIntro