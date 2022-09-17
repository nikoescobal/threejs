import { useMediaQuery } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import GenericHeader from '../components/Generic/Header/GenericHeader'
import TokenModel from '../components/TokenPage/TokenModel'
import TokenImage from '../public/illustrations/token-3d.png'
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper'
import TokenIntro from '../components/TokenPage/TokenIntro/TokenIntro'
import HexagonSliderSection from '../components/TokenPage/HexagonSliderSection/HexagonSliderSection'
import ChartSection from '../components/TokenPage/ChartSection/ChartSection'
import SidePressureSection from '../components/TokenPage/SidePressureSection/SidePressureSection'

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
        <GenericHeader title={'LGCN Token'} subtitle={'a multichain utility & payment token'} rightObj={isDesktop ? <TokenModel /> : <Image src={TokenImage} alt="token" />} />
        <TokenIntro />
        <WavesWrapper hideBottom={true}>
          <HexagonSliderSection />
          <ChartSection />
        </WavesWrapper>
        <SidePressureSection />
      </div>
    </>
  )
}

export default Token;