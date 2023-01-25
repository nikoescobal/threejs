/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './about.module.scss';
import useStore from '../../../store/store';
import TabPanel from '../../Generic/TabPanel/TabPanel';
import { useState } from 'react';
import content from './content';
import { useRouter } from 'next/router';

const titles = {
  en: [
    'ABOUT US',
    'OUR VISION',
    'THE PROBLEM',
    'OUR SOLUTION',
  ],
  de: [
    'Über uns',
    'Unsere Vision',
    'Das Problem',
    'Unsere Lösung',
  ]
}

function About() {
  const { isDarkMode } = useStore((state) => state);
  const [value, setValue] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
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
      className={`${styles['about-section']} ${
        isDarkMode ? '' : `${styles.light}`
      } spacing-x`}
    >
      {isDesktop && (
        <div className={`${styles['tabs-wrapper']}`}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            {
              titles[locale].map((title, index) => (
                <Tab key={uuid} label={title} {...a11yProps(index)} />
              ))
            }
            {/* <Tab label="ABOUT US" {...a11yProps(0)} />
            <Tab label="OUR VISION" {...a11yProps(1)} />
            <Tab label="THE PROBLEM" {...a11yProps(2)} />
            <Tab label="OUR SOLUTION" {...a11yProps(3)} /> */}
          </Tabs>
          {
            content[locale].map((panel, index) => (
              <TabPanel
                key={panel.title}
                className={`${styles['tab-list']} ${
                  isDarkMode ? '' : `${styles.light}`
                }`}
                value={value}
                index={index}
              >
                <h4>{panel.title}</h4>
                <p dangerouslySetInnerHTML={{__html: panel.description}} />
              </TabPanel>
            ))
          }
        </div>
      )}
      {!isDesktop && (
        <div className={`${styles['accordian-wrapper']}`}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>ABOUT US</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Legacy Network is an international technology company based in
                Liechtenstein/ Switzerland. Our mission is to improve
                people&apos;s lives by developing innovative technology and
                building international communities around personal development.
                We firmly believe that personal development is the key to
                success in all life areas, as well as the solution for many
                global problems. For this reason, we committed ourselves to find
                new ways in order to provide something of true value to the
                world. Our central product is a gamified education app, which
                uses a play-to-earn system to reward its users with crypto. The
                app is powered by the first ever artificial intelligence, which
                analyses several aspects of a user&apos;s personality and
                reflects the collected information back to him.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>OUR VISION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span>Our vision</span> is to create the world&apos;s biggest
                personal development ecosystem with our technology as the gate
                to a successful and fulfilling life. Great technology should
                work for the user, not against him. We live in an era, where big
                tech companies know much more about us and our psychology, than
                we do. This valuable data is used to sell us more products and
                to make us neurologically addicted to certain services. We aim
                to create a technology, which collects the same data but
                provides it to the user, A technology, developed to give people
                deep insights into the programming and functionality of their
                own brain along with individual and playful step by step
                guidance on how to use the new gained knowledge in their own
                favor.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>THE PROBLEM</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                As things stand today, over 35% of people in Europe suffer from
                a mental illness that requires treatment. This does not include
                harmful behaviors and traits that severely limit a person&apos;s
                quality of life but are not recognized as an illness. The
                average person today is plagued by: Diverse anxieties, sleep
                disturbances, recurring negative emotions as well as poor
                physical condition. These matters in turn negatively impact his
                success in various key areas of life. We humans tend to perceive
                certain circumstances as &ldquo;not so bad&rdquo; as far as most
                of them are concerned. In reality, the facts mentioned have
                disastrous consequences both for the individuals affected and
                for society as a whole.
              </Typography>
              <br />
              <Typography>
                Aggression, hatred and criminality within society are largely
                due to frustration. Frustration, in turn, can be attributed
                mainly to a lack of success in important areas of life. The main
                reason for the described problem lies mainly in the human
                preference for short-term gratification over long-term success,
                happiness and long-term health as a basic condition. In general,
                it can be said that the average person of today is trapped in a
                state of aimless distraction and lacks the necessary strategies
                and tools to escape from it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>OUR SOLUTION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We are developing a logic-respectively science-based play to
                earn system, which explains to the user in a playful way his own
                behavior as well as that of his fellow people and teaches him
                step by step effective life strategies. The user learns
                important skills that supports him actively and independently to
                create a fulfilling and successful life. The content is mainly
                from the fields of psychology, sociology, neurology and biology.
                The contents originate from experts and is subject to strict
                quality control. Our goal with the play-to-earn system is for
                the user to not view the learning process as an expense. Even
                though we have no direct competition in terms of the technology,
                we still compete with other companies for the user&apos;s
                attention.
              </Typography>
              <br />
              <Typography>
                A big problem of our time is the neurological dependence on
                dopamine, or short-term reward release in the brain. By
                designing our system to create what in this case is a positive
                dependency, we ensure that our ecosystem is actively used and
                that the user retains his motivation.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </section>
  );
}

export default About;
