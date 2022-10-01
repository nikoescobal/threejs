import styles from './stakingsection.module.scss';
import generics from '../../../styles/generics.module.scss';
import Money from '../../../public/illustrations/money.svg';
import Wallet from '../../../public/illustrations/wallet.svg';
import Stack from '../../../public/illustrations/stack.svg';
import Image from 'next/image';
import useStore from '../../../store/store';

function StakingSection() {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles['staking-section']} ${generics['spacing-x']} ${!isDarkMode ? `${styles.light}` : ''} max-1920`}>
      <h3>How the staking works</h3>
      <div className={`${styles['steps-wrapper']}`}>
        <div className={`${styles['step']}`}>
          <p>Step 1:</p>
          <p>
            Get LGCN token
          </p>
          <div>
            <Image src={Money} alt="money" />
          </div>
          <p>
            You can get your hands on LGCN token by using our ecosystem, by participating in raffles or by buying them on the open market.
          </p>
        </div>
        <div className={`${styles['step']}`}>
          <p>Step 2:</p>
          <p>
             Freeze your tokens in the app
          </p>
          <div>
            <Image src={Wallet} alt="wallet" />
          </div>
          <p>
            As an early adopter, you can freeze your LGCN tokens for 3 – 24 months within our pre-launch app (coming soon).
          </p>
        </div>
        <div className={`${styles['step']}`}>
          <p>Step 3:</p>
          <p>
            Get rewarded
          </p>
          <div>
            <Image src={Stack} alt="stack" />
          </div>
          <p>
            Profit from staking rewards.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StakingSection