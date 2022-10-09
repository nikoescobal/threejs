/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './ln.module.scss';
import { lnfunctions } from '../Questions/content';
import TabPanel from '../../Generic/TabPanel/TabPanel';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import Managing from '../../../public/mockups/managing.png';
import Staking from '../../../public/mockups/staking.png';
import Vesting from '../../../public/mockups/vesting.png';
import Bridging from '../../../public/mockups/bridging.png';
import { useState } from 'react';

function Ln() {
  const { isDarkMode } = useStore();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <section
      className={`
      ${styles['wrapper']}
      ${!isDarkMode ? `${styles.light}` : ''}
      spacing-x
      app-preview
      max-1920
    `}
    >
      <h3>Legacy Wallet</h3>
      <div className={`${styles['tabs-wrapper']}`}>
        <Tabs
          className={`${styles['tab-list']}`}
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          <Tab label="Wallet" {...a11yProps(0)} />
          <Tab label="Game" {...a11yProps(1)} />
          <Tab label="News" {...a11yProps(2)} />
          <Tab label="Referrals" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} className={styles['tab-item']} index={0}>
          <div>
            <img src={Managing.src} alt="Managing mockup" />
          </div>
          <div>
            <h4>Managing</h4>
            <p>
              The Legacy Network blockchain wallet allows for easy on-boarding
              with a seed pharase and flexibility to receive, send, stake and
              vest the LGCN Token across crypto users. Payment rails for fiat
              on-boarding, KYC/AML, NFT support, and the LGCN token. We&apos;ve
              handled it all to make it easy for you to enage in a game with
              your community participating in your success.
            </p>
            <ul className={styles.list}>
              Token and NFT support:
              <li>VeChain</li>
              <li>Ethereum</li>
              <li>Binance</li>
              <li>Polygon.</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={1}>
          <div>
            <img src={Staking.src} alt="Staking mockup" />
          </div>
          <div>
            <h4>Staking</h4>
            <p>
              As a long-term believer, you can stake your LGCN tokens for 6, 12,
              or 24 months to benefit from exclusive rewards. Alternatively, the
              flexible staking option can be used, so you can withdraw your
              funds at any time. Our flexible staking option comes with an
              auto-compounding feature which saves you time by automatically
              claiming the rewards and by re-staking them. The tokens are held
              by audited smart contracts to grant high security and performance.
            </p>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={2}>
          <div>
            <img src={Vesting.src} alt="Vesting mockup" />
          </div>
          <div>
            <h4>Vesting</h4>
            <p>
              As a private sale, public sale or giveaway participant, you can
              claim your vested LGCN tokens directly in the wallet. The feature
              calculates the claimable amount live, so tokens can be claimed in
              an interval of your choice. Just like the staking contracts, the
              vesting contracts are audited as well which grants high security
              and performance.
            </p>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={3}>
          <div>
            <img src={Bridging.src} alt="Bridging mockup" />
          </div>
          <div>
            <h4>Bridging</h4>
            <p>
              Bringe your LGCN tokens between the supported blockchains in an
              instant thanks to our SafeSwap integration. Atomic swaps are used
              which makes bridging cheap, fast and secure. More than that, we
              are working on an auto-bridge feature which allows you to send
              your LGCN tokens from one blockchain to another without needing to
              bridge them first.
            </p>
          </div>
        </TabPanel>
      </div>
    </section>
  );
}

export default Ln;
