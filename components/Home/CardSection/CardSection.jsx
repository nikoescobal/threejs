import styles from './cardsection.module.scss';
import MovingIcon from '@mui/icons-material/Moving';
import Icon1 from '../../../public/icons/card-icon1.svg';
import Icon2 from '../../../public/icons/card-icon2.svg';
import Icon3 from '../../../public/icons/card-icon3.svg';
import Icon4 from '../../../public/icons/card-icon4.svg';
import Image from 'next/image';
import Chests from '../../../public/backgrounds/chests.webp';
import ChestsFallback from '../../../public/backgrounds/chests.png';
import useStore from '../../../store/store';
import Connector1 from '../../../public/illustrations/connector1.svg';
import Connector2 from '../../../public/illustrations/connector2.svg';
import Connector3 from '../../../public/illustrations/connector3.svg';
import Link from 'next/link';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import { useState } from 'react';

function CardSection() {
  const { isDarkMode } = useStore();
  const [error, setError] = useState(false);

  return (
    <div
      className={`${styles.wrapper} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
      <div className={styles['img-wrapper']}>
        <Image
          src={!error ? Chests : ChestsFallback}
          alt="chests"
          onError={() => setError(true)}
        />
      </div>
      <div
        className={`${styles['cards-wrapper']} spacing-x`}
      >
        <img src={Connector1.src} alt="connector" className={`${styles['connector']}`} />
        <img src={Connector2.src} alt="connector" className={`${styles['connector']}`} />
        <img src={Connector3.src} alt="connector" className={`${styles['connector']}`} />
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon1} alt="icon" />
          </div>
          <div>
            <h4>Choose a skill you want to learn</h4>
            <p>
              Our unique education system covers all essential skills for your
              personal success in mental health, physical health, platonic
              relationships, romantic relationships, career/finances and much
              more.
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon2} alt="icon" />
          </div>
          <div>
            <h4>Play through lessons and level up your character </h4>
            <p>
              Your in-game character is a reflection of you. When the character
              levels up in-game, you level up in real life. The character allows
              you to gain an objective perspective of yourself and to keep track
              of your progress.
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon3} alt="icon" />
          </div>
          <div>
            <h4>Test and deepen your knowledge </h4>
            <p>
              In the beginning, the reward distribution will be pegged to
              randomized, theoretical exams. The exams are created in a way
              which tests your deep understanding of the topic, not your memory.
              As the project develops further, we will implement more
              opportunities to earn rewards.
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon4} alt="icon" />
          </div>
          <div>
            <h4>Earn reward chests </h4>
            <p>
              Chests can include Legacy Token (LGCT), collectibles and other
              items which can either be traded or reused within the ecosystem.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', position: 'relative', zIndex: '1' }}
      >
        {/* <Link href="/">
          <a className='button-blue'>Learn More</a>
        </Link> */}
        <ComingSoon style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          Learn More
        </ComingSoon>
      </div>
    </div>
  );
}

export default CardSection;
