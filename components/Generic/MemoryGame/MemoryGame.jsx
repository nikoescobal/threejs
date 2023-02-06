import styles from './MemoryGame.module.scss';
import Hammer from '../../../public/weapons/hammer-2.png';
import Spikes from '../../../public/weapons/spikes.png';
import axios from 'axios';
import MemoryGameGrid from '../MemoryGameGrid/MemoryGameGrid';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';
import useStore from '../../../store/store';
import { useMediaQuery } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

function MemoryGame() {
  const [newGame, setNewGame] = useState(false);
  const [list, setList] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [duration, setDuration] = useState(0);
  const isTablet = useMediaQuery('(min-width: 768px');
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);
  const { isDarkMode } = useStore();
  const { locale } = useRouter()

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

  useEffect(
    () => {
      axios
        .get(
          "https://api.unsplash.com/search/photos/?client_id=c0c103ae0af5122685dec516d4275b6471e81c388d2ce0791c61bb8f47285d5d&query=flower&per_page=6"
        )
        .then(res => {
          const newList = res.data.results.map(item => {
            return {
              id: item.id,
              url: item.urls.thumb,
              description: item.alt_description
            };
          });
          setList(
            newList
              .concat(
                newList.map(item => {
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

  useEffect(
    () => {
      if (finishedItems.length > 0 && finishedItems.length === list.length) {
        setWinner(true);
        // clearInterval(durationIntervalRef.current);
      }
    },
    [finishedItems]
  );
  
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
        <div>
          <MemoryGameGrid
            list={list}
            visibleItems={visibleItems}
            setVisibleItems={setVisibleItems}
            finishedItems={finishedItems}
            checkItems={checkItems}
          />
          {winner && (
            <div>
              You Win !
              <br />
              {/* Finished in {duration} seconds */}
            </div>
          )}
        </div>
      )}
      <img src="/weapons/spear-cropped.png" alt='spear weapon' className={styles.spear} />
    </div>
  )
}


export default MemoryGame