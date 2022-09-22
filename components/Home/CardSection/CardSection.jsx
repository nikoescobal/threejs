import styles from './cardsection.module.scss';
import MovingIcon from '@mui/icons-material/Moving';
import Image from 'next/image';
import Chests from '../../../public/backgrounds/chests.png'

function CardSection() {
  return (
    <div className={`${styles.wrapper}`}>
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
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>Play through content from lessons</h4>
            <p>
              Our play to earn feature ensure that users are rewarded for every task completed on the app
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>
              Complete the quest and level up
            </h4>
            <p>
              Complete each individual quest and level up on your earnings
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>Solve quest and test your knowledge</h4>
            <p>
              With every quest, you get to test your knowledge on different aspect of life.
            </p>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div>
            <MovingIcon />
          </div>
          <div>
            <h4>
              Get rewarded in LGCN token
            </h4>
            <p>
              Get rewarded in legacy Network token (LGCN). 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSection