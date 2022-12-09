import styles from './diagonalslider.module.scss';
import { useState } from 'react';
import SliderContent from '../SliderContent/SliderContent';
import useStore from '../../../store/store';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import benefits from './content';
import ComingSoon from '../ComingSoon/ComingSoon';
import useScrollbarSize from 'react-scrollbar-size';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

function DiagonalSlider({ showBenefits }) {
  const { height, width } = useScrollbarSize();

  const roadmapItems = [
    {
      phase: 'Phase 1',
      date: 'Q3 2022',
      content: [
        {
          id: 'r1',
          content: 'Pre-production of social-media content for the next months',
          isChecked: true,
        },
        {
          id: 'r2',
          content: 'Token smart contract development for all 4 blockchains',
          isChecked: true,
        },
        {
          id: 'r3',
          content: 'Wallet concept and user interface finished',
          isChecked: true,
        },
        {
          id: 'r4',
          content: 'Token smart contracts first security audit',
          isChecked: true,
        },
      ],
    },
    {
      phase: 'Phase 2',
      date: 'Q3 2022',
      content: [
        {
          id: 'r5',
          content: 'Announcement of new utilities',
          isChecked: true,
        },
        {
          id: 'r6',
          content: 'Launch of our new website',
          isChecked: true,
        },
        {
          id: 'r7',
          content: 'Alpha testing of the wallet',
          isChecked: true,
        },
        {
          id: 'r8',
          content: 'Expansion of our teams',
          isChecked: true,
        },
      ],
    },
    {
      phase: 'Phase 3',
      date: 'Q4 2022',
      content: [
        {
          id: 'r9',
          content: 'Start of intensive community building along with events',
          isChecked: false,
        },
        {
          id: 'r10',
          content: 'Start of our web-based giveaway and referral program',
          isChecked: false,
        },
        {
          id: 'r11',
          content: 'Attending several blockchain events around the globe',
          isChecked: true,
        },
        {
          id: 'r12',
          content: 'Launch of our blog / documentation page',
          isChecked: true,
        },
        {
          id: 'r13',
          content: 'Start of the first social-media campaign ',
          isChecked: false,
        },
        {
          id: 'r14',
          content: 'Opening of our community channels',
          isChecked: false,
        },
      ],
    },
    {
      phase: 'Phase 4',
      date: 'Q4 2022',
      content: [
        {
          id: 'r15',
          content: 'LGCT listing on the SafeSwap multi-chain bridge',
          isChecked: false,
        },
        {
          id: 'r16',
          content: 'Token deployment on the blockchains',
          isChecked: false,
        },
        {
          id: 'r17',
          content: 'Security audits of all smart contracts',
          isChecked: false,
        },
        {
          id: 'r18',
          content: 'Beta testing of the Legacy Wallet',
          isChecked: false,
        },
        {
          id: 'r19',
          content: 'Start of our YouTube channel',
          isChecked: false,
        },
      ],
    },
    {
      phase: 'Phase 5',
      date: 'Q1 2023',
      content: [
        {
          id: 'r20',
          content: 'Legacy Wallet release for IOS and Android',
          isChecked: false,
        },
        {
          id: 'r21',
          content: 'Launch of the community web-board',
          isChecked: false,
        },
        {
          id: 'r22',
          content: 'Launch of the partners web-board',
          isChecked: false,
        },
        {
          id: 'r23',
          content:
            'Pre-listing on coinmarketcap',
          isChecked: false,
        },
      ],
    },
    {
      phase: 'Phase 6',
      date: 'Q1 2023',
      content: [
        {
          id: 'r24',
          content: 'Beta testing of the main app',
          isChecked: false,
        },
        {
          id: 'r25',
          content: 'Legacy NFT mint',
          isChecked: false,
        },
        {
          id: 'r26',
          content: 'Public sale start',
          isChecked: false,
        },
      ],
    },
    {
      phase: 'Phase 7',
      date: 'Q2 2023',
      content: [
        {
          id: 'r27',
          content: 'Launch of the first version of our main app',
          isChecked: false,
        },
        {
          id: 'r28',
          content: 'LGCT listing on a centralized exchange',
          isChecked: false,
        },
        {
          id: 'r29',
          content: 'Introduction of new App-Features',
          isChecked: false,
        },
        {
          id: 'r30',
          content: 'End of the web-based giveaway',
          isChecked: false,
        },
        {
          id: 'r31',
          content: 'Introduction of new Roadmap',
          isChecked: false,
        },
      ],
    },
  ];
  const { isDarkMode } = useStore((state) => state);
  const isTablet = useMediaQuery('(min-width: 768px)');
  const [openDialog, setOpenDialog] = useState(false);
  const [position, setPosition] = useState({ x: 1, y: 0 });
  // const offset = { x: 33, y: -6 };
  const [offset, setOffset] = useState({ x: 95, y: -6 });

  useEffect(() => {
    console.log(isTablet);
    if (isTablet) {
      setOffset({ x: 33, y: -6 });
    }
  }, [isTablet]);

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

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => moveRight(),
    onSwipedRight: (eventData) => moveLeft(),
  });

  return (
    <div
      {...handlers}
      className={`${styles['slider']} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <div
        className={`${styles['slide-main']}`}
        style={{
          transform: `translate(${
            (position.x - (isTablet ? 0 : 1)) * offset.x
          }vw, ${position.y * offset.y}vw)`,
        }}
      >
        {
          roadmapItems.map((item, index) => (
          <div
            key={item.phase}
            className={`${styles['slide']} ${
              index === Math.abs(position.x - 1)
                ? `${styles['active']}`
                : ''
            }`}
            style={{
              transform: `translateY(${offset.y * index}vw)`,
            }}
          >
            <div className={`${styles['phase-wrapper']}`}>
              <p>{item.phase}</p>
            </div>
            <div className={`${styles['timeframe-wrapper']}`}>
              <p>{item.date}</p>
            </div>
            <SliderContent
              list={item.content}
              showBenefits={showBenefits}
              isActive={index === Math.abs(position.x - 1)}
            />
            <div></div>
          </div>
          ))}
      </div>
      <div className={`${styles['arrows-wrapper']}`}>
        <div>
          <button
            type="button"
            className={`${styles.arrow} ${styles.left}`}
            onClick={moveLeft}
          >
            <Image layout='fill' src="/slider/arrow.svg" alt="arrow" />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.right}`}
            style={{
              right: `calc(${width}px + 1%)`,
            }}
            onClick={moveRight}
          >
            <Image layout='fill' src="/slider/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
      <div className={styles['double-arrow']}>
        <Image layout='fill' src="/icons/double-arrow.svg" alt="arrow" />
      </div>
      {/* <SliderContent
          list={roadmapItems[Math.abs(position.x - 1)].content}
          open={openDialog}
          onClose={handleDialogClose}
        /> */}
    </div>
  );
}

DiagonalSlider.defaultProps = {
  showBenefits: false,
};

export default DiagonalSlider;
