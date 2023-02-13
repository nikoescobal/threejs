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
import AboutUsDark from '../public/backgrounds/about-us-dark.png';
import AboutUsLight from '../public/backgrounds/about-us-light.png';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
import Waves from '../public/backgrounds/waves-5.png';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import useStore from '../store/store';
import FAQ from '../components/AboutUs/FAQ/FAQ';
import { useRouter } from 'next/router';
import PartnersNew from '../components/Generic/PartnersNew/Partners';
import MeetTheTeam from '../components/AboutUs/MeetTheTeam/Team';
import WhyLegacyNetwork from '../components/PersonalDevelopment/WhyLegacyNetwork/WhyLegacyNetwork';
import Gallery from '../components/PersonalDevelopment/Gallery/Gallery';
import AdvisoryBoard from '../components/PersonalDevelopment/AdvisoryBoard/AdvisoryBoard';

const content = {
  en: {
    title: 'About Us',
    subtitle: 'We are a cutting-edge personal development company utilizing the latest technology such as blockchain and AI. Our diverse team specialize in product design and delivery, utilizing both design thinking and agile methodologies to bring about meaningful change for our clients.',
  },
  de: {
    title: 'Über uns',
    subtitle: '& UNSER ZIEL',
  }
}

function AboutUs() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Legacy Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['header-wrapper']}>
        <GenericHeader
          className={styles.header}
          waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
          rightObj={
            <div
              style={{
                scale: '1.1',
              }}
            >
              <img
                src="/logo-cropped.webp"
                alt="logo"
                draggable="false"
              />
              {/* {isDarkMode ? (
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
              )} */}
            </div>
          }
          title={content[locale].title}
          subtitle={content[locale].subtitle}
        />
      </div>
      {/* <About /> */}
      {/* <WavesWrapper hideBottom>
        <NewsLetter />
      </WavesWrapper> */}
      {/* <Team /> */}
      <MeetTheTeam />
      <WhyLegacyNetwork />
      <Gallery />
      {/* <AdvisoryBoard /> */}
      {/* <PartnersNew /> */}
      <FAQ />
      <Partners />
      <FollowUs />
    </div>
  );
}

export default AboutUs;
