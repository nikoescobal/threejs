import styles from './MemoryGameGrid.module.scss';
import { useState } from "react";
import useStore from "../../../store/store";
import MemoryGameTile from "../MemoryGameTile/MemoryGameTile";

function MemoryGameGrid(props) {
  const {
    list,
    visibleItems,
    setVisibleItems,
    finishedItems,
    checkItems
  } = props;
  const { isDarkMode } = useStore();

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

  return (
    <div className={`
      ${styles['wrapper']}
      ${!isDarkMode ? styles['light'] : ''}
      spacing-x
      max-1920
      `}
    >
      <div className={styles['grid']}>
        {list.map((item, index) => (
          <MemoryGameTile
            key={item.id}
            opened={visibleItems.includes(index) || finishedItems.includes(index)}
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
            imgDesc={item.description}
          />
        ))}
      </div>
    </div>
  );
};

MemoryGameGrid.defaultProps = {
  list: []
};

export default MemoryGameGrid;
