import { IconButton, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import useStore from '../../../store/store';
import TeamCard from '../TeamCard/TeamCard';
import content from './content';
import styles from './team.module.scss';
import { useState } from 'react';
import TeamSlider from '../TeamSlider/TeamSlider';

function MeetTheTeam() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <section className={`${!isDarkMode ? `${styles.light}` : ''} ${styles['meet-team']} spacing-x max-1920`}>
      <h2>{content[locale].title}</h2>
      <div className={styles['sliders-wrapper']}>
        <TeamSlider team={content[locale].team} offset={100} />
        <TeamSlider team={content[locale].team} offset={100} />
      </div>
      {/* <div
        className={styles['cards-wrapper']}
      >
        {
          content[locale].team.map((member) => (
            <TeamCard key={member.name} member={member} style={{
              transform: `translateX(${x}%)`
            }} />
            // <div key={member.name} style={{background: `url(${member.img}) center / cover`}}>
            //   <div className={styles['info-wrapper']}>
            //     <span>{member.name}</span>
            //     <span>{member.title}</span>
            //     <div>
            //       {member.socials.map((social) => (
            //         <a key={uuid} href={social.url} rel="noreferrer" target="_blank">{social.icon}</a>
            //       ))}
            //     </div>
            //   </div>
            // </div>
          ))
        }
      </div> */}
      {/* <Gradient style={{
        top: '75%',
        left: '0%',
        transform: 'translate(-50%, -50%)',
        width: '100%'
      }} />
      <h2>{content[locale].title}</h2>
      {isTablet && (
      <div className={`${styles['flip-cards-wrapper']}`}>
        <div className={`${styles.odd}`}>
          <FlipCard className={styles.flip} disableFlip />
          <FlipCard
            className={styles.flip} profileLink="https://www.linkedin.com/in/fabio-martinetti-054492241"
            // picture="/team/fabio.jpg"
            name="Fabio Martinetti"
          />
          <FlipCard
            className={styles.flip}
            profileLink="https://www.linkedin.com/in/dominic-haas-357125189"
            // picture="/team/dominic.jpg"
            name="Dominic Haas" />
          <FlipCard
            className={styles.flip}
            profileLink="https://www.linkedin.com/in/sasa-markovic-legacynetwork"
            // picture="/team/sasa.jpg"
            name="Sasa Markovic"
          />
          <FlipCard className={styles.flip} disableFlip />
        </div>
        <div className={`${styles.even}`}>
          <FlipCard className={styles.flip} disableFlip />
          <FlipCard
            className={styles.flip}
            profileLink="https://www.linkedin.com/in/eleftherios-romanopoulos-5a3a10243"
            // picture="/team/elef.jpg"
            name="Eleftherios Romanopoulos"
          />
          <FlipCard
            className={styles.flip}
            profileLink="https://www.linkedin.com/in/luka-petrovic-7b10b71a3/"
            // picture="/team/luka.jpg"
            name="Luka Petrovic"
          />
          <FlipCard className={styles.flip} disableFlip />
        </div>
      </div>
      )}
      <div className={styles['tablet-cards-wrapper']}>
        <div className={styles['card-item']}>Fabio Martinetti</div>
        <div className={styles['card-item']}>Dominic Haas</div>
        <div className={styles['card-item']}>Sasa Markovic</div>
        <div className={styles['card-item']}>Eleftherios Romanopoulos</div>
        <div className={styles['card-item']}>Luka Petrovic</div>
      </div> */}
    </section>
  );
}

export default MeetTheTeam;
