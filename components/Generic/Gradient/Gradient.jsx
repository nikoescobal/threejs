import PropTypes from 'prop-types';
import Image from 'next/image'
import styles from './gradient.module.scss'
import GradientImg from '../../../public/backgrounds/gradient.webp'
import GradientImgHalf from '../../../public/backgrounds/gradient-cut.png'
import useStore from '../../../store/store'

function Gradient({style, isHalf}) {
  // top, left, right, bottom
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`} style={style}>
      <Image draggable="false" src={isHalf ? GradientImgHalf : GradientImg} alt="gradient" unselectable='on' />
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