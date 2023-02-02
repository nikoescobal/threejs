import styles from './AdvisoryBoard.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import FsLightbox from "fslightbox-react";
import AdvisoryBoardCard from '../AdvisoryBoardCard/AdvisoryBoardCard';

function AdvisoryBoard() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')

  return (
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
        max-1920
      `}
    >
      <h2>{content[locale].title}</h2>
      <div className={styles['board-wrapper']}>
        {
          content[locale].board.map((member) => (
            <AdvisoryBoardCard key={uuid} member={member} />
          ))
        }
      </div>
    </section>
  );
}

export default AdvisoryBoard;
