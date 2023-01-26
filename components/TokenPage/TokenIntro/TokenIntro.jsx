import styles from './token_intro.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';

function TokenIntro() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();

  return (
    <section
      className={`
      ${styles.wrapper}
      ${generics['spacing-x']}
      ${!isDarkMode ? `${styles.light}` : ''}
      `}
    >
      <div>
        <h3>{content[locale].title}</h3>
        <p>
          {content[locale].subtitle}
        </p>
      </div>
    </section>
  );
}

export default TokenIntro;
