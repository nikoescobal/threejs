import styles from './healthcrisis.module.scss';
import generics from '../../../styles/generics.module.scss';
import DonutChart from '../DonutChart/DonutChart';
import { style } from '@mui/system';
import Image from 'next/image';
import Pillar from '../../../public/illustrations/pillar.png';
import useStore from '../../../store/store';
import Gradient from '../../Generic/Gradient/Gradient';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';

function HealthCrisis() {
  const { isDarkMode } = useStore();
  const series1 = [284, 265, 107, 71, 46, 20, 16, 161]
  const series2 = [300, 600]
  const label1 = ['Anxiety Disorder', 'Depression', 'Alcohol Disorder', 'Drug disorder', 'Bipolar disorder', 'Schizophrenia', 'Eating Disorder', 'Others']
  const label2 = ['Overweight', 'Heavily Overweight']
  return (
    <>
      <Gradient
        style={{
          top: '75%',
          left: '50%',
          width: '80%',
          transform: 'translate(-50%, -75%)',
        }}
      />
      <div
        className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''} ${
          generics['spacing-x']
        }`}
      >
        <div>
          <h3>Mental health crisis across the world</h3>
          <p>
            In case you need more convincing about the severity of the mental
            health crisis the world is facing, here are just a few of the
            poignant statistics from Mental Health 2022 adult data:
          </p>
          <div className={styles['donut-wrapper']}>
            <div className={styles.donut}>
              <DonutChart titleText="Mental Health" labels={label1} series={series1} legendPosition="left" />
              {/* <div>
                
              </div> */}
            </div>
            <div>
              <DonutChart titleText="Overweight" labels={label2} series={series2} legendPosition="right" />

            </div>
            {/* <DonutChart /> */}
          </div>
          {/* <button type="button" className="button-blue">
            More on mental health crisis
          </button> */}
          <ComingSoon className={styles.coming}>
            More on mental health crisis
          </ComingSoon>
          <h3 style={{ marginBottom: '2rem', marginTop: '6rem' }}>
            The pillars of an unhappy life
          </h3>
          <div className={styles['pillar-wrapper']}>
            <Image src={Pillar} alt="pillar of an unhappy life" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthCrisis;
