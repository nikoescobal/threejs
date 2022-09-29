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
    <div
      className={`${styles.wrapper} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      }`}
    >
      <div className={styles['text-wrapper']}>
        <h3>Discover Our NFT</h3>
        <p>
          The Legacy Network NFT is an in-game character with a unique set of
          features. There are 16 different animation, face props, armour,
          expression, color, and character traits. Each trait such as character,
          animation, face prop, etc. also has multiple tiers of rarity,
          resulting in unique and epic combinations for you to own!
        </p>
      </div>
      <div className={styles['first-card-section']}>
        <div className={styles['text-section']}>
          <h3>20</h3>
          <h4>Legendary NFTs</h4>
        </div>
        <div>
          <Image src={Character1} alt="nft-character" />
        </div>
        <div className={styles['text-section']}>
          <h3>2,000</h3>
          <h4>Total NFTs</h4>
        </div>
      </div>
      <div className={styles['nft-card-section']}>
        <div>
          <CharacterCard
            srcOne={'/nft/viking1.png'}
            altOne={'viking1'}
            srcTwo={'/nft/character.png'}
            altTwo="viking1"
            className={styles['card-1']}
          >
            Viking Character Example
          </CharacterCard>
          <CharacterCard
            srcOne={'/nft/egyptian.png'}
            altOne={'egyptian'}
            srcTwo={'/nft/character.png'}
            altTwo="egyptian"
            className={styles['card-2']}
          >
            Egyptian Character Example
          </CharacterCard>
          <CharacterCard
            srcOne={'/nft/aztec.png'}
            altOne={'aztec'}
            srcTwo={'/nft/character.png'}
            altTwo="aztec"
            className={styles['card-3']}
          >
            African Character Examples
          </CharacterCard>
          <CharacterCard
            srcOne={'/nft/viking.png'}
            altOne={'viking'}
            srcTwo={'/nft/character.png'}
            altTwo="viking"
            isQuestionMark={true}
          >
            Greek Character Example
          </CharacterCard>
          <CharacterCard
            srcOne={'/nft/viking.png'}
            altOne={'viking'}
            srcTwo={'/nft/character.png'}
            altTwo="viking"
            isQuestionMark={true}
          >
            Aztec Character Example
          </CharacterCard>
        </div>
        <p>
          The Legacy Network NFT on Ethereum is the first batch of characters
          that will populate the Legacy Network play-to-earn game app, earning
          these NFT an armour or upgrades indicate their elite status.
        </p>
      </div>
    </div>
  );
}

export default NFTSection;
