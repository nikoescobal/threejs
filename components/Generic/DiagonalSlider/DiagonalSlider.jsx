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
        {
          content: 'Token smart contract development for all 4 blockchains',
          isChecked: true
        },
        {
          content: 'Token smart contracts first security audit',
          isChecked: true
        }, 
        {
          content: 'Pre-production of social-media content for the next months',
          isChecked: true
        }, 
        {
          content: 'Pre-launch app concept and user interface finished',
          isChecked: true
        }, 
      ],
    },
    {
      phase: 'Phase 2',
      date: 'August - September',
      content: [
        {
          content: 'Launch of our new website',
          isChecked: true
        },
        {
          content: 'Announcement of new utilities and strategies',
          isChecked: true
        },
        {
          content: 'Alpha testing of the pre-launch app',
          isChecked: false
        },
        {
          content: 'Expansion of our teams',
          isChecked: false
        },
      ],
    },
    {
      phase: 'Phase 3',
      date: 'September - October',
      content: [
        {
          content: 'Step by step opening of our community channels',
          isChecked: false
        },
        {
          content: 'Launch of our blog / documentation page',
          isChecked: false
        },
        {
          content: 'Start of the first social-media campaign',
          isChecked: false
        },
        {
          content: 'Attending several blockchain events around the globe',
          isChecked: false
        },
        {
          content: 'Announcement of new strategical partnerships',
          isChecked: false
        },
        {
          content: 'Announcement of community web-board functions',
          isChecked: false
        },
        {
          content: 'Announcement of partners web-board functions',
          isChecked: false
        },
      ],
    },
    {
      phase: 'Phase 4',
      date: 'October - November',
      content: [
        {
          content: 'Start of intensive community building along with events',
          isChecked: false
        },
        {
          content: 'Start of our web-based giveaway and referral program',
          isChecked: false
        },
        {
          content: 'Launch of the community web-board (basic functions)',
          isChecked: false
        },
        {
          content: 'Launch of the partners web-board (basic functions)',
          isChecked: false
        },
        {
          content: 'Beta testing of the pre-launch app',
          isChecked: false
        },
        {
          content: 'Start of our YouTube channel',
          isChecked: false
        },
      ],
    },
    {
      phase: 'Phase 5',
      date: 'November - December',
      content: [
        {
          content: 'Public sale start (depending on the markets)',
          isChecked: false
        },
        {
          content: 'Security audist of all smart-contracts',
          isChecked: false
        },
        {
          content: 'Pre-launch app release for IOS and Android',
          isChecked: false
        },
        {
          content: 'Token deployment on the blockchains',
          isChecked: false
        },
        {
          content: 'LGCN listing on the SafeSwap multi-chain bridge',
          isChecked: false
        },
      ],
    },
    {
      phase: 'Phase 6',
      date: 'December - January',
      content: [
        {
          content: 'Alpha testing of our main app',
          isChecked: false
        },
        {
          content: 'Start of NFT marketing and whitelisting',
          isChecked: false
        },
        {
          content: 'Start of our surprise marketing campaign',
          isChecked: false
        },
      ],
    },
    {
      phase: 'Phase 7',
      date: 'Q1 2022',
      content: [
        {
          content: 'Free NFT mint for whitelisted participants',
          isChecked: false
        },
        {
          content: 'Beta testing of the main app',
          isChecked: false
        },
        {
          content: 'Pre-listing on coinmarketcap',
          isChecked: false
        },
        {
          content: 'LGCN listing on a centralized exchange',
          isChecked: false
        },
        {
          content: 'Launch of the first version of our main app',
          isChecked: false
        },
        {
          content: 'End of the web-based giveaway',
          isChecked: false
        },
      ],
    },
    {
      phase: 'Phase 8',
      date: 'Q2 2022',
      content: [
        {
          content: 'To be continued...',
          isChecked: false
        },
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
                <SliderContent list={item.content} showBenefits={showBenefits} isActive={index === Math.abs(position.x - 1)} />
                {/* {item.content.content} */}
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