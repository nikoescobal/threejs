import styles from './MemoryGame.module.scss';
import Hammer from '../../../public/weapons/hammer-2.png';
import Spikes from '../../../public/weapons/spikes.png';
import axios from 'axios';
import MemoryGameGrid from '../MemoryGameGrid/MemoryGameGrid';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';
import useStore from '../../../store/store';
import { Button, useMediaQuery } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import { Fireworks } from '@fireworks-js/react'

function MemoryGame() {
  const [newGame, setNewGame] = useState(false);
  const [list, setList] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [duration, setDuration] = useState(0);
  const isTablet = useMediaQuery('(min-width: 768px');
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const [start, setStart] = useState(false);
  const [restart, setRestart] = useState(false);

  const checkItems = (firstIndex, secondIndex) => {
    if (
      firstIndex !== secondIndex &&
      list[firstIndex].url === list[secondIndex].url
    ) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    } else {
      setTimeout(() => {
        setVisibleItems([]);
      }, 600);
    }
  };

  const handleNewGame = () => {
    setNewGame(!newGame);
    setVisibleItems([]);
    setFinishedItems([]);
    setWinner(false);
  }

  useEffect(
    () => {
      axios
        .get(
          "https://api.unsplash.com/search/photos/?client_id=c0c103ae0af5122685dec516d4275b6471e81c388d2ce0791c61bb8f47285d5d&query=woman&per_page=6"
        )
        .then(res => {
          // const newList = res.data.results.map(item => {
          //   return {
          //     id: item.id,
          //     url: item.urls.thumb,
          //     description: item.alt_description
          //   };
          // });
          // console.log(newList);
          setList(
            content.pictures
              .concat(
                content.pictures.map(item => {
                  return {
                    ...item,
                    id: item.id + "1"
                  };
                })
              )
              .sort(() => {
                return 0.5 - Math.random();
              })
          );
        });
    },
    // const newList = 
    // setList(
    //   content.pictures
    //     .concat(
    //       content.pictures.map(item => {
    //         return {
    //           ...item,
    //           id: item.id + "1"
    //         };
    //       })
    //     )
    //     .sort(() => {
    //       return 0.5 - Math.random();
    //     })
    // ),
    [newGame]
  );

  // const durationIntervalRef = useInterval(
  //   durationRef => {
  //     durationRef.current++;
  //     setDuration(durationRef.current);
  //   },
  //   1000,
  //   duration
  // );

  useEffect(() => {
      if (finishedItems.length > 0 && finishedItems.length === list.length) {
        setWinner(true);
        setRestart(true);
        setStart(false);
        // clearInterval(durationIntervalRef.current);
      }
    }, [finishedItems]);

  useEffect(() => {
    if (winner) {
      // setRestart(true)
      const interval = setInterval(() => {
        setWinner(false)
      }, 5000)

      return () => clearInterval(interval);
    }
  }, [winner])
  
  return (
    <div className={`
      ${styles.wrapper}
      ${!isDarkMode ? styles['light'] : ''}
      spacing-x
      max-1920
      `}
    >
      {isTablet ? (
            <>
              <Parallax speed={30} className={styles['hammer']}>
                <Image className="" src={Hammer} alt="hammer" draggable="false" />
              </Parallax>
              <Parallax speed={60} className={styles['spikes']}>
                <Image className="" src={Spikes} alt="spikes" draggable="false" />
              </Parallax>
            </>
          ) : (
            <>
              <div className={styles['hammer']}>
                <Image className="" src={Hammer} alt="hammer" draggable="false" />
              </div>
              <div className={styles['spikes']}>
                <Image className="" src={Spikes} alt="spikes" draggable="false" />
              </div>
            </>
          )}
      <div className={styles.top}>
        <h2>{content[locale].title}</h2>
        <p>{content[locale].description}</p>
      </div>
        <img src="/weapons/spear-cropped.png" alt='spear weapon' className={styles.spear} />
      {/* <button
        onClick={() => {
          setNewGame(!newGame);
          setVisibleItems([]);
          setFinishedItems([]);
          setWinner(false);
        }}
        className="btn btn-warning mb-4"
      >
        New Game
      </button> */}
      {list.length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className={styles['game-wrapper']}>
          {/* {
            !start
              ? <div>
                  <Button onClick={() => setStart(true)}>Start</Button>
                </div>
              : null
          } */}
          <MemoryGameGrid
            list={list}
            visibleItems={visibleItems}
            setVisibleItems={setVisibleItems}
            finishedItems={finishedItems}
            checkItems={checkItems}
            gameStart={start}
            gameRestart={restart}
            onRestart={handleNewGame}
            hasWon={restart}
            onGameStart={() => setStart(true)}
          />
          {winner && (
            <Fireworks
              options={{
                rocketsPoint: {
                  min: 0,
                  max: 100
                },
                sound: {
                  enabled: true,
                  volume: {
                    min: 2,
                    min: 4
                  },
                  files: [
                    'https://fireworks.js.org/sounds/explosion0.mp3',
                    'https://fireworks.js.org/sounds/explosion1.mp3',
                    'https://fireworks.js.org/sounds/explosion2.mp3',
                  ]
                }
              }}
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                position: 'fixed',
                background: 'transparent'
              }}
            />
          )}
        </div>
      )}
      <img src="/weapons/spear-cropped.png" alt='spear weapon' className={styles.spear} />
    </div>
  )
}


export default MemoryGame