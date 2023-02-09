import { useState } from 'react';
import { Button, Tab, Tabs, useMediaQuery } from '@mui/material';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import content from './content';
import styles from './roadmap.module.scss';
import useStore from '../../../store/store';
import { useRouter } from 'next/router';
import { a11yProps } from '../../../utils';
import TabPanel from '../TabPanel/TabPanel';
import CheckIcon from '@mui/icons-material/Check';

export default function RoadmapNew() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');
  const [value, setValue] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const visiblePanels = isDesktop ? 2 : 1;
  const pages = Math.ceil(content.en.tab_panels.Legacy.length / visiblePanels)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRightClick = () => {
    if (slideIndex < pages - 1) {
      setSlideIndex(slideIndex + 1)
    }
  }
  
  const handleLeftClick = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    }
  }
  
  return (
    <section
      className={`
        ${styles['wrapper']}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
        max-1920
        `}
    >
      <div className={styles['heading']}>
        <h2 className={styles['title']}>Our Roadmap</h2>
        {/* <Tabs value={value} className={styles['tabs-wrapper']} onChange={handleChange}>
          {content.en.tabs.map((tab) => (
            <Tab key={uuid} label={tab} {...a11yProps(0)} />
          ))}
        </Tabs> */}
        <div className={styles['tabs-wrapper']}>
          {content.en.tabs.map((tab) => (
            <Button className='button-blue' key={uuid}>{tab}</Button>
          ))}
        </div>
      </div>

      <div className={styles.main}>
        {
          // content.en.tab_panels[content.en.tabs[value]].map((tabPanel, index) => (
          content.en.tab_panels.Legacy.map((tabPanel, index) => (
            // <TabPanel key={uuid} value={value} index={index}>
            <div key={uuid} className={styles.panel} style={{translate: `${slideIndex * visiblePanels * -100}% 0`}}>
              <div className={styles['panel-headers']}>
                <span>{tabPanel.phase}</span>
                <span>{tabPanel.date}</span>
              </div>
              <CheckIcon
                className={`${styles['panel-checkmark']} ${tabPanel.content.includes((el) => el.isChecked) ? styles.complete : ''}`}
                data-complete={tabPanel.content.some((el) => el.isChecked)}
              />
              <div>
                <ul>
                  {
                    tabPanel.content.map((listItem) => (
                      <li key={uuid} data-complete={listItem.isChecked}>
                        <CheckIcon />
                        {listItem.content}
                      </li>
                    ))
                  }
                </ul>
              </div>

            </div>
            // </TabPanel>
          ))
        }
      </div>
      <div className={styles['arrows-wrapper']}>
        <IconButton onClick={handleLeftClick}>
          <NavigateBeforeIcon />
        </IconButton>
          {slideIndex + 1}
          /
          {pages}
        <IconButton onClick={handleRightClick}>
          <NavigateNextIcon />
        </IconButton>
      </div>
    </section>
  );
}
