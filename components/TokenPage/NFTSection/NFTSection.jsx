import useStore from '../../../store/store';
import styles from './nft_section.module.scss';
import generics from '../../../styles/generics.module.scss';
import Character1 from '../../../public/nft/character1.png';
import Image from 'next/image';
import CharacterCard from '../CharacterCard/CharacterCard';
// import VikingOne from '../../../public/nft/character1.png'

function NFTSection() {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`${styles.wrapper} ${generics['spacing-x']} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <div className={styles['text-wrapper']}>
        <h2>Discover Our NFT</h2>
        <p>
          The Legacy Network NFT is an in-game character with a unique set of features. There are 16 different animation, face props, armour, expression, color, and character traits. Each trait such as character, animation, face prop, etc. also has multiple tiers of rarity, resulting in unique and epic combinations for you to own!
        </p>
      </div>
      <div className={styles['first-card-section']}>
        <div className={styles['text-section']}>
          <h3>20</h3>
          <h4>Unique Traits</h4>
        </div>
        <div>
          <Image src={Character1} alt="nft-character"/>
        </div>
        <div className={styles['text-section']}>
          <h3>2,000</h3>
          <h4>Possibilities</h4>
        </div>
      </div>
      <div className={styles['nft-card-section']}>
        <div>
          <CharacterCard srcOne={'/nft/viking.png'} altOne={"viking"} srcTwo={'/nft/character.png'} altTwo="viking">
            Common
            Character Trait
            Examples
          </CharacterCard>
          <CharacterCard srcOne={'/nft/viking.png'} altOne={"viking"} srcTwo={'/nft/character.png'} altTwo="viking">
            Common
            Character Trait
            Examples
          </CharacterCard>
          <CharacterCard srcOne={'/nft/viking.png'} altOne={"viking"} srcTwo={'/nft/character.png'} altTwo="viking">
            Common
            Character Trait
            Examples
          </CharacterCard>
          <CharacterCard srcOne={'/nft/viking.png'} altOne={"viking"} srcTwo={'/nft/character.png'} altTwo="viking">
            Common
            Character Trait
            Examples
          </CharacterCard>
          <CharacterCard srcOne={'/nft/viking.png'} altOne={"viking"} srcTwo={'/nft/character.png'} altTwo="viking">
            Common
            Character Trait
            Examples
          </CharacterCard>
        </div>
        <p>
          The Legacy Network NFT on Ethereum is the first batch of characters that will populate the Legacy Network Play to earn game app, earning these NFT an armour or upgrades indicate their elite status. 
        </p>
      </div>
    </div>
  )
}

export default NFTSection