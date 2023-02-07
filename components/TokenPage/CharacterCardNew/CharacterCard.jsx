import { style } from '@mui/system';
import Image from 'next/image';
import useStore from '../../../store/store';
import styles from './charactercard.module.scss';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LeftArrow from '../../../public/icons/double-arrow-left.svg';
import RightArrow from '../../../public/icons/double-arrow-right.svg';
import content from '../NFTSectionNew/content';
import { useRouter } from 'next/router';

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

const CharacterCard = () => {
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
      title: 'African Character Example',
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
                {/* <p className={styles['slide-text']}>{slide.title}</p> */}
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

  const { locale } = useRouter();
  const { uuid } = require('crypto');

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
          <div className={`${styles['chartext-wrapper']}`}>
            <h4>Legacy NFT</h4>
            <br />
            {content[locale].chartexts.map((chartext) => (
              <div key={uuid} className={`${styles['chartext']}`}>
                <div className={styles['title-wrapper']}>
                  <div className={styles['text-wrapper']}>
                    <p className={styles['number']}>{chartext.title}</p>
                    <p className={styles['title']}>{chartext.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <p>
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

          <p>Legendary NFTs</p> */}
        </div>
      }
    />
  );
};

export default CharacterCard;
