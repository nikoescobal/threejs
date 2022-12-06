import { useMediaQuery } from '@mui/material';
import useStore from '../../../store/store';
import FlipCard from '../../FlipCard/FlipCard';
import Gradient from '../../Generic/Gradient/Gradient';
import styles from './team.module.scss';

function Team() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const { isDarkMode } = useStore();

  return (
    <section className={`${!isDarkMode ? `${styles.light}` : ''} ${styles['meet-team']} max-1920`}>
      <Gradient style={{
        top: '75%',
        left: '0%',
        transform: 'translate(-50%, -50%)',
        width: '100%'
      }} />
      <h2>The Team</h2>
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
      </div>
    </section>
  );
}

export default Team;
