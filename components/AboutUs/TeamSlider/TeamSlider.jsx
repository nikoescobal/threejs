import styles from './TeamSlider.module.scss';
import TeamCard from '../TeamCard/TeamCard';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { IconButton } from '@mui/material';
import { useState } from 'react';

function TeamSlider({team, offset}) {
  const [x, setX] = useState(0);
  /* length of list times scroll offset * 0.5 (half of the photos occupy the screen initially) */
  const maxRight = team.length * offset * -0.5
  
  const handleRightClick = () => {
    if (x > maxRight) {
      setX(x - 100)
    }
  }

  const handleLeftClick = () => {
    if (x < 0) {
      setX(x + 100)
    }
  }
  
  return (
    <div className={styles['wrapper']}>
      <div className={`${styles['arrows-wrapper']}`}>
        <IconButton onClick={handleLeftClick}>
          <WestIcon />
        </IconButton>
        <IconButton onClick={handleRightClick}>
          <EastIcon />
        </IconButton>
      </div>
      <div
        className={styles['cards-wrapper']}
      >
        {
          team.map((member) => (
            <TeamCard key={member.name} member={member} style={{
              transform: `translateX(${x}%)`
            }} />
          ))
        }
      </div>
    </div>
  )
}

export default TeamSlider