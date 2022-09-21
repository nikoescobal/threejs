import styles from './healthcrisis.module.scss';
import generics from '../../../styles/generics.module.scss';
import DonutChart from '../DonutChart/DonutChart';
import { style } from '@mui/system';
import Image from 'next/image';
import Pillar from '../../../public/illustrations/pillar.svg'

function HealthCrisis() {
  return (
    <div className={`${styles.wrapper} ${generics['spacing-x']}`}>
      <div>
        <h3>Mental health crisis across the world</h3>
        <p>
          In case you need more convincing about the severity of the mental health crisis the world is facing, here are just a few of the poignant statistics from Mental Health 2022 adult data: 
        </p>
        <div className={styles['donut-wrapper']}>
          <DonutChart />  
          <DonutChart />  
          <DonutChart />  
        </div>
        <button type='button' className='button-blue'>More about mental health crisis</button>
        <h3>The pillar of an unhappy life</h3>
        <div>
          <Image src={Pillar} alt='pillar of an unhappy life'/>
        </div>
      </div>
    </div>
  )
}

export default HealthCrisis