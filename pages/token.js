import { useMediaQuery } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import GenericHeader from '../components/Generic/Header/GenericHeader'
import TokenModel from '../components/TokenPage/TokenModel'
import TokenImage from '../public/illustrations/token-3d.png'

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
        <GenericHeader title={'LGCN Token'} subtitle={'a multichain utility & payment token'} rightObj={isDesktop ? <TokenModel /> : <Image src={TokenImage} />} />
      </div>
    </>
  )
}

export default Token;