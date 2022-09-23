import RotatingChart from '../Graph/RotatingChart';
import styles from './chartsection.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';

function ChartSection() {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <div className={`${styles['text-wrapper']} ${generics['spacing-x']}`}>
        <h2>The Tokenomics</h2>
        <p>
          Behind a real utility token, the tokenomics covers all aspects involving a coin&apos;s creation, management, and sometimes removal from a network. We break down each of these concepts below.
        </p>
      </div>
      <RotatingChart />
      <div className={styles['button-wrapper']}>
        <button type='button' className='button-blue'>Our smart contract</button>
        <button type='button' className='button-blue'>Our audit response</button>
      </div>
    </div>
  )
}

export default ChartSection