import styles from './MemoryGameGrid.module.scss';
import { useState } from "react";
import useStore from "../../../store/store";
import MemoryGameTile from "../MemoryGameTile/MemoryGameTile";
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Fireworks } from '@fireworks-js/react'

function MemoryGameGrid(props) {
  const {
    list,
    visibleItems,
    setVisibleItems,
    finishedItems,
    checkItems,
    gameStart,
    gameRestart,
    onGameStart,
    hasWon,
    onRestart
  } = props;
  const { isDarkMode } = useStore();
  const [startVisible, setStartVisible] = useState(false);

  const handleOpen = (index) => {
    console.log('visible', visibleItems);
    console.log('finished', finishedItems);
    console.log('clicked')
    if (!finishedItems.includes(index)) {
      switch (visibleItems.length) {
        case 0:
          setVisibleItems([index]);
          console.log('1')
          break;
        case 1:
          if (visibleItems[0] !== index) {
            setVisibleItems(visibleItems.concat(index));
            console.log('2')
            checkItems(visibleItems[0], index);
          }
          break;
        case 2:
          setVisibleItems([index]);
          console.log('3')
          break;
        default:
          setVisibleItems([]);
          console.log('default')
      }
    }
  }

  const handleStart = () => {
    setStartVisible(true);
    onGameStart();
  }
  
  const handleRestart = () => {
    onRestart();
    setStartVisible(true);
    onGameStart();
  }

  const openCheck = (index) => {
    return startVisible || (gameStart && (visibleItems.includes(index) || finishedItems.includes(index)))
  }

  useEffect(() => {
    if (startVisible) {
      const interval = setInterval(() => {
        setStartVisible(false);
      }, 3000)

      return () => clearInterval(interval);
    }
  }, [startVisible])

  return (
    <div className={`
      ${styles['wrapper']}
      ${!isDarkMode ? styles['light'] : ''}
      `}
    >
      {
        !gameStart && !gameRestart
          ? <Button className='button-blue' onClick={handleStart}>Start</Button>
          : null
      }
      {
        !gameStart && gameRestart
          ? <Button className='button-blue' onClick={handleRestart}>Restart</Button>
          : null
      }
      <div className={styles['grid']}>
      <img src="/weapons/spear-cropped.png" alt='spear weapon' className={styles.spear} />
      <img src="/weapons/spear-cropped.png" alt='spear weapon' className={styles.spear} />
        {list.map((item, index) => (
          <MemoryGameTile
            key={item.id}
            hasGameStarted={gameStart}
            // opened={gameStart && (visibleItems.includes(index) || finishedItems.includes(index))}
            opened={openCheck(index)}
            finished={finishedItems.includes(index)}
            className={`col-3 card ${
              visibleItems.includes(index) ? "grid-card-show" : ""
            } ${
              finishedItems.includes(index)
                ? "grid-card-show grid-card-finished"
                : ""
            }`}
            onClick={() => handleOpen(index)}
            imgSource={item.url}
            imgDesc={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

MemoryGameGrid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  start: PropTypes.bool
}

MemoryGameGrid.defaultProps = {
  list: [],
  start: false,
};

export default MemoryGameGrid;
