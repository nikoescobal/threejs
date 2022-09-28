import styles from './cardsection.module.scss';
import MovingIcon from '@mui/icons-material/Moving';
import Icon1 from '../../../public/icons/card-icon1.svg';
import Icon2 from '../../../public/icons/card-icon2.svg';
import Icon3 from '../../../public/icons/card-icon3.svg';
import Icon4 from '../../../public/icons/card-icon4.svg';
import Image from 'next/image';
import Chests from '../../../public/backgrounds/chests.png';
import useStore from '../../../store/store';
import Connector1 from '../../../public/illustrations/connector1.svg';
import Connector2 from '../../../public/illustrations/connector2.svg';
import Connector3 from '../../../public/illustrations/connector3.svg';
import Link from 'next/link';

function CardSection() {
  const { isDarkMode } = useStore();

  return (
    <div
      className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <div className={styles['img-wrapper']}>
        <Image src={Chests} alt="chests" />
      </div>
      <div
        className={`${styles['cards-wrapper']} spacing-x`}
        // style={{
        //   background: 'url("/backgrounds/chests.png")',
        //   backgroundSize: 'cover',
        // }}
      >
        {/* <div className={`${styles['connectors']}`}> */}
          <img src={Connector1.src} alt="" className={`${styles['connector']}`} />
          <img src={Connector2.src} alt="" className={`${styles['connector']}`} />
          <img src={Connector3.src} alt="" className={`${styles['connector']}`} />
        {/* </div> */}
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon1} alt="icon" />
          </div>
          <div>
            <h4>Play through content from lessons</h4>
            <p>
              Our play-to-earn feature ensures that users are rewarded for every
              task completed on the app.
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon2} alt="icon" />
          </div>
          <div>
            <h4>Complete the quest and level up</h4>
            <p>Complete each individual quest and level up on your earnings</p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon3} alt="icon" />
          </div>
          <div>
            <h4>Solve quest and test your knowledge</h4>
            <p>
              With every quest, you get to test your knowledge on different
              aspect of life.
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Image src={Icon4} alt="icon" />
          </div>
          <div>
            <h4>Get rewarded with LGCN tokens</h4>
            <p>Get rewarded with Legacy Network tokens (LGCN).</p>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <Link href="/">
          <a className='button-blue'>Learn More</a>
        </Link>
      </div>
      <h4 className="spacing-x">
        Expand your knowledge and build your dream life with the help of our AI.
      </h4>
    </div>
  );
}

export default CardSection;
