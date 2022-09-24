import PropTypes from 'prop-types';
import Image from 'next/image'
import styles from './gradient.module.scss'
import GradientImg from '../../../public/backgrounds/gradient.png'
import GradientImgHalf from '../../../public/backgrounds/gradient-cut.png'
import useStore from '../../../store/store'

function Gradient({style, isHalf}) {
  // top, left, right, bottom
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`} style={style}>
      <Image src={isHalf ? GradientImgHalf : GradientImg} alt=""  />
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