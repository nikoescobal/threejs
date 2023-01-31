/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './products.module.scss';
import { lnfunctions } from '../Questions/content';
import TabPanel from '../../Generic/TabPanel/TabPanel';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';
import Link from 'next/link';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LeftArrow from '../../../public/icons/double-arrow-left.svg';
import RightArrow from '../../../public/icons/double-arrow-right.svg';
import BlurredImage from '../../../public/mockups/legacy-health-blurred.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination, Autoplay } from 'swiper';

function Products() {
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
      max-1920
    `}
    >
      <h3 className={styles['products-title']} style={{ position: 'relative' }}>
        {content[locale].title}
      </h3>
      <div
        className={`${styles['tabs-wrapper']}`}
        style={{ position: 'relative' }}
      >
        <Tabs
          Z
          className={`${styles['tab-list']}`}
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          <Tab
            className={`${styles['tab-button']}`}
            label={'Legacy Main App'}
            {...a11yProps(0)}
          />
          <Tab
            className={`${styles['tab-button']}`}
            label={'Legacy Wallet'}
            {...a11yProps(1)}
          />
          <Tab
            className={`${styles['tab-button']}`}
            label={'Legacy Health'}
            {...a11yProps(2)}
          />
          <Tab
            className={`${styles['tab-button']}`}
            label={'Legacy NFT'}
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel
          key={uuid}
          value={value}
          className={styles['tab-item']}
          style={{ paddingLeft: 0, paddingRight: 0 }}
          index={0}
        >
          <LegacyMainAppTab />
        </TabPanel>
        <TabPanel
          key={uuid}
          value={value}
          className={styles['tab-item']}
          style={{ paddingLeft: 0, paddingRight: 0 }}
          index={1}
        >
          <LegacyWalletTab />
        </TabPanel>
        <TabPanel
          key={uuid}
          value={value}
          className={styles['tab-item']}
          style={{ paddingLeft: 0, paddingRight: 0 }}
          index={2}
        >
          <LegacyHealthTab />
        </TabPanel>
        <TabPanel
          key={uuid}
          value={value}
          className={styles['tab-item']}
          style={{ paddingLeft: 0, paddingRight: 0 }}
          index={3}
        >
          <LegacyNFTTab />
        </TabPanel>
      </div>
    </section>
  );
}

const PanelContainer = ({ leftContent, rightContent, className }) => {
  return (
    <div className={`${styles['panel-container']} ${className}`}>
      <div className={styles['left-content']}>
        {leftContent}
        {/* <img src={panel.img} alt="Products mockup" /> */}
      </div>
      <div className={styles['right-content']}>{rightContent}</div>
    </div>
  );
};

const LegacyMainAppTab = () => {
  return (
    <PanelContainer
      className={styles['panel-spacing']}
      leftContent={
        <div className={styles['image-wrapper']}>
          <img
            className={styles['image']}
            src="/mockups/legacy-main.png"
            alt="legacy main mockup"
          />
        </div>
      }
      rightContent={
        <article>
          <h4>Legacy Main App</h4>
          <p className={styles['legacy-main-text']}>
            In the education area of the app, the user can choose from various
            categories. Each category contains content, which can be text,
            video, animation, podcast (audio content) and other forms.
          </p>
          <br />
          <p>
            Each category has its own level system. The AI uses targeted
            questions, user behavior, feedback app tracking and other parameters
            to decide how advanced the user already is and which content is
            relevant to them. This makes the system usable for everyone, whether
            beginner or professional. The content consists of both a theoretical
            and a practical part.
          </p>
          <Link href="/about-us">
            <a className="button-blue">Learn more &#8594;</a>
          </Link>
        </article>
      }
    />
  );
};

const LegacyWalletTab = () => {
  const [expanded, setExpanded] = useState(0);

  const handleExpandChange = (index) => {
    setExpanded(index);
  };

  const LegacyWalletImages = [
    '/mockups/managing.png',
    '/mockups/staking.png',
    '/mockups/vesting.png',
    '/mockups/bridging.png',
  ];

  return (
    <>
      <PanelContainer
        className={styles['panel-spacing']}
        leftContent={
          <div className={styles['image-wrapper']}>
            <img
              className={styles['managing-mockup']}
              src={LegacyWalletImages[expanded]}
              alt="managing mockup"
            />
          </div>
        }
        rightContent={
          <article className={styles['nft-right']}>
            <div className={styles['tab-content']}>
              <h4 className={styles['legacy-wallet-title']}>Legacy Wallet</h4>
              <p className={styles['legacy-wallet-subtitle']}>
                The Legacy wallet provides the following functions:
              </p>
              <Accordion
                expanded={expanded === 0}
                onChange={() => handleExpandChange(0)}
                elevation={0}
                disableGutters
                square
              >
                <AccordionSummary
                  expandIcon={expanded !== 0 ? <AddIcon /> : <RemoveIcon />}
                  aria-controls={`FAQ-${0}-content`}
                  className={styles['tab-summary']}
                >
                  <Typography className={styles['accordion-heading']}>
                    {'Managing'}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles['tab-details']}>
                  <p>
                    Manage your favorite cryptos in a secure non-custodial
                    wallet. The legacy wallet allows you to easily hold, send
                    and receive tokens on multiple blockchains.
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 1}
                onChange={() => handleExpandChange(1)}
                elevation={0}
                disableGutters
                square
              >
                <AccordionSummary
                  expandIcon={expanded !== 1 ? <AddIcon /> : <RemoveIcon />}
                  aria-controls={`FAQ-${1}-content`}
                  className={styles['tab-summary']}
                >
                  <Typography className={styles['accordion-heading']}>
                    Staking
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles['tab-details']}>
                  <Typography className={styles['accordion-heading']}>
                    As a long-term believer, you can stake your Legacy Token
                    (LGCT)s for 6, 12, or 24 months to benefit from exclusive
                    rewards. Alternatively, the flexible staking option can be
                    used, so you can withdraw your funds at any time.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 2}
                onChange={() => handleExpandChange(2)}
                elevation={0}
                disableGutters
                square
              >
                <AccordionSummary
                  expandIcon={expanded !== 2 ? <AddIcon /> : <RemoveIcon />}
                  aria-controls={`FAQ-${2}-content`}
                  className={styles['tab-summary']}
                >
                  <Typography className={styles['accordion-heading']}>
                    Vesting
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles['tab-details']}>
                  <Typography>
                    As a private sale, public sale or giveaway participant, you
                    can claim your vested Legacy Token (LGCT)s directly in the
                    wallet. The feature calculates the claimable amount live, so
                    tokens can be claimed in an interval of your choice.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 3}
                onChange={() => handleExpandChange(3)}
                elevation={0}
                disableGutters
                square
              >
                <AccordionSummary
                  expandIcon={expanded !== 3 ? <AddIcon /> : <RemoveIcon />}
                  aria-controls={`FAQ-${3}-content`}
                  className={styles['tab-summary']}
                >
                  <Typography className={styles['accordion-heading']}>
                    Bridging
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles['tab-details']}>
                  <Typography className={styles['accordion-heading']}>
                    Bridge your Legacy Token (LGCT)s between the supported
                    blockchains in an instant thanks to our SafeSwap
                    integration. Atomic swaps are used which makes bridging
                    cheap, fast and secure. More than that, we are working on an
                    auto-bridge feature which allows you to send your Legacy
                    Token (LGCT)s from one blockchain to another without needing
                    to bridge them first.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </article>
        }
      />
    </>
  );
};
const LegacyHealthTab = () => {
  return (
    <div className={styles['blurred-image-wrapper']}>
      <img src={BlurredImage.src} className={styles['blur']} />
    </div>
  );
};

const LegacyNFTTab = () => {
  const slides = [
    {
      img: '/mockups/viking2.png',
      alt: 'Viking Character Example',
      title: 'Viking Character Example',
    },
    {
      img: '/mockups/aztec.png',
      alt: 'Aztec Character Example',
      title: 'Aztec Character Example',
    },
    {
      img: '/mockups/egyptian.png',
      alt: 'Egyptian Character Example',
      title: 'Egyptian Character Example',
    },
    {
      img: '/mockups/african.png',
      alt: 'African Character Example',
      title: 'Viking Character Example',
    },
    {
      img: '/mockups/greek.png',
      alt: 'Greek Character Example',
      title: 'Greek Character Example',
    },
  ];

  const ImageSlider = ({ slides }) => {
    console.log('slides', slides);
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    const { uuid } = require('crypto');

    return (
      <div className={styles['slider']}>
        {slides.map((slide, index) => (
          <div
            className={`${styles['nft-wrapper']} ${
              index === currentSlide ? 'slide active' : 'slide'
            }`}
            key={uuid}
          >
            {index === currentSlide && (
              <div className={styles['slide-wrapper']}>
                <img
                  className={styles['slide']}
                  src={slide.img}
                  alt={slide.alt}
                  title={slide.title}
                />
                <p className={styles['slide-text']}>{slide.title}</p>
              </div>
            )}
          </div>
        ))}
        <div className={styles['nft-button-wrapper']}>
          <button className={styles['arrow-wrapper']} onClick={prevSlide}>
            <img
              className={styles['arrow-left']}
              src={LeftArrow.src}
              alt="left arrow"
            />
          </button>
          <button className={styles['arrow-wrapper']} onClick={nextSlide}>
            <img
              className={styles['arrow-right']}
              src={RightArrow.src}
              alt="right arrow"
            />
          </button>
        </div>

        <div className={styles['circle-slider-wrapper']}>
          {slides.map((slide, index) => (
            <span
              key={uuid}
              className={`${styles['circle-slider']} ${
                index === currentSlide ? `${styles['circle-active']}` : ''
              }`}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <PanelContainer
      className={`${styles['panel-wrapper']} ${styles['nft-panel']} ${styles['panel-spacing']}`}
      leftContent={
        <div className={styles['image-wrapper']}>
          <ImageSlider slides={slides} />
        </div>
      }
      rightContent={
        <div className={styles['nft-right']}>
          <h4>Legacy NFT</h4>
          <p>What</p>
          <br />

          <p>
            The Legacy Network NFT is an in-game character with a unique set of
            features. There are 5 different tribes that hold the legacy. They
            come in different forms of animation, face props, armour, colour,
            and character traits. Each trait such as character, animation, face
            prop, etc. also has multiple tiers of rarity, resulting in unique
            and epic combinations for you to own!
          </p>
          <br />

          <hr></hr>
          <br />

          <p>Total NFTs</p>
          <br />

          <p>Legendary NFTs</p>
        </div>
      }
    />
  );
};

export default Products;
