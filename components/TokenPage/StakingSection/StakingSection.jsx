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
    <div className={`${styles['staking-section']} ${generics['spacing-x']} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <h3>How staking works</h3>
      <div className={`${styles['steps-wrapper']}`}>
        <div className={`${styles['step']}`}>
          <p>Step 1:</p>
          <p>
            Allocate your assets
          </p>
          <div>
            <Image src={Money} alt="money" />
          </div>
          <p>
            Allocate your assets for either Staking or Vesting.
          </p>
        </div>
        <div className={`${styles['step']}`}>
          <p>Step 2:</p>
          <p>
            Freeze your shares for specific period of time
          </p>
          <div>
            <Image src={Wallet} alt="wallet" />
          </div>
          <p>
            Freeze (lock up) your shares up for minimum 3 month to maximum 24 months.
          </p>
        </div>
        <div className={`${styles['step']}`}>
          <p>Step 3:</p>
          <p>
            Compound or withdraw
          </p>
          <div>
            <Image src={Stack} alt="stack" />
          </div>
          <p>
            Automatically compound your returns or enjoy them as cash flow.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StakingSection