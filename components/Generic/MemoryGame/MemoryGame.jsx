import styles from './MemoryGame.module.scss';
import MemoryGameGrid from '../MemoryGameGrid/MemoryGameGrid';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import content from './content';
import useStore from '../../../store/store';
import { useMediaQuery } from '@mui/material';
import { Fireworks } from '@fireworks-js/react'
import { shuffle } from '../../../utils';
import { v4 as uuid } from 'uuid';

function MemoryGame() {
  const [newGame, setNewGame] = useState(false);
  const [list, setList] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [duration, setDuration] = useState(0);
  const isTablet = useMediaQuery('(min-width: 768px');
  const [finishedItems, setFinishedItems] = useState([]);
  const [displayList, setDisplayList] = useState([]);
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
      // console.log('id', list[firstIndex].id);
      // console.log('list', content.pictures);
      // console.log('finding', content.pictures.find((el) => el.id === list[firstIndex].id));
      const firstItem = content.pictures.find((el) => el.id === list[firstIndex].id)
      const secondItem = {...content.pictures.find((el) => el.id === list[secondIndex].id)}
      if (!firstItem) {
        secondItem.id = secondItem.id.substring(0, secondItem.id.length - 2)
      }
      const item = firstItem ? firstItem : secondItem
      // const item = foundItem ? foundItem : content.pictures.find((el) => el.id === (list[firstIndex].id).substring(0, list[firstIndex].id.length - 2))

      setDisplayList((prev) => [...prev, item])
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

useEffect(() => {
  console.log('list',list)
}, [list])

  useEffect(
    () => {
      const pics = [...content.pictures]; 
      setList(shuffle(pics
        .concat(
          pics.map(item => {
            return {
              ...item,
              id: item.id + "1"
            };
          })
        )))
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

  useEffect(() => {
    console.log('finished', finishedItems);
    console.log('displayList', displayList);
  }, [finishedItems])
  
  return (
    <>
      <div className={`
        ${styles.wrapper}
        ${!isDarkMode ? styles['light'] : ''}
        spacing-x
        max-1920
        `}
      >
        {/* {isTablet ? (
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
            )} */}
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
              setDisplayList={setDisplayList}
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
        <div className={`
          ${styles['revealed-cards-wrapper']}
          spacing-x
          max-1920
        `}
        data-show={!!displayList.length}
        >
          {
            displayList.map((picture) => (
              <div key={uuid()} className={styles['reveal-card']}>
                <img src={picture?.url} alt={picture?.alt} />
                <p>{picture?.description}</p>
              </div>
            ))
          }
        </div>
    </>
  )
}


export default MemoryGame