import { useMediaQuery } from '@mui/material';
import useStore from '../../../store/store';
import FlipCard from '../../FlipCard/FlipCard';
import Gradient from '../../Generic/Gradient/Gradient';
import styles from './team.module.scss';

function Team() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const { isDarkMode } = useStore();

  return (
    <section className={`${!isDarkMode ? `${styles.light}` : ''} ${styles['meet-team']}`}>
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
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} disableFlip />
        </div>
        <div className={`${styles.even}`}>
          <FlipCard className={styles.flip} disableFlip />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} disableFlip />
        </div>
        <div className={`${styles.odd}`}>
          <FlipCard className={styles.flip} disableFlip />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} disableFlip />
        </div>
        <div className={`${styles.even}`}>
          <FlipCard className={styles.flip} disableFlip />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} />
          <FlipCard className={styles.flip} disableFlip />
        </div>
      </div>
      )}
      {
        !isTablet && (
          <div className={styles['tablet-cards-wrapper']}>
            <div className={styles['card-item']}>Name</div>
            <div className={styles['card-item']}>Name</div>
            <div className={styles['card-item']}>Name</div>
            <div className={styles['card-item']}>Name</div>
            <div className={styles['card-item']}>Name</div>
            <div className={styles['card-item']}>Name</div>
            <div className={styles['card-item']}>Name</div>
            <div className={styles['card-item']}>Name</div>
            <div className={styles['card-item']}>Name</div>
          </div>
        )
      }
    </section>
  );
}

export default Team;
