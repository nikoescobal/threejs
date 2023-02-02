import Link from 'next/link';
import styles from './whoarewe.module.scss';
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

function WhoAreWe() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')

  return (
    <section
      className={`
        ${styles['main-wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
      `}
    >
      <div className={`${styles['cards-wrapper']}`}>
        {content[locale].map((item) => (
          <AlternatingGrid key={uuid} className={styles.grid}>
          {/* <div  className={styles.grid}> */}
            <div className={styles['img-wrapper']}>
              {/* <Image src={item.image} width={700} height={100} objectFit={'fill'} alt="illustration" /> */}
              {
                item.image
                  ? <img src={item.image} width={700} height={100} alt="illustration" />
                  : null
              }
            </div>
            <div className={styles['card']}>
              <h2>{item.title}</h2>
              <div dangerouslySetInnerHTML={{__html: item.body}} />
              <Link href={item.url} title={item.urlTitle}>
                <a className="button-blue">{item.button_text}{' '}<EastIcon /></a>
              </Link>
            </div>
          {/* </div> */}
          </AlternatingGrid>
        ))}
      </div>
    </section>
  );
}

export default WhoAreWe;
