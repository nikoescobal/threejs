import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectFade, Navigation, Pagination, Autoplay,
} from 'swiper';
import Link from 'next/link';
import styles from './pageslider.module.scss'
import generics from '../../../styles/generics.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useStore from '../../../store/store';
import content from './content';

function PageSlider() {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <section className={`${generics['spacing-x']} ${!isDarkMode ? `${styles['light']}` : ''}`}>
      <div className={`${styles['cards-wrapper']}`}>
        <Swiper
          className={`${styles['fade-slider']}`}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {content.map((item) => (
            <SwiperSlide key={item.title} className={`${styles['card']}`}>
              <div className={styles.grid}>
                <h3>{item.title}</h3>
                <p>
                  {item.body}
                </p>
                <Link href={item.url}>
                  <a className="button-blue">LEARN MORE</a>
                </Link>
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PageSlider