import Head from 'next/head';
import styles from '../styles/about-us.module.scss';
import Image from 'next/image';
import React from 'react';
import About from '../components/AboutUs/About/About';
import Team from '../components/AboutUs/Team/Team';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import Roadmap from '../components/Generic/Roadmap/Roadmap';
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper';
import Partners from '../components/Generic/Partners/Partners';
import FollowUs from '../components/Generic/FollowUs/FollowUs';
// import QuestionMark from '../public/backgrounds/question-mark.png';
import AboutUsDark from '../public/backgrounds/about-us-dark.png';
import AboutUsLight from '../public/backgrounds/about-us-light.png';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
import Waves from '../public/backgrounds/waves-5.png';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import useStore from '../store/store';
import Script from 'next/script';
import FAQ from '../components/AboutUs/FAQ/FAQ';

function AboutUs() {
  const { isDarkMode } = useStore();
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Legacy Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['header-wrapper']}>
        <GenericHeader
          waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
          rightObj={
            <div
              style={{
                scale: '1.1',
              }}
            >
              {isDarkMode ? (
                <img
                  src="/backgrounds/about-us-dark.png"
                  alt="logo"
                  draggable="false"
                />
              ) : (
                <img
                  src="/backgrounds/about-us-light.png"
                  alt="logo"
                  draggable="false"
                />
              )}
            </div>
          }
          title="About Us"
          subtitle={'& our goal'}
        />
      </div>
      <About />
      <WavesWrapper hideBottom>
        <NewsLetter />
        {/* <Roadmap showBackground={false} /> */}
      </WavesWrapper>
      <Team />
      <Partners />
      <FAQ />
      <div
        style={{
          marginTop: '8rem',
        }}
      >
        <FollowUs />
      </div>
    </div>
  );
}

export default AboutUs;
