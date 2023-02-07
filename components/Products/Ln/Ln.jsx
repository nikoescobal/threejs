/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './ln.module.scss';
import { lnfunctions } from '../../LegacyPage/Questions/content';
import TabPanel from '../../Generic/TabPanel/TabPanel';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import Waves from '../../../public/backgrounds/waves-updated.svg';
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
      <div className={`${styles['waves-wrapper']}`}>
        <img className={styles.waves} src={Waves.src} alt="Wave Lines" />
      </div>
      <h3 style={{ position: 'relative' }}>Legacy Wallet</h3>
      <div
        className={`${styles['tabs-wrapper']}`}
        style={{ position: 'relative' }}
      >
        <TabPanel value={value} className={styles['tab-item']} index={0}>
          <div>
            <img src={Managing.src} alt="Managing mockup" />
          </div>
          <div>
            <Tabs
              className={`${styles['tab-list']}`}
              value={value}
              onChange={handleChange}
              aria-label="tabs"
            >
              <Tab label="Managing" {...a11yProps(0)} />
              <Tab label="Staking" {...a11yProps(1)} />
              <Tab label="Vesting" {...a11yProps(2)} />
              <Tab label="Bridging" {...a11yProps(3)} />
            </Tabs>
            <div className={styles['tab-spacing']}>
              <h4>Managing</h4>
              <p>
                Manage your favorite cryptos in a secure non-custodial wallet.
                The legacy wallet allows you to easily hold, send and receive
                tokens on multiple blockchains. The private keys are stored
                locally on the device so you and only you have access to your
                funds. Browse through the NFT section to see all your
                collectibles safe in one place. Additionally, the wallet comes
                with a browser extension which grants you web-access to the
                exciting world of Web3.
              </p>
              <ul className={styles.list}>
                Token and NFT support:
                <li>VeChain</li>
                <li>Ethereum</li>
                <li>Binance</li>
                <li>Polygon.</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={1}>
          <div>
            <img src={Staking.src} alt="Staking mockup" />
          </div>
          <div>
            <Tabs
              className={`${styles['tab-list']}`}
              value={value}
              onChange={handleChange}
              aria-label="tabs"
            >
              <Tab label="Managing" {...a11yProps(0)} />
              <Tab label="Staking" {...a11yProps(1)} />
              <Tab label="Vesting" {...a11yProps(2)} />
              <Tab label="Bridging" {...a11yProps(3)} />
            </Tabs>
            <div className={styles['tab-spacing']}>
              <h4>Staking</h4>
              <p>
                As a long-term believer, you can stake your Legacy Token (LGCT)s
                for 6, 12, or 24 months to benefit from exclusive rewards.
                Alternatively, the flexible staking option can be used, so you
                can withdraw your funds at any time. Our flexible staking option
                comes with an auto-compounding feature which saves you time by
                automatically claiming the rewards and by re-staking them. The
                tokens are held by audited smart contracts to grant high
                security and performance.
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={2}>
          <div>
            <img src={Vesting.src} alt="Vesting mockup" />
          </div>
          <div>
            <Tabs
              className={`${styles['tab-list']}`}
              value={value}
              onChange={handleChange}
              aria-label="tabs"
            >
              <Tab label="Managing" {...a11yProps(0)} />
              <Tab label="Staking" {...a11yProps(1)} />
              <Tab label="Vesting" {...a11yProps(2)} />
              <Tab label="Bridging" {...a11yProps(3)} />
            </Tabs>
            <div className={styles['tab-spacing']}>
              <h4>Vesting</h4>
              <p>
                As a private sale, public sale or giveaway participant, you can
                claim your vested Legacy Token (LGCT)s directly in the wallet.
                The feature calculates the claimable amount live, so tokens can
                be claimed in an interval of your choice. Just like the staking
                contracts, the vesting contracts are audited as well which
                grants high security and performance.
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={3}>
          <div>
            <img src={Bridging.src} alt="Bridging mockup" />
          </div>
          <div>
            <Tabs
              className={`${styles['tab-list']}`}
              value={value}
              onChange={handleChange}
              aria-label="tabs"
            >
              <Tab label="Managing" {...a11yProps(0)} />
              <Tab label="Staking" {...a11yProps(1)} />
              <Tab label="Vesting" {...a11yProps(2)} />
              <Tab label="Bridging" {...a11yProps(3)} />
            </Tabs>
            <div className={styles['tab-spacing']}>
              <h4>Bridging</h4>
              <p>
                Bridge your Legacy Token (LGCT)s between the supported
                blockchains in an instant thanks to our SafeSwap integration.
                Atomic swaps are used which makes bridging cheap, fast and
                secure. More than that, we are working on an auto-bridge feature
                which allows you to send your Legacy Token (LGCT)s from one
                blockchain to another without needing to bridge them first.
              </p>
            </div>
          </div>
        </TabPanel>
      </div>
    </section>
  );
}

export default Ln;
