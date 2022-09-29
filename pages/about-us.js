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
import QuestionMark from '../public/backgrounds/question-mark.svg'
import NewsLetter from '../components/Home/NewsLetter/NewsLetter'
import Waves from '../public/backgrounds/waves-5.png';
import WaveLines from '../components/Generic/WaveLines/WaveLines'

function AboutUs() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Legacy Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GenericHeader
        waves={
          <WaveLines style={{
            top: '-20%',
            left: '-300px',
            rotate: '-90deg',
          }} />
        }
        rightObj={<img src={QuestionMark.src} alt="logo" draggable="false" style={{scale: '1.5'}} />}
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