import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Waves from '../public/backgrounds/waves-5.png';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import Script from 'next/script';
import styles from '../components/Giveaway/giveaway.module.scss';
import Chests from '../public/backgrounds/chests.png';
import generics from '../styles/generics.module.scss';
import { useState } from 'react';

function Giveaway() {
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    saveEmail(email);
  };

  const data = [
    {
      img: '/icons/signup.svg',
      title: 'Signup Now',
      text: "Sign up now to get your personal referral code and You'll be entered into our giveaway!.",
    },
    {
      img: '/icons/megaphone.svg',
      title: 'Invite Friends - They Win & You Win',
      text: "Help us out by telling friends. If they win we'll give YOU the same prize. ",
    },
    {
      img: '/icons/trophy.svg',
      title: "We'll Announce Winners",
      text: "When the contest is over we'll announce the winners and distribute any prizes and rewards.",
    },
  ];

  return (
    <div className={styles['container']}>
      <Head>
        <title>Token Giveaway</title>
        <meta name="description" content="Legacy Network Token Giveaway" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
      `}
      </Script>

      <section className={styles['giveaway-top']}>
        <div className={styles['img-wrapper']}>
          <img src={Chests.src} alt="Chests" />
        </div>
        <div className={styles['title-wrapper']}>
          <h4>Win 5,000,000 USD</h4>
          <p>
            Earn extra entries by telling friends, making purchases or following
            us!
          </p>
        </div>

        <form className={styles['form-wrapper']} onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            id=""
          />
          <button type="submit" className="button-blue">
            Enter giveaway
          </button>
        </form>
        <p>* We need this information to contact you if you win *</p>
      </section>
      <section className={styles['giveaway-mid']}>
        <h4 className="title__2">You have:</h4>
        <div className={styles['tracker']}>
          <h2>0</h2>
          <h2>Entries</h2>
        </div>

        <div className={styles['entries-container']}>
          <div>
            <h4>Share, Follow and Climb</h4>
            <p>
              Earn points by taking actions below and track your progress by
              bookmarking this page.
            </p>
          </div>
          <div className={styles['entries-style']}>
            <h5>Get people to join with your referral code</h5>
            <p>1 Entry</p>
          </div>
          <div className={styles['entries-style']}>
            <h5>Follow us on Twitter</h5>
            <p>2 Entries</p>
          </div>
          <div className={styles['entries-style']}>
            <h5>Follow us on Instagram</h5>
            <p>2 Entries</p>
          </div>
          <p>Giveaway Rules & Terms</p>
        </div>
      </section>
      <section className={styles['giveaway-bottom']}>
        <div className={styles['entries-bottom']}>
          <h3>How to earn entries</h3>
          <p>
            Tell some friends & take action below to earn more entries that
            increase your odds of winning!{' '}
          </p>
        </div>
        <div className={`${styles.grid} `}>
          {data.map((item) => (
            <div className={styles['entries']} key={item.text}>
              <div className={styles['icon-wrapper']}>
                <img src={item.img} alt="giveaway icons" />
              </div>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Giveaway;
