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
import Script from 'next/script';

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
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script id="analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      
      <ParallaxProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </div>
  )
}

export default MyApp;
