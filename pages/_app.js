import Navbar from '../components/Navbar/Navbar';
import useStore from '../store/store';
import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/generics.module.scss';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`content-wrapper ${isDarkMode ? '' : 'light'} `}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp;
