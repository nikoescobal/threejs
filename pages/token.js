import { useMediaQuery } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import GenericHeader from '../components/Generic/Header/GenericHeader'
import Chart from '../components/TokenPage/Graph/Chart'
import TokenModel from '../components/TokenPage/TokenModel'
import TokenImage from '../public/illustrations/token-3d.png'
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper'
import HexagonSlider from '../components/TokenPage/HexagonSlider/HexagonSlider'

function Token() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content="Legacy Network Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <GenericHeader title={'LGCN Token'} subtitle={'a multichain utility & payment token'} rightObj={isDesktop ? <TokenModel /> : <Image src={TokenImage} alt="token" />} />
      </div>
      <WavesWrapper>
        <HexagonSlider />
        <Chart />
      </WavesWrapper>
    </>
  )
}

export default Token;