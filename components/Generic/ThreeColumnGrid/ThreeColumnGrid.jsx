import styles from './threecolumngrid.module.scss';
import CharacterCard from '../../TokenPage/CharacterCard/CharacterCard'

function ThreeColumnGrid({children}) {
  return (
    <div className={styles.wrapper}>
      {children}
      {/* <CharacterCard>
        Common Character Trait Examples
      </CharacterCard> */}
    </div>
  )
}

export default ThreeColumnGrid