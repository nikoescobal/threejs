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
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useStore((state) => state);
  
  useEffect(() => {
    const imgs = document.getElementsByTagName('img');
    for(let i = 0; i < imgs.length; i++ ) {
      imgs[i].setAttribute("ondragstart", "return false")
    }
  }, [])
  
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
