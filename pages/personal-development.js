import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import GenericHeader from '../components/Generic/Header/GenericHeader'
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper'
import Explanation from '../components/PersonalDevelopment/Explanation/Explanation'
import Achievements from '../public/illustrations/Achievements.png'

function PersonalDevelopment() {
  return (
    <div>
      <Head>
        <title>Personal Development</title>
        <meta name="description" content="Legacy Network Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GenericHeader
        rightObj={<Image src={Achievements} alt="achievements" />}
        title="Personal Development"
        subtitle={'& its importance'}
      />
      <Explanation />
      <WavesWrapper hideBottom={true}>
        <h2>Mental health crisis across the world</h2>
        <p>
          In case you need more convincing about the severity of the mental health crisis the world is facing, here are just a few of the poignant statistics from Mental Health 2022 adult data: 
        </p>
      </WavesWrapper>
    </div>
  )
}

export default PersonalDevelopment