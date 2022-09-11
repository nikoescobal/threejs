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

function PageSlider() {
  return (
    <section className={`${generics['spacing-x']}`}>
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
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide className={`${styles['card']}`}>
            <div className="">
              <h4>ABOUT US</h4>
              <p>
                Legacy Network is an international technology company based in Switzerland.
                Our mission is to improve people&apos;s lives by developing
                innovative technology...
              </p>
              <Link href="/about-us">LEARN MORE</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles['card']}`}>
            <div className="">
              <h4>Personal Development</h4>
              <p>
                Personal development is about gaining a deep understanding of our own psyche
                as well as human nature in general. The goal is to find harmful traits in
                ourselves and replace them step by step with more effective traits.
              </p>
              <Link href="/personal-development">LEARN MORE</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles['card']}`}>
            <div className="swipe-item">
              <h4>LEGACY NETWORK APP</h4>
              <p>
                Our artificial intelligence evaluates information about the user
                and utilizes it to deliver individual and effective solutions. Over time, the
                AI turns into a personal coach which knows more about the user, than he knows
                about himself.
              </p>
              <Link href="/app">LEARN MORE</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles['card']}`}>
            <div className="swipe-item">
              <h4>Legacy Network Token</h4>
              <p>
                The Legacy Network Token (LGCN) is a multichain utility and payment token.
                Its purpose is to encourage users to use our ecosystem and actively contribute
                to its growth.
              </p>
              <Link href="/token">LEARN MORE</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles['card']}`}>
            <div className="swipe-item">
              <h4>Security</h4>
              <p>
                Legacy Network is the first technology company to use users&apos; data
                and psychology exclusively for them, not against them. Unlike various Big
                Data corporations, we will not monetize data and thus will not make our
                platforms available for serving ads.
              </p>
              <Link href="/security">LEARN MORE</Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default PageSlider