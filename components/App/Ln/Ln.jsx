/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './ln.module.scss';
import { lnfunctions } from '../Questions/content';
import TabPanel from '../../Generic/TabPanel/TabPanel';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import Phone1 from '../../../public/mockups/1.png';
import Phone2 from '../../../public/downloads/download1.png';
import Phone3 from '../../../public/downloads/download2.png';
import Phone4 from '../../../public/mockups/3.png';
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
      <h3>Pre-launch App</h3>
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
            <img src={Phone1.src} alt="phone" />
          </div>
          <div>
            <h4>Non-custodial wallet</h4>
            <p>
              The Legacy Network blockchain wallet allows for easy on-boarding
              with a seed pharase and flexibility to receive, send, stake and
              vest the LGCN Token across crypto users. Payment rails for fiat
              on-boarding, KYC/AML, NFT support, and the LGCN token. We&apos;ve
              handled it all to make it easy for you to enage in a game with
              your community participating in your success.
            </p>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={1}>
          <div>
            <img src={Phone2.src} alt="phone" />
          </div>
          <div>
            <h4>Header 2</h4>
            <p>Text 2</p>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={2}>
          <div>
            <img src={Phone3.src} alt="phone" />
          </div>
          <div>
            <h4>Header 3</h4>
            <p>text here</p>
          </div>
        </TabPanel>
        <TabPanel value={value} className={styles['tab-item']} index={3}>
          <div>
            <img src={Phone4.src} alt="phone" />
          </div>
          <div>
            <h4>Header 4</h4>
            <p>text 4</p>
          </div>
        </TabPanel>
      </div>
    </section>
  );
}

export default Ln;
