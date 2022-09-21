import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import GenericHeader from '../components/Generic/Header/GenericHeader'
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
    </div>
  )
}

export default AboutUs