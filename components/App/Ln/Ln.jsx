/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './ln.module.scss';
import { lnfunctions } from '../Questions/content';
import TabPanel from '../../Generic/TabPanel/TabPanel';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import Waves from '../../../public/backgrounds/waves-updated.svg';
import { useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';

function Ln() {
  const { isDarkMode } = useStore();
  const [value, setValue] = useState(0);
  const { locale } = useRouter();
  const { uuid } = require('crypto');

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
      <h3 style={{ position: 'relative' }}>{content[locale].title}</h3>
      <div
        className={`${styles['tabs-wrapper']}`}
        style={{ position: 'relative' }}
      >
        {
          content[locale].panels.map((panel, panelIndex) => (
            <TabPanel key={uuid} value={value} className={styles['tab-item']} index={panelIndex}>
              <div>
                <img src={panel.img} alt="Managing mockup" />
              </div>
              <div>
                <Tabs
                  className={`${styles['tab-list']}`}
                  value={value}
                  onChange={handleChange}
                  aria-label="tabs"
                >
                  {content[locale].tabs.map((tab, index) => (
                    <Tab key={uuid} label={tab} {...a11yProps(index)} />
                  ))}
                </Tabs>
                <div className={styles['tab-spacing']} dangerouslySetInnerHTML={{__html: panel.content}} />
              </div>
            </TabPanel>
          ))
        }
      </div>
    </section>
  );
}

export default Ln;
