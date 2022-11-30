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
        style={{
          top: '-12%',
          right: '-5%',
          maxWidth: '80%',
        }}
      />
      <WaveLines className={styles['waves-wrapper']} />
      <section
        className={`${generics.header} ${styles.header} header-intro ${generics['spacing-x']} ${generics['spacing-t']}`}
      >
        <div
          className={`${generics['img-wrapper']}`}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {isDesktop ? (
            <div style={{ scale: '1.5' }}>
              <LogoParticles />
            </div>
          ) : (
            <div>
              <Image src={Logo} alt="logo" />
            </div>
          )}
        </div>
        <div className="text">
          <div className={styles['title-wrapper']}>
            <h1 className={styles.title}>
              LEGACY
              <br />
              NETWORK
            </h1>
            <h4 className={styles.subtitle}>
              Gamified personal development through AI and blockchain technology
            </h4>
          </div>
        </div>
      </section>
      <PageSlider />
    </div>
  );
}

export default Header;
