import styles from './cardsection.module.scss';
import MovingIcon from '@mui/icons-material/Moving';
import Icon1 from '../../../public/icons/mindfulness.svg';
import Icon2 from '../../../public/icons/empathy.svg';
import Icon3 from '../../../public/icons/discipline.svg';
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

      <div className={`${styles['cards-wrapper']} spacing-x`}>
        <img
          src={Connector1.src}
          alt="connector"
          className={`${styles['connector']}`}
        />
        <img
          src={Connector2.src}
          alt="connector"
          className={`${styles['connector']}`}
        />
        <img
          src={Connector3.src}
          alt="connector"
          className={`${styles['connector']}`}
        />
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon1} alt="icon" />
          </div>
          <div>
            <h4>Mindfulness</h4>
            <p>
              Mindfulness is a <strong>key</strong> component of personal
              development.
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon2} alt="icon" />
          </div>
          <div>
            <h4>Empathy</h4>
            <p>
              Life is a reflection of oneself. External conditions{' '}
              <strong>mirror</strong> internal ones.
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon3} alt="icon" />
          </div>
          <div>
            <h4>Discipline</h4>
            <p>
              Discipline is the way to transform the intangible into{' '}
              <strong>tangible</strong> .
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          position: 'relative',
          zIndex: '1',
        }}
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
