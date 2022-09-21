import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import About from '../components/AboutUs/About/About'
import GenericHeader from '../components/Generic/Header/GenericHeader'
import Roadmap from '../components/Generic/Roadmap/Roadmap'
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper'
import Logo from '../public/logo-cropped.png'

function AboutUs() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Legacy Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GenericHeader
        rightObj={<Image src={Logo} alt="logo" />}
        title="About Us"
        subtitle={'& our goal'}
      />
      <About />
      <WavesWrapper hideBottom={true}>
        <h3 style={{textAlign: 'center'}}>Roadmap</h3>
        <Roadmap showBackground={false} />
      </WavesWrapper>
    </div>
  )
}

export default AboutUs