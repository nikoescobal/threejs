import useStore from '../../../store/store';
import styles from './AdvisoryBoardCard.module.scss';

function AdvisoryBoardCard({member}) {
  const { isDarkMode } = useStore();
  const { uuid } = require('crypto')

  return (
    <div className={`
      ${styles['wrapper']}
      ${!isDarkMode ? `${styles['light']}` : ''}
    `}>
      <div className={styles['img-wrapper']}>
        <img src={member.picture} alt={member.name} />
      </div>
      <span className={styles.name}>{member.name}</span>
      <span className={styles.role}>{member.role}</span>
      <div className={styles['socials-wrapper']}>
        {
          member.socials.map((social) => (
            <a key={uuid} href={social.url} rel="noreferrer" target="_blank">
              {social.icon}
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default AdvisoryBoardCard;
