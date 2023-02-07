import { useMediaQuery } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import TokenModel from '../components/TokenPage/TokenModel';
import TokenImage from '../public/3d/token.png';
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper';
import TokenIntro from '../components/TokenPage/TokenIntro/TokenIntro';
import HexagonSliderSection from '../components/TokenPage/HexagonSliderSection/HexagonSliderSection';
import ChartSection from '../components/TokenPage/ChartSection/ChartSection';
import SidePressureSectionNew from '../components/TokenPage/SidePressureSectionNew/SidePressureSection';
// import SidePressureSection from '../components/TokenPage/SidePressureSection/SidePressureSection';
// import StakingSection from '../components/TokenPage/StakingSection/StakingSection';
import StakingSection from '../components/TokenPage/StakingSectionNew/StakingSection';
// import NFTSection from '../components/TokenPage/NFTSection/NFTSection';
import NFTSection from '../components/TokenPage/NFTSectionNew/NFTSection';
// import UtilitySection from '../components/TokenPage/UtilitySection/UtilitySection';
import UtilitySectionNew from '../components/TokenPage/UtilitySectionNew/UtilitySection';
import Waves from '../public/backgrounds/waves-5.png';
import BlockChainBanner from '../components/TokenPage/BlockchainBanner/BlockChainBanner';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import Script from 'next/script';
// import BurningRate from '../components/BurningRate/BurningRate';
import BurningRate from '../components/BurningRateNew/BurningRate';
import styles from '../components/TokenPage/TokenIntro/token_intro.module.scss';
import { useRouter } from 'next/router';

const content = {
  en: {
    subtitle: 'a multichain utility & payment token',
  },
  de: {
    subtitle: 'Ein Multi Chain Utility & Zahlungstoken',
  },
};

function Token() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>Token</title>
        <meta name="description" content="Legacy Token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <GenericHeader
          waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
          title={'Legacy Token'}
          subtitle={content[locale].subtitle}
          // rightObj={
          //   isDesktop ? (
          //     <TokenModel />
          //   ) : (
          //     <img
          //       style={{ scale: '1.4', transform: 'translateX(-16px)' }}
          //       src={TokenImage.src}
          //       alt="token"
          //       draggable="false"
          //     />
          //   )
          // }
          rightObj={
            isDesktop ? (
              <div>
                <video
                  style={{ scale: '1.3', width: '100%' }}
                  autoPlay
                  loop={true}
                  muted
                >
                  <source src="/videos/token3.webm" />
                </video>
              </div>
            ) : (
              <Image src={TokenImage} alt="token" draggable="false" />
            )
          }
        />
        <TokenIntro />
        <UtilitySectionNew />

        {/* <WavesWrapper hideBottom={true}>
          <HexagonSliderSection />
          <BlockChainBanner />
          <ChartSection />
        </WavesWrapper> */}
        <div
          style={{
            background:
              'radial-gradient(circle farthest-side at 0% 50%, rgba(30, 79, 188, 0.05), transparent 40%)',
          }}
        >
          {/* <SidePressureSection /> */}
          <SidePressureSectionNew />
          {/* <BurningRate /> */}
          <BurningRate />
          <StakingSection />
        </div>

        <NFTSection />
        {/* <UtilitySection /> */}
      </div>
    </>
  );
}

export default Token;
