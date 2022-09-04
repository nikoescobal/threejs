import Navbar from '../components/Navbar/Navbar';
import useStore from '../store/store';
import '../styles/fonts.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`${isDarkMode ? '' : 'light'} `}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
