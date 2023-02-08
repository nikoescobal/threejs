import styles from './TeamSlider.module.scss';
import TeamCard from '../TeamCard/TeamCard';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { IconButton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useStore from '../../../store/store';

function TeamSlider({team, offset}) {
  const containerRef = useRef(null);
  const { isDarkMode } = useStore();
  const [x, setX] = useState(0);
  const [index, setIndex] = useState(0);
  /* length of list times scroll offset * 0.5 (half of the photos occupy the screen initially) */
  const maxRight = team.length * offset * -0.5
  /* Amount of cards visible at once */
  const visibleCards = 4;
  const { uuid } = require('crypto')
  /* length - visible cards amount + current index - remainder */
  // const endOffset = team.length - visibleCards + index - (team.length % visibleCards)
  
  const handleRightClick = () => {
    if (index < team.length - visibleCards) {
      setX(x - 100)
      setIndex(index + 1)
    }
  }

  const handleLeftClick = () => {
    if (x < 0) {
      setX(x + 100)
      setIndex(index - 1)
    }
  }

  useEffect(() => {
    /* Initializes cards outside viewport to be hidden */
    for (let i = visibleCards; i < containerRef.current.children.length ; i++) {
      containerRef.current.children[i].style.opacity = 0
    }
  }, [])

  useEffect(() => {
      const length = containerRef.current.children.length 
      containerRef.current.children[index].style.opacity = '1'
      if (index > 0) {
        containerRef.current.children[index - 1].style.opacity = '0'
      }
      /* Divide cards into length / visibleCards amount of sections and move through them with index */
      const endOffset = Math.ceil(team.length / visibleCards) + 1 + index
      if (length !== endOffset ) {
        containerRef.current.children[endOffset].style.opacity = '0'
      }
      containerRef.current.children[endOffset - 1].style.opacity = '1'
  }, [index])
  
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
                translate: `${x}% 0`
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