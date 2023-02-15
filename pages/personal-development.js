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
import WhatCanBeAchieved from '../components/PersonalDevelopment/WhatCanBeAchieved/WhatCanBeAchieved';
import LegacyMethods from '../components/Home/LegacyMethods/LegacyMethodsList/LegacyMethods';
import PillarsOfAnUnhappyLife from '../components/PersonalDevelopment/PillarsOfAnUnhappyLife/PillarsOfAnUnhappyLife';
import LegacyApproach from '../components/Products/LegacyApproach/LegacyApproach';
import TheImpact from '../components/PersonalDevelopment/TheImpact/TheImpact';

const content = {
  en: {
    title: 'Personal Development',
    subtitle: 'The foundation of your life',
  },
  de: {
    title: 'Persönlichkeitsentwicklung',
    subtitle: '& seine Bedeutung',
  },
};

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
            src={'/nft/egyptian-pose-1.png'}
            alt="achievements"
          />
        }
        title={content[locale].title}
        subtitle={content[locale].subtitle}
      />
      {/* <Explanation /> */}
      <WhatIsPersonalDevelopment />
      <WhatCanBeAchieved />
      <LegacyApproach />
      <TheImpact />
      {/* <WavesWrapper hideBottom={true}>
      </WavesWrapper> */}
      <HealthCrisis />
      {/* <PillarsOfAnUnhappyLife /> */}
      {/* <StepsForPersonalDevelopment /> */}
    </div>
  );
}

export default PersonalDevelopment;
