import styles from './newsletter.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import {collection,QueryDocumentSnapshot,DocumentData,query,where,limit,getDocs, doc, setDoc, addDoc} from "firebase/firestore";
import axios from 'axios';
import { firestore } from '../../../firebase/clientapp';
import { useState } from 'react';
import { Alert, Snackbar, SnackbarContent } from '@mui/material';

function NewsLetter() {
  const { isDarkMode } = useStore((state) => state);
  const newsletterCollection = collection(firestore, 'email-subscribers');
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationColor, setNotificationColor] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log('success', response)
      setOpenNotification(true);
      setNotificationMessage('Successfully subscribed');
      setNotificationColor('#0258ff')
    } catch (e) {
      setOpenNotification(true);
      setNotificationMessage('Subscription failed');
      setNotificationColor('#d84646')
      console.log(e.response.data.error)
    }
  }
  
  const handleNotificationClose = () => {
    setOpenNotification(false);
  }
  
  return (
    <div
      className={`${styles['news-letter']} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      }`}
    >
      <Snackbar open={openNotification} autoHideDuration={6000} onClose={handleNotificationClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <SnackbarContent style={{
            backgroundColor: notificationColor,
            textAlign: 'center',
            width: '100%',
            height: '3rem',
            position: 'relative',
          }}
          message={<p id="client-snackbar" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '1rem',
            width: 'max-content'
          }}>{notificationMessage}</p>}
        />
      </Snackbar>
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
