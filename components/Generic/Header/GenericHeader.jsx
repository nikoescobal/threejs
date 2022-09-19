// import styles from './header.module.scss'
import styles from './generic_header.module.scss'
import generics from '../../../styles/generics.module.scss'
// import Logo from '../../public/logo-cropped.png'
// import Image from 'next/image'
import useStore from '../../../store/store'

function GenericHeader({title, subtitle, rightObj}) {
  const { isDarkMode } = useStore((state) => state);

  return (
    <div className={`${styles.container} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <section className={`${generics.header} ${styles.header} header-intro ${generics['spacing-x']} ${generics['spacing-t']}`}>
        <div className={`${generics['img-wrapper']}`}>
          {rightObj}
          {/* <img src={imageUrl} alt={imageAlt} /> */}
        </div>
        <div className="text">
          <div>
            <h1 className={generics.title}>
              {title}
            </h1>
            <h4>
              {subtitle}
            </h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GenericHeader;