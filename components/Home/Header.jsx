import styles from './header.module.scss';
import generics from '../../styles/generics.module.scss';
import Logo from '../../public/logo-cropped.png';
import Image from 'next/image';
import PageSlider from './PageSlider/PageSlider';
import useStore from '../../store/store';
import Gradient from '../Generic/Gradient/Gradient';
import Waves from '../../public/backgrounds/waves-5.png';

function Header() {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`${styles.container} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <Gradient style={{
        top: '-12%',
        right: '-5%',
        maxWidth: '80%'
        }} />
      <div className={styles['waves-wrapper']}>
        <Image src={Waves} alt="" />
      </div>
      <section className={`${generics.header} ${styles.header} header-intro ${generics['spacing-x']} ${generics['spacing-t']}`}>
        <div className={`${generics['img-wrapper']}`}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className="text">
          <div>
            <h1 className={generics.title}>
              Legacy
              <br />
              Network
            </h1>
            <h4>
              A community-driven personal development ecosystem based on
              {' '}
              <span>blockchain technology</span>
            </h4>
          </div>
        </div>
      </section>
      <PageSlider />
    </div>
  )
}

export default Header