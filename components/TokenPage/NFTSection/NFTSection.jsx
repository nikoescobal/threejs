import useStore from '../../../store/store';
import styles from './nft_section.module.scss';
import generics from '../../../styles/generics.module.scss';
import Character1 from '../../../public/nft/character1.png';
import Image from 'next/image';
import CharacterCard from '../CharacterCard/CharacterCard';
import WaveLines from '../../Generic/WaveLines/WaveLines';
import VikingOne from '../../../public/nft/viking-big.webp';
import { useRouter } from 'next/router';
import content from './content';

function NFTSection() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <div
      className={`${styles.wrapper} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      }`}
    >
      <WaveLines className={styles.waves} />
      <div className={`${styles['text-wrapper']} max-1920`}>
        <h3>{content[locale].title}</h3>
        <p>
          {content[locale].description_1}
        </p>
      </div>
      <div className={`${styles['first-card-section']} max-1920`}>
        <div className={styles['text-section']}>
          <h3>20</h3>
          <h4>Legendary NFTs</h4>
        </div>
        <div>
          <Image src={VikingOne} alt="nft-character" />
        </div>
        <div className={styles['text-section']}>
          <h3>2,000</h3>
          <h4>Total NFTs</h4>
        </div>
      </div>
      <div className={`${styles['nft-card-section']} max-1920`}>
        <div>
          {
            content[locale].characters.map((character, index) => (
              <CharacterCard
                key={character.title}
                srcOne={character.srcOne}
                altOne={character.altOne}
                srcTwo={character.srcTwo}
                altTwo={character.altTwo}
                className={styles[`card-${index + 1}`]}
              >
                {character.title}
              </CharacterCard>
            ))
          }
          {/* <CharacterCard
            srcOne={'/nft/viking1.png'}
            altOne={'viking'}
            srcTwo={'/nft/character.png'}
            altTwo="viking"
            className={styles['card-1']}
          >
            Viking
          </CharacterCard>
          <CharacterCard
            srcOne={'/nft/aztec-new.png'}
            altOne={'aztec'}
            srcTwo={'/nft/character.png'}
            altTwo="aztec"
            className={styles['card-2']}
          >
            Aztec
          </CharacterCard>
          <CharacterCard
            srcOne={'/nft/egyptian-new.png'}
            altOne={'egyptian'}
            srcTwo={'/nft/character.png'}
            altTwo="egyptian"
            className={styles['card-3']}
          >
            Egyptian
          </CharacterCard>
          <CharacterCard
            srcOne={'/nft/spartan.png'}
            altOne={'spartan'}
            srcTwo={'/nft/character.png'}
            altTwo="spartan"
            className={styles['card-4']}
          >
            Greek
          </CharacterCard>
          <CharacterCard
            srcOne={'/nft/african-new.png'}
            altOne={'african'}
            srcTwo={'/nft/character.png'}
            altTwo="african"
            className={styles['card-5']}
          >
            African
          </CharacterCard> */}
        </div>
        <p>
          {content[locale].description_2}
        </p>
      </div>
    </div>
  );
}

export default NFTSection;
