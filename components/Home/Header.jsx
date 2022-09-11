import styles from './header.module.scss'
import generics from '../../styles/generics.module.scss'
import Logo from '../../public/logo-cropped.png'
import Image from 'next/image'
import PageSlider from './PageSlider/PageSlider'

function Header() {
  return (
    <div className={`${styles.container}`}>
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