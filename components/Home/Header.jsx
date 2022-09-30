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

function Header() {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`${styles.container} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <Gradient style={{
        top: '-12%',
        right: '-5%',
        maxWidth: '80%'
        }} />
      <WaveLines className={styles['waves-wrapper']} />
      <section className={`${generics.header} ${styles.header} header-intro ${generics['spacing-x']} ${generics['spacing-t']}`}>
        <div className={`${generics['img-wrapper']}`} style={{scale: '1.5'}}>
          {/* <Image src={Logo} alt="logo" /> */}
          <LogoParticles />
        </div>
        <div className="text">
          <div>
            <h1 className={generics.title}>
              Legacy
              <br />
              Network
            </h1>
            <h4>
              Gamified personal development through AI and blockchain technology
            </h4>
          </div>
        </div>
      </section>
      <PageSlider />
    </div>
  )
}

export default Header