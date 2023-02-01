import Link from 'next/link';
import styles from './pillarsofanunhappylife.module.scss';
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
import AlternatingGrid from '../../Generic/AlternatingGrid/AlternatingGrid';

function PillarsOfAnUnhappyLife() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')

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
      <p>{content[locale].description}</p>
      <div className={styles['row-wrapper']}>
        {
          content[locale].list.map((row) => (
            <div key={uuid} className={styles.row}>
              {row.map((item) => (
                <span key={uuid}>{item}</span>
              ))}
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default PillarsOfAnUnhappyLife;
