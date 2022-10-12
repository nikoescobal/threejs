import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper';
import Explanation from '../components/PersonalDevelopment/Explanation/Explanation';
import HealthCrisis from '../components/PersonalDevelopment/HealthCrisis/HealthCrisis';
import StepsForPersonalDevelopment from '../components/PersonalDevelopment/StepsForPersonalDevelopment/StepsForPersonalDevelopment';
import Achievements from '../public/illustrations/Achievements.png';
import Waves from '../public/backgrounds/waves-5.png';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import Script from 'next/script';

function PersonalDevelopment() {
  return (
    <div>
      <Head>
        <title>Personal Development</title>
        <meta name="description" content="Personal Development" />
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
      <GenericHeader
        waves={
          <WaveLines
            style={{
              top: '-70%',
              left: '-700px',
              rotate: '-90deg',
            }}
          />
        }
        rightObj={
          <img
            src={Achievements.src}
            alt="achievements"
            draggable="false"
            style={{
              scale: '1.2',
              marginBottom: '1rem',
            }}
          />
        }
        title="Personal Development"
        subtitle={'& its importance'}
      />
      <Explanation />
      <WavesWrapper hideBottom={true}>
        <HealthCrisis />
      </WavesWrapper>
      {/* <StepsForPersonalDevelopment /> */}
    </div>
  );
}

export default PersonalDevelopment;
