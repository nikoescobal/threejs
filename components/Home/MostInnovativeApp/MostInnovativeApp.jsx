import styles from './MostInnovativeApp.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
// import {collection,QueryDocumentSnapshot,DocumentData,query,where,limit,getDocs, doc, setDoc, addDoc} from "firebase/firestore";
import axios from 'axios';
// import { firestore } from '../../../firebase/clientapp';
import { useState } from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';
import content from './content';
import { useRouter } from 'next/router';
import WordMostInnovativeAppIcon from '../../Icons/WordMostInnovativeAppIcon/WordMostInnovativeAppIcon';

function MostInnovativeApp() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto');
  
  return (
    <section
      className={`${styles['wrapper']} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      }
      spacing-x
      max-1920
      `
    }
    >
      <div>
        <h2>{content[locale].title}</h2>
        <ul>
            {content[locale].list.map((item) => (
              <li key={uuid}>{item}</li>
              ))}
        </ul>
      </div>
      <WordMostInnovativeAppIcon />
      {/* <img src="/illustrations/Home/1.png" alt="Illustration" /> */}
    </section>
  );
}

export default MostInnovativeApp;
