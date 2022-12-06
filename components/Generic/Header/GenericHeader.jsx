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
        style={{
          top: '-20%',
          right: '-15%',
          maxWidth: '80%',
        }}
      />
      {/* <div className={styles['waves-wrapper']}> */}
      {waves}
      {/* </div> */}
      <section
        className={`${generics.header} ${styles.header} header-intro ${generics['spacing-x']} ${generics['spacing-t']}`}
      >
        <div className={`${generics['img-wrapper']}`}>
          {rightObj}
          {/* <img src={imageUrl} alt={imageAlt} /> */}
        </div>
        <div className="text">
          <div className={styles['title-wrapper']}>
            <h1 className={generics.title}>{title}</h1>
          </div>
          <h4>{subtitle}</h4>
        </div>
      </section>
    </div>
  );
}

export default GenericHeader;
