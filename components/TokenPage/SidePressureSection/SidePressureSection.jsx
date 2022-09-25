import styles from './sidepressuresection.module.scss';
import generics from '../../../styles/generics.module.scss';
import MovingIcon from '@mui/icons-material/Moving';
import useStore from '../../../store/store';

function SidePressureSection() {
  const { isDarkMode } = useStore();
  
  return (
    <section className={`${styles.section} ${generics['spacing-x']} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <div className={styles['text-wrapper']}>
        <h3>A real utility token with healthy buyside pressure</h3>
        <p>
          One of our main goal is to create a real utility token with constant, non-spculative buy side
        </p>
      </div>
      <div className={`${styles['cards-wrapper']}`}>
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>Subscriptions</h4>
            <span>Possible explanation</span>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>Subscriptions</h4>
            <span>Possible explanation</span>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>Subscriptions</h4>
            <span>Possible explanation</span>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>Subscriptions</h4>
            <span>Possible explanation</span>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>Subscriptions</h4>
            <span>Possible explanation</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SidePressureSection