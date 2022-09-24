import Navbar from '../components/Navbar/Navbar';
import useStore from '../store/store';
import '../styles/fonts.css';
import '../styles/globals.scss';
import '../styles/generics.scss';
import '../styles/swiper.scss';
import '../styles/generics.module.scss';
import '../styles/apexcharts.module.scss';
import Footer from '../components/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`content-wrapper ${isDarkMode ? '' : 'light'} `}>
      <ParallaxProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </div>
  )
}

export default MyApp;
