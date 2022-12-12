import PropTypes from 'prop-types';
import Image from 'next/image'
import styles from './gradient.module.scss'
// import GradientImg from '../../../public/backgrounds/gradient.webp'
// import GradientImgHalf from '../../../public/backgrounds/gradient-cut.webp'
import useStore from '../../../store/store'
// import imageKitLoader from '../ImageKitLoader/ImageKitLoader';

function Gradient({style, isHalf, className}) {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${className} ${!isDarkMode ? `${styles.light}` : ''}`} style={style} >
      {/* <Image draggable="false" src={isHalf ? GradientImgHalf : GradientImg} alt="gradient" unselectable='on' /> */}
      <Image 
        // loader={imageKitLoader}
        // src={isHalf ? 'gradient-cut.webp' : 'gradient.webp'}
        src={isHalf ? '/backgrounds/gradient-cut-2.webp' : '/backgrounds/gradient-2.webp'}
        alt="blue background gradient"
        width={2374}
        height={2374}
        layout='responsive'
        // layout='fill'
        // loading='eager'
        objectFit='cover'
        // priority
      />
    </div>
  )
}

Gradient.propTypes = {
  isHalf: PropTypes.bool,
}

Gradient.defaultProps = {
  isHalf: false,
}

export default Gradient