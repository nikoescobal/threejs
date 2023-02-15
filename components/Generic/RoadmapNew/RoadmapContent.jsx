import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './roadmapcontent.module.scss';
import generics from '../../../styles/generics.module.scss';

function RoadmapContent({ slide }) {
  return (
    <div className={`${styles['roadmap-content-wrapper']}`}>
      <div className={styles['heading-wrapper']}>
        {slide.map((phase, index) => (
          <div key={index} className={styles['heading']}>
            <p className={styles['tag']}>{phase.phase}</p>
            <h4 className={styles['heading-text']}>{phase.title}</h4>
          </div>
        ))}
      </div>
      <div className={styles['dashed-line']}></div>
      <div className={styles['divider']}></div>

      <div className={styles['content-wrapper']}>
        {slide.map((phase, index) => {
          const isAnyCompleted = phase.points.some(
            (p) => p.status === 'completed'
          );
          return (
            <div key={index} className={styles['phase-wrapper']}>
              <div
                className={
                  isAnyCompleted
                    ? styles['circle-check-green']
                    : styles['circle-check-gray']
                }
              ></div>
              <div className={styles['point-list-wrapper']}>
                <ul>
                  {phase.points.map((point, index) => (
                    <li
                      key={index}
                      className={
                        point.status === 'completed'
                          ? styles['completed']
                          : null
                      }
                    >
                      {point.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoadmapContent;
