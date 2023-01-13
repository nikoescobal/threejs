import Link from 'next/link';
import styles from './herotext.module.scss';
import content from './content';
import useStore from '../../../store/store';
import generics from '../../../styles/generics.module.scss';

function HeroText() {
  const { isDarkMode } = useStore((state) => state);

  return (
    <section
      className={`${styles['main-wrapper']} ${
        !isDarkMode ? `${styles['light']}` : ''
      }`}
    >
      <div className={`${styles['wrapper']} ${generics['spacing-x']}`}>
        <h3 className={`${styles['spacing-header']}`}>Who are we?</h3>
        <p>
          We are a technology company based between Switzerland and
          Lichtenstein.
        </p>
        <p className={`${styles['spacing-p']}`}>
          Our aim is to challenge users, through a interactive game-based
          journey, and enhance their mental clarity, awareness & overall
          well-being. We aim to provide them with the tools & knowledge they
          need to bolster productivity.
        </p>
        <p>
          We aim to provide them with the tools & knowledge they need to bolster
          productivity.
        </p>

        <div className={`${styles['link-wrapper']}`}>
          <Link href="/about-us">
            <a className="button-blue">Read more &#8594;</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroText;
