import Image from 'next/image'
import styles from './gradient.module.scss'
import GradientImg from '../../../public/backgrounds/gradient.png'
import useStore from '../../../store/store'

function Gradient({style}) {
  // top, left, right, bottom
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`} style={style}>
      <Image src={GradientImg} alt=""  />
    </div>
  )
}

export default Gradient