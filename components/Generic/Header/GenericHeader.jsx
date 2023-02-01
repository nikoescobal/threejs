// import styles from './header.module.scss'
import styles from './generic_header.module.scss';
import generics from '../../../styles/generics.module.scss';
// import Logo from '../../public/logo-cropped.png'
// import Image from 'next/image'
import useStore from '../../../store/store';
import Gradient from '../Gradient/Gradient';

function GenericHeader({ title, subtitle, rightObj, waves }) {
  const { isDarkMode } = useStore((state) => state);

  return (
    <div
      className={`${styles.container} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
      <Gradient
        className={styles.gradient}
      />
      {waves}
      <section
        className={`${generics.header} ${styles.header} header-intro spacing-x spacing-t`}
      >
        <div className={`${styles['img-wrapper']} ${generics['img-wrapper']}`}>
          {rightObj}
        </div>
        <div className="text">
          <div className={styles['title-wrapper']}>
            <h1 className={generics.title}>{title}</h1>
          </div>
          <h4 className={styles.subtitle}>{subtitle}</h4>
        </div>
      </section>
    </div>
  );
}

export default GenericHeader;
