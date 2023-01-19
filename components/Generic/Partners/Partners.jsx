import styles from './partners.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import Image from 'next/image';
import Logo from '../../../public/logo-small.webp';

const partners = [
  {
    endpoint: 'crypto-valley.webp',
    alt: 'crypto valley logo',
    class: 'crypto-valley',
    src: 'https://cryptovalley.swiss/',
  },
  {
    endpoint: 'cv-labs.png',
    alt: 'cv labs logo',
    class: 'cv-labs',
    src: 'https://www.cvlabs.com/',
  },
  {
    endpoint: 'niedermuller.webp',
    alt: 'niedermuller logo',
    class: 'niedermuller',
    src: 'https://niedermueller.law/de/',
  },
  {
    endpoint: 'sercor.png',
    alt: 'seratio logo',
    class: 'sercor',
    src: 'https://www.sercor.com/en/',
  },
  {
    endpoint: 'synaps.webp',
    alt: 'synaps logo',
    class: 'synaps',
    src: 'https://synaps.io/',
  },
  {
    endpoint: 'caag.webp',
    alt: 'caag logo',
    class: 'caag',
    src: 'https://cryptoadvisory.li/en/home/',
  },
  {
    endpoint: 'red4sec.webp',
    alt: 'red4sec logo',
    class: 'red4sec',
    src: 'https://red4sec.com/en',
  },
  // {
  //   endpoint: 'maerki.png',
  //   alt: 'maerki logo',
  //   class: 'maerki',
  // },
  {
    endpoint: 'saynode.png',
    alt: 'saynode logo',
    class: 'saynode',
    src: 'https://saynode.ch/',
  },
  {
    endpoint: 'safehaven.webp',
    alt: 'safehaven logo',
    class: 'safehaven',
    src: 'https://safehaven.io/',
  },
  {
    endpoint: 'vechain.webp',
    alt: 'vechain logo',
    class: 'vechain',
    src: 'https://www.vechain.org/',
  },
];
// const partners = [

//   {
//     endpoint: 'vechain.webp',
//     alt: 'vechain logo',
//     class: 'vechain',
//     src: 'https://www.vechain.org/'
//   },
// ];

function Partners() {
  const { isDarkMode } = useStore((state) => state);

  return (
    // <div id="logos-home-page">
    //   <div className={styles['slider']}>
    //     <div className={styles['slide-track']}>
    //       <a href={Logo.src} target="_blank" rel="noopener noreferrer">
    //         {/* <Image
    //           src={`/logos/${logo.endpoint}`}
    //           alt=  {}
    //           className={styles[logo.class]}
    //           width={64}
    //           height={64}
    //           layout="responsive"
    //           objectFit="contain"
    //         /> */}
    //       </a>

    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-medium wp-image-13023"
    //           src={Logo.src}
    //           alt=""
    //           width="110"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-medium wp-image-13022"
    //           src={Logo.src}
    //           alt=""
    //           width="188"
    //           height="60"
    //         />
    //       </div>
    //       {/* <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-medium wp-image-13021"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-vf_circle_logo-290.jpg"
    //           alt=""
    //           width="60"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-full wp-image-13020"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-unitedhealthcareprocycling_logo2017-trans.jpg"
    //           alt=""
    //           width="285"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-medium wp-image-13019"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-tyco-electronics-logo.jpg"
    //           alt=""
    //           width="184"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-medium wp-image-13018"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-toyota-logo.jpg"
    //           alt=""
    //           width="73"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-medium wp-image-13017"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-thyssenkrupp.jpg"
    //           alt=""
    //           width="79"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-full wp-image-13016"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-tech_mahindra_new_logo.jpg"
    //           alt=""
    //           width="212"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-full wp-image-13015"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-standard-chartered-bank-777x437.jpg"
    //           alt=""
    //           width="155"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-medium wp-image-13014"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-solix-logo.jpg"
    //           alt=""
    //           width="237"
    //           height="60"
    //         />
    //       </div>
    //       <div className={styles['slide']}>
    //         <img
    //           // class="alignnone size-medium wp-image-13013"
    //           src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-smuckers_logo.jpg"
    //           alt=""
    //           width="194"
    //           height="60"
    //         />
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
    <section
      id="logos-home-page"
      className={`${styles.partners} ${!isDarkMode ? `${styles.light}` : ''} `}
    >
      <h3 className={`${generics['spacing-x']}`}>Our Partners</h3>
      <div className={`${styles['slider']} ${generics['spacing-x']} max-1920`}>
        <div className={styles['slide-track']}>
          {partners.map((logo) => (
            <div className={styles['slide']}>
              <a href={logo.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/logos/${logo.endpoint}`}
                  alt={logo.alt}
                  // className={`${styles['alignnone']} ${styles['size-full']} max-1920`}
                  className={styles[logo.class]}
                  width={64}
                  height={64}
                  layout="responsive"
                  objectFit="contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
