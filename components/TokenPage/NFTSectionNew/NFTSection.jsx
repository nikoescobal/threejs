import useStore from '../../../store/store';
import styles from './nft_section.module.scss';
import generics from '../../../styles/generics.module.scss';
import Character1 from '../../../public/nft/character1.png';
import Image from 'next/image';
import CharacterCard from '../CharacterCardNew/CharacterCard';
// import CharacterCard from '../CharacterCard/CharacterCard';
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
      {/* <WaveLines className={styles.waves} /> */}
      <div className={`${styles['text-wrapper']} max-1920`}>
        <h2>{content[locale].title}</h2>
        <p>{content[locale].description_1}</p>
      </div>
      <div className={`${styles['text-content']} max-1920`}>
        <div className={styles['text-section']}>
          <h5>Total NFTs</h5>
          <p>TBA</p>
        </div>

        <div className={styles['text-section']}>
          <h5>Legendary NFTs</h5>
          <p>TBA</p>
        </div>
      </div>
      <div className={`${styles['nft-card-section']} max-1920`}>
        <div>
          <CharacterCard />
        </div>
      </div>
    </div>
  );
}

export default NFTSection;
