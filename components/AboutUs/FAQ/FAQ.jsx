import { useState } from 'react';
import styles from './faq.module.scss';
import content from './content';
import useStore from '../../../store/store';
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function FAQ() {
  const [selectedTab, setSelectTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const { isDarkMode } = useStore();
  
  const handleTabSelection = (index) => {
    setSelectTab(index)
    setExpanded(false);
  }

  const handleExpandChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''} spacing-x max-1920`}>
      <h3>Frequently Asked Questions</h3>
      <div className={styles['tab-headings']}>
        {
          content.map((item, index) => (
            <Button key={item.title} className={`${selectedTab === index ? `${styles.active}` : ''}`} onClick={() => handleTabSelection(index)}>{item.title}</Button>
          ))
        }
      </div>
      <div className={styles['tab-content']}>
        {
          content[selectedTab].content.map((list, index) => (
            <Accordion
              key={list.question}
              expanded={expanded === index + 1}
              onChange={handleExpandChange(index + 1)}
              elevation={0}
              disableGutters
              square>
              <AccordionSummary
                // expandIcon={<AddIcon />}
                expandIcon={expanded !== index + 1 ? <AddIcon /> : <RemoveIcon />}
                aria-controls={`FAQ-${index + 1}-content`}
                className={styles['tab-summary']}
              >
                <Typography>
                  {list.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles['tab-details']}>
                {/* <Typography> */}
                  
                  <div dangerouslySetInnerHTML={{__html: list.answer}}>
                  </div>
                {/* </Typography> */}
              </AccordionDetails>
            </Accordion>
          ))
        }
      </div>
    </div>
  )
}

export default FAQ