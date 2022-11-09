import styles from './newsletter.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import {collection,QueryDocumentSnapshot,DocumentData,query,where,limit,getDocs, doc, setDoc, addDoc} from "firebase/firestore";
import axios from 'axios';
import { firestore } from '../../../firebase/clientapp';
import { useEffect } from 'react';
import { useState } from 'react';

function NewsLetter() {
  const { isDarkMode } = useStore((state) => state);
  const newsletterCollection = collection(firestore, 'email-subscribers');
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');

  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
  const API_SERVER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID
  
  
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
    console.log('start');
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
    // saveEmail(email);
    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Basic ${base64ApiKey}`
      }
    }
    
    const data = {
      email_address: email,
      status: 'subscribed'
    }
  
    axios.post(url, data, options)
    .then((res) => {
      console.log('subscribed');
    })
    .catch((error) => {
      console.log(error)
    })
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
