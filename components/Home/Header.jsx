import styles from './header.module.scss';
import generics from '../../styles/generics.module.scss';
import Logo from '../../public/logo-cropped.png';
import Image from 'next/image';
import PageSlider from './PageSlider/PageSlider';
import useStore from '../../store/store';
import Gradient from '../Generic/Gradient/Gradient';
import Waves from '../../public/backgrounds/waves-5.png';
import WaveLines from '../Generic/WaveLines/WaveLines';
import LogoParticles from './LogoParticles/LogoParticles';
import { useMediaQuery } from '@mui/material';
import AnimatedText from 'react-animated-text-content';

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
          <div>
            <AnimatedText
              className={styles.legacy}
              type="chars"
              interval={0.04}
              duration={1.8}
              animation={{
                x: '200px',
                y: '288px',
                ease: 'ease-in-out',
              }}
            >
              LEGACY
            </AnimatedText>
            <AnimatedText
              className={styles.legacy}
              type="chars"
              interval={0.04}
              duration={1.8}
              animation={{
                x: '200px',
                y: '288px',
                ease: 'ease-in-out',
              }}
            >
              NETWORK
            </AnimatedText>

            <AnimatedText
              className={styles.subtitle}
              type="words"
              interval={0.09}
              duration={2.4}
              animation={{
                x: '-333px',
                y: '100px',
                ease: 'ease',
                scale: 4.56,
              }}
            >
              Gamified personal development through AI and Blockchain Technology
            </AnimatedText>
          </div>
        </div>
      </section>
      <PageSlider />
    </div>
  );
}

export default Header;
