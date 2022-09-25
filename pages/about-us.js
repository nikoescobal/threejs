import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import About from '../components/AboutUs/About/About'
import Team from '../components/AboutUs/Team/Team'
import GenericHeader from '../components/Generic/Header/GenericHeader'
import Roadmap from '../components/Generic/Roadmap/Roadmap'
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper'
import Partners from '../components/Generic/Partners/Partners'
import FollowUs from '../components/Generic/FollowUs/FollowUs'
import Logo from '../public/logo-cropped.png'
import NewsLetter from '../components/Home/NewsLetter/NewsLetter'

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
      <WavesWrapper>
        <NewsLetter />
        {/* <Roadmap showBackground={false} /> */}
      </WavesWrapper>
      <Team />
      <Partners />
      <div style={{
        marginTop: '8rem'
      }}>
      <FollowUs />
      </div>
    </div>
  )
}

export default AboutUs