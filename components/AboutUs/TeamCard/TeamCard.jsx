import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import useStore from '../../../store/store';
import FlipCard from '../../FlipCard/FlipCard';
import Gradient from '../../Generic/Gradient/Gradient';
import styles from './TeamCard.module.scss';

function TeamCard({member, index, style}) {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <div
      className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`}
      data-index={index}
      style={{
        background: `url(${member.img}) center / cover`,
        ...style
        }}>
      <div className={styles['info-wrapper']}>
        <span>{member.name}</span>
        <span>{member.title}</span>
        <div className={styles['socials-wrapper']}>
          {member.socials.map((social) => (
            <a key={uuid} href={social.url} rel="noreferrer" target="_blank">{social.icon}</a>
          ))}
        </div>
        
        {/* {
          index === 0 
            ? <img src="/team/dino.png" alt="dino" className={styles['dino']} />
            : null
        } */}
      </div>
    </div>
  );
}

export default TeamCard;
