import Head from 'next/head';
import Image from 'next/image';
import ClearContainer from '../components/Generic/ClearContainer/ClearContainer';
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
import App from '../components/Home/App/App';
import Header from '../components/Home/Header';
import PageSlider from '../components/Home/PageSlider/PageSlider';
import HomeNavbar from '../components/Navbar/Navbar';
import generics from '../styles/generics.module.scss';
import styles from '../styles/Home.module.scss';
import Roadmap from '../components/Generic/Roadmap/Roadmap';
import Partners from '../components/Generic/Partners/Partners';
import Map from '../components/Home/Map/Map';
import FollowUs from '../components/Generic/FollowUs/FollowUs';
import CardSection from '../components/Home/CardSection/CardSection';
import { Parallax } from 'react-scroll-parallax';
import Hammer from '../public/backgrounds/hammer.png';
import Gradient from '../public/backgrounds/gradient.png';
import useStore from '../store/store';
import { useMediaQuery } from '@mui/material';
import Script from 'next/script';

export default function Home() {
  const { isDarkMode } = useStore();
  const isTablet = useMediaQuery('(min-width: 768px');

  return (
    <div
      className={`${styles.content} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <Head>
        <title>Legacy Network</title>
        <meta name="description" content="The World's Most Innovative Personal Development App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
      `}
      </Script>

      <div className={`${styles['hammer-wrapper']}`}>
        <div className="max-1920">
          {isTablet ? (
            <Parallax speed={60} className={styles['hammer']}>
              <Image className="" src={Hammer} alt="hammer" draggable="false" />
            </Parallax>
          ) : (
            <div className={styles['hammer']}>
              <Image className="" src={Hammer} alt="hammer" draggable="false" />
            </div>
          )}
        </div>
        <Header />
        <div
          className={`${styles['clear-container-wrapper']} ${generics['spacing-x']}`}
        >
          <ClearContainer
            title={"The world's most innovative personal development app"}
            style={{ maxWidth: '1024px' }}
            textAlign="center"
          >
            <ul
              className={styles['list-wrapper']}
              style={{
                margin: '0 auto',
                textAlign: 'center',
                padding: '0 1rem',
              }}
            >
              <li>
                <span>&#183;</span>
                Connect with likeminded people and create your own legacy
              </li>
              <li>
                <span>&#183;</span>
                Receive individual quests for your personal growth
              </li>
              <li>
                <span>&#183;</span>
                Learn about the things school didn&apos;t teach you
              </li>
              <li>
                <span>&#183;</span>
                Playfully improve all areas of your life
              </li>
            </ul>
          </ClearContainer>
        </div>
      </div>
      <WavesWrapper hideBottom>
        {/* <div className="gradient" style={{
          top: '30%',
          left: '10%'
        }}>
          <img src={Gradient.src} alt="" />
        </div> */}
        <NewsLetter />
        <CardSection />
      </WavesWrapper>
      <App />
      <Roadmap title={'Our Roadmap'} />
      <div
        style={{
          paddingTop: '16rem',
        }}
      >
        <Partners />
      </div>
      <Map />
      <FollowUs />
    </div>
  );
}
