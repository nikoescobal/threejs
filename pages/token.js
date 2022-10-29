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
import SidePressureSection from '../components/TokenPage/SidePressureSection/SidePressureSection';
import StakingSection from '../components/TokenPage/StakingSection/StakingSection';
import NFTSection from '../components/TokenPage/NFTSection/NFTSection';
import UtilitySection from '../components/TokenPage/UtilitySection/UtilitySection';
import Waves from '../public/backgrounds/waves-5.png';
import BlockChainBanner from '../components/TokenPage/BlockchainBanner/BlockChainBanner';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import Script from 'next/script';
import BurningRate from '../components/BurningRate/BurningRate';

function Token() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      <Head>
        <title>Token</title>
        <meta name="description" content="Legacy Network Token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
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
          title={'LGCN Token'}
          subtitle={'a multichain utility & payment token'}
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
           rightObj={isDesktop
            ? <div>
                <video style={{scale: '1.3', width: '100%'}} autoPlay loop={true} muted>
                  <source src="/videos/token3.webm"/>
                </video>
              </div>
            : <Image src={TokenImage} alt="token" draggable="false" />
            }
        />
        <TokenIntro />
        <WavesWrapper hideBottom={true}>
          <HexagonSliderSection />
          <BlockChainBanner />
          <ChartSection />
        </WavesWrapper>
        <div
          style={{
            background:
              'radial-gradient(circle farthest-side at 0% 50%, rgba(30, 79, 188, 0.05), transparent 40%)',
          }}
        >
          <SidePressureSection />
          {/* <BurningRate /> */}
          <StakingSection />
        </div>
        <NFTSection />
        <UtilitySection />
      </div>
    </>
  );
}

export default Token;
