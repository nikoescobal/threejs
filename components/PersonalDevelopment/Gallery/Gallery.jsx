import styles from './Gallery.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { shuffle } from '../../../utils';
import FsLightbox from "fslightbox-react";

function Gallery() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')
  // const [timerRef] = useRef()
  // const [images, setImages] = useState([...shuffle(content.full)])
  const [images, setImages] = useState(content.full)
  // const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxController, setLightboxController] = useState({ toggler: false, slide: 1});
console.log(images);
  // useEffect(() => {
  //   let arr = []
  //   const interval = setInterval(() => {
  //     setImages([...shuffle(content.full)]);
  //   }, 5000)

  //   return () => clearInterval(interval);
  // }, [])

  const handleImageOpen = (imageSrc) => {
    console.log(imageSrc);
    const index = content.full.findIndex((image) => image === imageSrc)
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1
    })
  }

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
      <FsLightbox
				toggler={lightboxController.toggler}
				sources={content.full}
        slide={lightboxController.slide}
			/>
      <div className={styles['grid']}>
        {
          [0,1,2,3].map((index) => (
            <div
              key={uuid}
              className={styles['img-wrapper']}
              // style={{background: `url(${images[index]})`}}
              onClick={() => handleImageOpen(images[index])}
            >
              <img src={images[index]} alt="gallery preview" />
            </div>
          ))
        }
        <div className={styles['text-wrapper']}>
          <h2>{content[locale].title}</h2>
          <p>{content[locale].description}</p>
        </div>
      </div>
      
    </section>
  );
}

export default Gallery;
