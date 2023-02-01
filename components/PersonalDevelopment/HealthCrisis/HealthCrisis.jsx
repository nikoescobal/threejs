import styles from './healthcrisis.module.scss';
import generics from '../../../styles/generics.module.scss';
import DonutChart from '../DonutChart/DonutChart';
import Image from 'next/image';
import Pillar from '../../../public/illustrations/pillar.png';
import useStore from '../../../store/store';
import Gradient from '../../Generic/Gradient/Gradient';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import { useRouter } from 'next/router';
import content from './content';

function HealthCrisis() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  
  const series1 = [284_000_000, 265_000_000, 107_000_000, 71_000_000, 46_000_000, 20_000_000, 16_000_000, 161_000_000]
  const series2 = [1_300_000_000, 600_000_000]
  const label1 = {
    en: ['Anxiety Disorder', 'Depression', 'Alcohol Disorder', 'Drug disorder', 'Bipolar disorder', 'Schizophrenia', 'Eating Disorder', 'Others'],
    de: ['Angststörung', 'Depression', 'Alkoholstörung', 'Drogenstörung', 'Bipolare Störung', 'Schizophrenie', 'Essstörung', 'Andere']
  }
  const label2 = {
    en: ['Overweight', 'Heavily Overweight'],
    de: ['Übergewicht', 'Starkes Übergewicht']
  }
  return (
    <>
      {/* <Gradient
        style={{
          top: '75%',
          left: '50%',
          width: '80%',
          transform: 'translate(-50%, -75%)',
        }}
      /> */}
      <div
        className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''} spacing-x max-1920`}
      >
          <h2>{content[locale].title}</h2>
          <p>
            {content[locale].description}
          </p>
          <img src='/illustrations/earth.png' alt="earth illustration" />
          <div className={styles['donut-wrapper']}>
            <div className={styles.donut}>
              <DonutChart
                titleText={content[locale].donut_1.title}
                subtitle={content[locale].donut_1.description}
                labels={label1[locale]}
                series={series1}
                legendPosition="right"
              />
            </div>
            <div>
              <DonutChart
                titleText={content[locale].donut_2.title}
                subtitle={content[locale].donut_2.description}
                labels={label2[locale]}
                series={series2}
                legendPosition="right"
              />

            </div>
          </div>
          {/* <ComingSoon className={styles.coming}>
            {content[locale].more_about}
          </ComingSoon> */}
          {/* <h3 style={{ marginBottom: '2rem', marginTop: '6rem' }}>
            {content[locale].pillars}
          </h3>
          <div className={styles['pillar-wrapper']}>
            <Image src={Pillar} alt="pillar of an unhappy life" />
          </div> */}
      </div>
    </>
  );
}

export default HealthCrisis;
