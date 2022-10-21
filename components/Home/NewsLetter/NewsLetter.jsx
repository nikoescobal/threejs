import styles from './newsletter.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import {collection,QueryDocumentSnapshot,DocumentData,query,where,limit,getDocs, doc, setDoc, addDoc} from "firebase/firestore";
import { firestore } from '../../../firebase/clientapp';
import { useEffect } from 'react';
import { useState } from 'react';

function NewsLetter() {
  const { isDarkMode } = useStore((state) => state);
  const newsletterCollection = collection(firestore, 'email-subscribers');
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState([]);

  const getEmails = async () => {
    const newsLetterQuery = query(newsletterCollection);
    const querySnapshot = await getDocs(collection(firestore, "email-subscribers"));
    
    const result = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot.data());
    });
    setEmails(result);
  };

  function saveEmail() {
    addDoc(collection(firestore, "email-subscribers"), {
      email
    })
    .then(() => {
      console.log('success');
    })
    .catch(() => {
      console.log('error');
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    saveEmail(email);
  }
  
  return (
    <div
      className={`${styles['news-letter']} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      }`}
    >
      <div>
        <h4>Don&apos;t miss out. Stay updated!</h4>
        <p>
          Subscribe to our newsletter and be the first to get updates on our products and services. 
        </p>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" id="" />
          <button type="submit" className="button-blue">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
