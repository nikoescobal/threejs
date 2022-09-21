import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import GenericHeader from '../components/Generic/Header/GenericHeader'
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper'
import Explanation from '../components/PersonalDevelopment/Explanation/Explanation'
import HealthCrisis from '../components/PersonalDevelopment/HealthCrisis/HealthCrisis'
import StepsForPersonalDevelopment from '../components/PersonalDevelopment/StepsForPersonalDevelopment/StepsForPersonalDevelopment'
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
        <HealthCrisis />
      </WavesWrapper>
      <StepsForPersonalDevelopment />
    </div>
  )
}

export default PersonalDevelopment