import styles from './TeamSlider.module.scss';
import TeamCard from '../TeamCard/TeamCard';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { IconButton, useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useStore from '../../../store/store';

function TeamSlider({team, offset}) {
  const containerRef = useRef(null);
  const { isDarkMode } = useStore();
  const [x, setX] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [slideIndex, setIndex] = useState(0);
  /* length of list times scroll offset * 0.5 (half of the photos occupy the screen initially) */
  const maxRight = team.length * offset * -0.5
  /* Amount of cards visible at once */
  const visibleCards = isDesktop ? 4 : 2;
  // const visibleCards = 4;
  const { uuid } = require('crypto')
  /* length - visible cards amount + current slideIndex - remainder */
  // const endOffset = team.length - visibleCards + slideIndex - (team.length % visibleCards)
  
  const handleRightClick = () => {
    if (slideIndex < team.length - visibleCards) {
      setX(x - 100)
      setIndex(slideIndex + 1)
    }
  }

  const handleLeftClick = () => {
    if (slideIndex > 0) {
      setX(x + 100)
      setIndex(slideIndex - 1)
    }
  }

  useEffect(() => {
    /* Initializes cards outside viewport to be hidden */
    for (let i = visibleCards; i < containerRef.current.children.length ; i++) {
      containerRef.current.children[i].style.opacity = 0
    }
    for (let i = 0; i < visibleCards ; i++) {
      containerRef.current.children[i].style.opacity = 1
    }
  }, [visibleCards])

  useEffect(() => {
      const length = containerRef.current.children.length 
      containerRef.current.children[slideIndex].style.opacity = '1'
      if (slideIndex > 0) {
        containerRef.current.children[slideIndex - 1].style.opacity = '0'
      }
      if (isDesktop) {
        
        /* Divide cards into length / visibleCards amount of sections and move through them with slideIndex */
        const endOffset = Math.ceil(team.length / visibleCards) + 1 + slideIndex
        if (length !== endOffset ) {
          containerRef.current.children[endOffset].style.opacity = '0'
        }
        containerRef.current.children[endOffset - 1].style.opacity = '1'
      } else {
        if (slideIndex + 1) {
          containerRef.current.children[slideIndex + 1].style.opacity = '1'
        }

      }
    }, [slideIndex])
  
  return (
    <div className={`
      ${styles['wrapper']}
      ${isDarkMode ? '' : `${styles['light']}`}
    `}>
      <div className={`${styles['arrows-wrapper']}`}>
        <IconButton onClick={handleLeftClick}>
          <WestIcon />
        </IconButton>
        <IconButton onClick={handleRightClick}>
          <EastIcon />
        </IconButton>
      </div>
      <div
        ref={containerRef}
        className={styles['cards-wrapper']}
      >
        {
          team.map((member, index) => (
            <TeamCard
              key={uuid}
              member={member}
              index={index}
              style={{
                translate: `${slideIndex * -100}% 0`
                // transform: `translateX(${x}%)`
              }}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TeamSlider