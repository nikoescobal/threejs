import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectFlip, Navigation, Pagination, Autoplay,
} from 'swiper';
import Link from 'next/link';
import styles from './pageslider.module.scss'
import generics from '../../../styles/generics.module.scss'
import 'swiper/css';
import "swiper/css/effect-flip";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useStore from '../../../store/store';
import content from './content';
import Circles from '../../../public/backgrounds/circles.svg'
import Image from 'next/image';

function PageSlider() {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <section className={`${styles['main-wrapper']} ${generics['spacing-x']} ${!isDarkMode ? `${styles['light']}` : ''}`}>
      <div className={styles['circles-wrapper']}>
        <Image src={Circles} alt="" />
      </div>
      
      <div className={`${styles['cards-wrapper']}`}>
        <Swiper
          className={`${styles['fade-slider']}`}
          effect={"flip"}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFlip, Navigation, Pagination]}
        >
          {content.map((item) => (
            <SwiperSlide key={item.title} className={`${styles['card']}`}>
              <div className={styles.grid}>
                <h3>{item.title}</h3>
                <p>
                  {item.body}
                </p>
                <div className={styles['link-wrapper']}>
                  <Link href={item.url}>
                    <a className="button-blue">Learn more</a>
                  </Link>
                </div>
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PageSlider