import styles from './explanation.module.scss';
import generics from '../../../styles/generics.module.scss';
import Image from 'next/image';
import Grid from '../../../public/illustrations/grid.svg';
import useStore from '../../../store/store';

function Explanation() {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''} ${generics['spacing-x']}`}>
      <div className={styles['image-wrapper']}>
        <Image src={Grid} alt="grid" />
      </div>
      <div>
        <h2>What is Personal Development</h2>
        <p>
          Personal development is a lifelong process. It is a way for people to assess their skills and qualities, consider their aims in life and set goals in order to realise and maximise their potential.
        </p>
      </div>
      <div>
        <h3>The importance of Personal Development</h3>
        <ol>
          <li>Personal growth is necessary for boosting confidence</li>
          <li>Self-development strengthens your skills</li>
          <li>It gives clarity of vision</li>
          <li>Improving yourself motivates a person</li>
          <li>It provides satisfaction</li>
          <li>It helps in career growth</li>
          <li>Essential to become happy</li>
          <li>Helps you get more opportunities</li>
          <li>Helps your talent shines</li>
          <li>Helps you in creating a positive attitude towards life</li>
        </ol>
      </div>
    </div>
  )
}

export default Explanation