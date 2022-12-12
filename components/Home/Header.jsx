import styles from './header.module.scss';
import generics from '../../styles/generics.module.scss';
import Logo from '../../public/logo-cropped.webp';
import Image from 'next/image';
import PageSlider from './PageSlider/PageSlider';
import useStore from '../../store/store';
import Gradient from '../Generic/Gradient/Gradient';
import Waves from '../../public/backgrounds/waves-5.png';
import WaveLines from '../Generic/WaveLines/WaveLines';
import LogoParticles from './LogoParticles/LogoParticles';
import { useMediaQuery } from '@mui/material';

function Header() {
  const { isDarkMode } = useStore((state) => state);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div
      className={`${styles.container} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
      <Gradient
        className={styles.gradient}
      />
      <WaveLines className={styles['waves-wrapper']} />
      <section
        className={`${generics.header} ${styles.header} header-intro ${generics['spacing-x']} ${generics['spacing-t']}`}
      >
        <div
          className={`${generics['img-wrapper']}`}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {isDesktop && (
            <div style={{ scale: '1.5' }}>
              <LogoParticles />
            </div>
          ) }
        <div className={styles['logo-img']}>
          {/* <Image src={Logo} alt="logo" /> */}
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503 448">
            <g id="Layer_1-2" data-name="Layer 1">
              <g>
                <path style={{ fill: '#1e4fbb' }} d="M421.96,.1c25.99,0,51.98,.04,77.98-.07,2.5-.01,3.06,.57,3.06,3.06-.07,147.27-.07,294.54,0,441.8,0,2.5-.56,3.08-3.06,3.06-22.99-.11-45.99-.07-68.98-.07-.31-.75-.51-1.57-.93-2.24-52.4-82.62-104.81-165.22-157.26-247.81-.51-.81-.68-2.42-2.59-1.83v5.42c0,50.63-.04,101.26,.08,151.9,0,3.85-.89,5.03-4.9,5.01-27.82-.18-55.64-.09-83.45-.11-1.31,0-2.62-.24-3.93-.37l.12,.13c-.02-2-.05-3.99-.05-5.99,0-117.3,0-234.6,0-351.9,29.32,0,58.65,0,87.97,0,.32,.58,.6,1.18,.95,1.74,50.74,81.09,101.48,162.18,152.25,243.25,.63,1.01,.99,2.42,2.62,2.93,.08-.85,.18-1.48,.18-2.11-.02-81.94-.04-163.87-.06-245.81Z"/>
                <path style={{ fill: '#1e4fbb' }} d="M178.04,447.9c-57.98,0-115.96-.04-173.95,.1C.67,448.01,0,447.33,0,443.9,.11,297.3,.11,150.7,0,4.1,0,.68,.67-.02,4.09,0,31.08,.18,58.08,.1,85.07,.1c.91,2.08,.47,4.27,.47,6.41,.02,114.66,.02,229.33,.02,343.99,0,1.33,.12,2.68-.02,3.99-.32,2.85,.87,3.68,3.68,3.67,29.62-.12,59.25-.13,88.88-.17l-.12-.13c.02,30.01,.04,60.03,.07,90.04Z"/>
              </g>
            </g>
          </svg>
        </div>
        </div>
        <div className="text">
          <div className={styles['title-wrapper']}>
            <h1 className={generics.title}>
              LEGACY
              <br />
              NETWORK
            </h1>
          </div>
          <h4 className={styles.subtitle}>
            Gamified personal development through AI and blockchain technology
          </h4>
        </div>
      </section>
      <PageSlider />
    </div>
  );
}

export default Header;
