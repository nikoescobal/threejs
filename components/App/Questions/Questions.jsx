import useStore from '../../../store/store'
import styles from './questions.module.scss'

function Questions() {
  const { isDarkMode } = useStore();
  
  return (
    <div >
      This is the questions component
    </div>
  )
}

export default Questions