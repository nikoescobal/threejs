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
import styles from '../components/PersonalDevelopment/personaldevelopment.module.scss';
import { useRouter } from 'next/router';
import WhatIsPersonalDevelopment from '../components/PersonalDevelopment/WhatIsPersonalDevelopment/WhatIsPersonalDevelopment';
import LegacyMethods from '../components/Home/LegacyMethods/LegacyMethodsList/LegacyMethods';

const content = {
  en: {
    title: 'Personal Development',
    subtitle: '& its importance'
  },
  de: {
    title: 'Persönlichkeitsentwicklung',
    subtitle: '& seine Bedeutung'
  }
}

function PersonalDevelopment() {
  const { locale } = useRouter();
  
  return (
    <div>
      <Head>
        <title>Personal Development</title>
        <meta name="description" content="Personal Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenericHeader
        waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
        rightObj={
          <img
            className={styles.image}
            src={Achievements.src}
            alt="achievements"
            draggable="false"
            style={{
              scale: '1.2',
              marginBottom: '1rem',
            }}
          />
        }
        title={content[locale].title}
        subtitle={content[locale].subtitle}
      />
      {/* <Explanation /> */}
      <WhatIsPersonalDevelopment />
      <LegacyMethods />
      {/* <WavesWrapper hideBottom={true}>
        <HealthCrisis />
      </WavesWrapper> */}
      {/* <StepsForPersonalDevelopment /> */}
    </div>
  );
}

export default PersonalDevelopment;
