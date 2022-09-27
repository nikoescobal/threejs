import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ClearContainer from '../components/Generic/ClearContainer/ClearContainer'
import GenericHeader from '../components/Generic/Header/GenericHeader'
import DataSecurity from '../public/illustrations/data-security.png'
import Waves from '../public/backgrounds/waves-5.png';

function Security() {
  return (
    <div>
      <Head>
        <title>Token</title>
        <meta name="description" content="Legacy Network Token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenericHeader
        waves={
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '-300px',
            rotate: '-90deg',
          }}>
            <Image
              src={Waves}
              alt=""
              draggable="false"
            />
          </div>
        }
        title={'Security'}
        subtitle={'giving people back control of their data'}
        rightObj={
            <Image
              style={{scale: '1.5'}}
              src={DataSecurity}
              alt="token"
              draggable="false"
            />
          }
        />
      <div className="security spacing-x">
        <ClearContainer>
          <h4 className="title__2">
            Data Protection
          </h4>
          <p>
            Part of our vision is to give people back control of their data.
            Legacy Network is the first technology company to use users&apos; data
            and psychology exclusively for them, not against them. Unlike various
            Big Data corporations, we will not monetize data and thus will not make
            our platforms available for serving ads. Although user profiles will be created,
            these cannot be assigned to a real person, as we will not collect any personal
            data such as name or address. In this way, users can interact with each other
            anonymously and without concern.
            Nevertheless, to ensure the security of the network, some Internet-related data
            such as the user&apos;s IP address will be collected.
            This offers the possibility, in an emergency (for example, in case of a crime
            or threat), to support the responsible investigating authorities and to exclude
            users from the network in the event of gross violations. A concrete data
            protection concept will be worked out during development together with experts.
          </p>
        </ClearContainer>
        <ClearContainer>
          <h4 className="title__2">
            Cyber Security
          </h4>
          <p>
            To ensure the security of our entire ecosystem, we will have several
            independent security audits performed. This concerns the token, or smart
            contract, as well as the app and all platforms. We will analyze past cyber-attacks
            on other systems and design our own systems to be immune to these as well as other
            attacks.
          </p>
        </ClearContainer>
      </div>
    </div>
  )
}

export default Security