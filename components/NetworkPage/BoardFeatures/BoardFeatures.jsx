import styles from './BoardFeatures.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import AlternatingGrid from '../../Generic/AlternatingGrid/AlternatingGrid';
import { Button, Tab, Tabs } from '@mui/material';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';
import { a11yProps } from '../../../utils';
import TabPanel from '../../Generic/TabPanel/TabPanel';
import { useState } from 'react';

function BoardFeatures() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
        max-1920
      `}
    >
      <h2>{content[locale].title}</h2>
      <p>{content[locale].description}</p>

      <Tabs value={value} className={styles['tabs-wrapper']} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Community Board" className={styles.tab} {...a11yProps(0)} />
        <Tab label="Partners Board" className={styles.tab} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={styles.grid}>
          {content[locale].community_items.map((item) => (
            <div key={uuid} className={styles['item']}>
              <span>{item.top_text}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <List className={styles.list}>
                {item.features.map((feature) => (
                  <ListItem key={uuid} className={styles['list-item']}>{feature}</ListItem>
                ))}
              </List>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.grid}>
          {content[locale].partners_items.map((item) => (
            <div key={uuid} className={styles['item']}>
              <span>{item.top_text}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <List className={styles.list}>
                {item.features.map((feature) => (
                  <ListItem key={uuid} className={styles['list-item']}>{feature}</ListItem>
                ))}
              </List>
            </div>
          ))}
        </div>
      </TabPanel>
    </section>
  );
}

export default BoardFeatures;
