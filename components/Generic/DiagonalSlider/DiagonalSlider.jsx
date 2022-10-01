import styles from './diagonalslider.module.scss';
import { useState } from 'react';
import SliderContent from '../SliderContent/SliderContent';
import useStore from '../../../store/store';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import benefits from './content';

function DiagonalSlider({ showBenefits }) {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      date: 'July - August',
      content: [
        'Smart contract development for all 4 blockchains',
        'First smart contract security audit',
        'Pre-production of social-media content for the next months',
        'Setup of all community channels including bots and automatisms',
      ],
    },
    {
      phase: 'Phase 2',
      date: 'August - September',
      content: [
        'Token deployment',
        'Release of our new interactive website',
        'Step by step opening of some of our community channels',
        'Start of the first social-media Campaign',
        'Completion of the app UI',
      ],
    },
    {
      phase: 'Phase 3',
      date: 'September - October',
      content: [
        'Expansion of our development teams',
        'Start of intensive community building along with events',
        'Taking part in blockchain events around the world',
      ],
    },
    {
      phase: 'Phase 4',
      date: 'October - November',
      content: [
        'Expansion of our development teams',
        'Start of intensive community building along with events',
        'Taking part in blockchain events around the world',
      ],
    },
    {
      phase: 'Phase 5',
      date: 'November - Q1',
      content: [
        'Token deployment',
        'Release of our new interactive website',
        'Step by step opening of some of our community channels',
        'Start of the first social-media Campaign',
      ],
    },
    {
      phase: 'Phase 6',
      date: 'Q1 - Q2',
      content: [
        'Token deployment',
        'Release of our new interactive website',
        'Step by step opening of some of our community channels',
        'Start of the first social-media Campaign',
      ],
    },
    {
      phase: 'Phase 7',
      date: 'Q2 - Q4',
      content: [
        'Token deployment',
        'Release of our new interactive website',
        'Step by step opening of some of our community channels',
        'Start of the first social-media Campaign',
      ],
    },
  ];
  const { isDarkMode } = useStore((state) => state);
  const isTablet = useMediaQuery('(min-width: 768px)')
  const [openDialog, setOpenDialog] = useState(false);
  const [position, setPosition] = useState({ x: 1, y: 0 });
  // const offset = { x: 33, y: -6 };
  const [offset, setOffset] = useState({ x: 95, y: -6 });

  useEffect(() => {
    console.log(isTablet);
    if (isTablet) {
      setOffset({ x: 33, y: -6 });
    }
  }, [isTablet])

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const moveRight = () => {
    if (!showBenefits) {
      if (Math.abs(position.x) < roadmapItems.length - 2) {
        setPosition({ x: position.x - 1, y: position.y - 1 });
      }
    } else {
      if (Math.abs(position.x) < benefits.length - 2) {
        setPosition({ x: position.x - 1, y: position.y - 1 });
      }
    }
  };

  const moveLeft = () => {
    if (position.x < 1) {
      // setSelectedSlideIndex(position.x);
      setPosition({ x: position.x + 1, y: position.y + 1 });
    }
  };
  
  return (
    <div
        className={`${styles['slider']} ${!isDarkMode ? `${styles.light}` : ''}`}
      >
        <div
          className={`${styles['slide-main']}`}
          style={{
            transform: `translate(${(position.x - (isTablet ? 0 : 1)) * offset.x}vw, ${position.y * offset.y}vw)`,
          }}
        >
        { !showBenefits &&
          roadmapItems.map((item, index) => (
            <>
              <div
                key={item.phase}
                className={`${styles['slide']} ${index === Math.abs(position.x - 1) ? `${styles['active']}` : ''}`}
                style={{
                  transform: `translateY(${offset.y * index}vw)`,
                }}
              >
                <div className={`${styles['phase-wrapper']}`}>
                  <p>
                    {item.phase}
                  </p>
                </div>
                <div className={`${styles['timeframe-wrapper']}`}>
                  <p>{item.date}</p>
                </div>
                <SliderContent list={item.content} isActive={index === Math.abs(position.x - 1)} />
                {/* <ul className={`${styles['content-wrapper']}`}>
                  <li>{item.content}</li>
                </ul> */}
                <div>
                  <button type="button" className={`${styles['slide-button']} button-blue`} onClick={() => { handleDialogOpen(); console.log(index, Math.abs(position.x - 1)); }}>Read More</button>
                </div>
                {
                  // index !== roadmapItems.length - 1 && (
                  // <div className="connector">
                  //   <img src="/assets/slider/connector.svg" alt="" />
                  // </div>
                  // )
                }

              </div>
            </>
          ))
        }
        { showBenefits &&
          benefits.map((item, index) => (
            <>
              <div
                key={item.phase}
                className={`${styles['slide']} ${index === Math.abs(position.x - 1) ? `${styles['active']}` : ''}`}
                style={{
                  transform: `translateY(${offset.y * index}vw)`,
                }}
              >
                <div className={`${styles['phase-wrapper']}`}>
                  <p>
                    {item.phase}
                  </p>
                </div>
                <div className={`${styles['timeframe-wrapper']}`}>
                  <p>{item.date}</p>
                </div>
                <SliderContent list={item.content} isActive={index === Math.abs(position.x - 1)} />
                {/* <ul className={`${styles['content-wrapper']}`}>
                  <li>{item.content}</li>
                </ul> */}
                <div>
                  <button type="button" className={`${styles['slide-button']} button-blue`} onClick={() => { handleDialogOpen(); console.log(index, Math.abs(position.x - 1)); }}>Read More</button>
                </div>
                {
                  // index !== roadmapItems.length - 1 && (
                  // <div className="connector">
                  //   <img src="/assets/slider/connector.svg" alt="" />
                  // </div>
                  // )
                }

              </div>
            </>
          ))
        }
        </div>
        <div className={`${styles['arrows-wrapper']}`}>
          <div>
            <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={moveLeft}>
              <img src="/slider/arrow-r.svg" alt="arrow" />
            </button>
            <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={moveRight}>
              <img src="/slider/arrow-r.svg" alt="arrow" />
            </button>
          </div>
        </div>
        {/* <SliderContent
          list={roadmapItems[Math.abs(position.x - 1)].content}
          open={openDialog}
          onClose={handleDialogClose}
        /> */}
      </div>
  )
}

DiagonalSlider.defaultProps = {
  showBenefits: false
}

export default DiagonalSlider