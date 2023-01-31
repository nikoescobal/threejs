import Link from 'next/link';
import styles from './whatispersonaldevelopment.module.scss';
import generics from '../../../styles/generics.module.scss';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useStore from '../../../store/store';
import content from './content';
import Circles from '../../Generic/Circles/Circles';
import { useRouter } from 'next/router';
import translations from '../../../language';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';

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
    </section>
  );
}

export default WhatIsPersonalDevelopment;
