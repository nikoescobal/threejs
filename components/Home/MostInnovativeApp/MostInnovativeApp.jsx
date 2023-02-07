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
      <img src="/illustrations/Home/1.png" alt="Illustration" />
      <h2>{content[locale].title}</h2>
      <ul>
          {content[locale].list.map((item) => (
          <li key={uuid}>{item}</li>
          ))}
      </ul>
    </section>
  );
}

export default MostInnovativeApp;
