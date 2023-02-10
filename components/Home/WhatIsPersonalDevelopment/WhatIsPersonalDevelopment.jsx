import Link from 'next/link';
import styles from './whatispersonaldevelopment.module.scss';
import useStore from '../../../store/store';
import content from './content';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';

function WhatIsPersonalDevelopment() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
      `}
    >
      <h2>{content[locale].title}</h2>
      <div className={`${styles['body']}`} dangerouslySetInnerHTML={{__html: content[locale].body}} />
      <Link href={"/personal-development"}>
        <a className='button-blue'>{content[locale].link} <ArrowForwardIcon /></a>
      </Link>
    </section>
  );
}

export default WhatIsPersonalDevelopment;
