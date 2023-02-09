import styles from './cardsection.module.scss';

import Image from 'next/image';
import Chests from '../../../public/weapons/chests.webp';
import ChestsFallback from '../../../public/backgrounds/chests.png';
import useStore from '../../../store/store';
import Connector1 from '../../../public/illustrations/connector1.svg';
import Connector2 from '../../../public/illustrations/connector2.svg';
import Connector3 from '../../../public/illustrations/connector3.svg';
import Link from 'next/link';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import { useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';
import translations from '../../../language';
import Card from '../../Generic/Card/Card';

function CardSection() {
  const { isDarkMode } = useStore();
  const [error, setError] = useState(false);
  const { locale } = useRouter();

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
        {content[locale].map((card) => (
          // <div key={card.title} className={`${styles['card']}`}>
          //   <div className={`${styles['icon-wrapper']}`}>
          //     <Image src={card.icon} alt="icon" />
          //   </div>
          //   <div>
          //     <h4>{card.title}</h4>
          //     <p>
          //       {' '}
          //       {card.description}
          //     </p>
          //   </div>
          // </div>
          <Card key={card.title} card={card} />
        ))}
      </div>
      {/* <div className={`${styles['cards-wrapper']} spacing-x`}>
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
        {
          content[locale].map((card) => (
            <div key={card.title} className={`${styles['card']}`}>
              <div className={`${styles['icon-wrapper']}`}>
                <Image src={card.icon} alt="icon" />
              </div>
              <div>
                <h4>{card.title}</h4>
                <p>
                  {' '}
                  {card.description}
                </p>
              </div>
            </div>
          ))
        }
      </div> */}
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
        {/* <ComingSoon style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          {translations['learn_more'][locale]}
        </ComingSoon> */}
      </div>
    </div>
  );
}

export default CardSection;
