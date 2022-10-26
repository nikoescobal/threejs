import { useEffect } from 'react';
import { useState } from 'react';
import useStore from '../../store/store';
import styles from './burningrate.module.scss'
import content from './content';

function BurningRate() {
  const { isDarkMode } = useStore();
  const [title, setTitle] = useState(content[0].title);
  const [text, setText] = useState(content[0].content);
  
  const showText = (index) => {
    setTitle(content[index].title)
    setText(content[index].content)
  }

  useEffect(() => {
    console.log(text);
  }, [text])
  
  return (
    <section className={`${styles.wrapper} ${isDarkMode ? '' : `${styles.light}`}`}>
      <h3>Token Burning Rate</h3>
      <div className={styles['illustration-wrapper']}>
        <svg version="2.0" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 3500 3500" style={{
            'enable-background': 'new 0 0 3500 3500'
          }} xmlSpace="preserve">
        <g id="Ebene_1_00000024003054231295844450000015088239228404057505_">
          
            <image style={{
              display: 'inline',
              overflow: 'visible',
              'enable-background':'new'
             }} width="2048" height="2048" xlinkHref="5BDFCCE27645E735.jpeg"  transform="matrix(1.5449 0 0 1.5449 115 164)">
          </image>
        </g>
        <g id="Ebene_2_00000123420487314246714940000004911156869441048242_">
          <polygon className="st1" points="1779,1636 1779,904.5 1779,796 1779,509 652,509 652,1636 939,1636 1062.5,1636 	"/>
          <path className="st3" d="M1726,558v126.6c461.7,0,835.9,382.1,835.9,853.4s-374.2,853.4-835.9,853.4S890.1,2009.3,890.1,1538H746
            c0,541.2,438.8,980,980,980s980-438.8,980-980S2267.2,558,1726,558z"/>
        </g>
        <g id="Ebene_3">
          <circle className="st4" cx="822" cy="1279" r="205" onMouseOver={() => showText(0)}/>
          <circle className="st4" cx="480" cy="2366" r="205" onMouseOver={() => showText(1)}/>
          <circle className="st4" cx="1796" cy="3008" r="205" onMouseOver={() => showText(2)}/>
          <circle className="st4" cx="2972" cy="2366" r="205" onMouseOver={() => showText(3)}/>
          <circle className="st4" cx="2913" cy="558" r="205" onMouseOver={() => showText(4)}/>
          <rect x="1732" y="2456.6" className="st3" width="128" height="284.4"/>
          
            <rect x="661.4" y="2043.7" transform="matrix(0.8027 -0.5964 0.5964 0.8027 -1093.6949 909.4639)" className="st3" width="332.4" height="128"/>
          
            <rect x="2554.4" y="1947.6" transform="matrix(0.5964 -0.8027 0.8027 0.5964 -639.976 2954.9292)" className="st3" width="128" height="332.4"/>
          
            <rect x="2368.2" y="765" transform="matrix(0.8027 -0.5964 0.5964 0.8027 5.6386 1675.0966)" className="st3" width="332.4" height="128"/>
          <ellipse className="st5" cx="1727.9" cy="621.5" rx="26.1" ry="63.5"/>
          
            <ellipse transform="matrix(0.8027 -0.5964 0.5964 0.8027 92.5829 1736.2352)" className="st5" cx="2670.3" cy="728.2" rx="26.1" ry="65.2"/>
          
            <ellipse transform="matrix(0.8027 -0.5964 0.5964 0.8027 -1175.7881 852.329)" className="st5" cx="700.3" cy="2203.2" rx="26.1" ry="65.2"/>
          <path className="st5" d="M1796.1,2715c36,0,65.2,11.7,65.2,26.1c0,14.4-29.2,26.1-65.2,26.1s-65.2-11.7-65.2-26.1
            C1730.9,2726.7,1760.1,2715,1796.1,2715z"/>
          
            <ellipse transform="matrix(0.6425 -0.7663 0.7663 0.6425 -711.2199 2896.4019)" className="st5" cx="2748.5" cy="2210.4" rx="65.2" ry="26.1"/>
          
            <ellipse transform="matrix(0.8027 -0.5964 0.5964 0.8027 148.1792 1785.8621)" className="st5" cx="2773.1" cy="669" rx="26.1" ry="65.2"/>
          
            <ellipse transform="matrix(0.6425 -0.7663 0.7663 0.6425 -713.6149 2976.9446)" className="st5" cx="2833.6" cy="2253.3" rx="65.2" ry="26.1"/>
          <path className="st5" d="M1796.2,2803.5c36,0,65.2,11.7,65.2,26.1c0,14.4-29.2,26.1-65.2,26.1s-65.2-11.7-65.2-26.1
            S1760.2,2803.5,1796.2,2803.5z"/>
          
            <ellipse transform="matrix(0.8027 -0.5964 0.5964 0.8027 -1224.311 815.738)" className="st5" cx="620.7" cy="2258.2" rx="26.1" ry="65.2"/>
          <path className="st5" d="M817.8,1518.9c39.8,0,72.2,11.7,72.2,26.1c0,14.4-32.3,26.1-72.2,26.1s-72.2-11.7-72.2-26.1
            C745.7,1530.6,778,1518.9,817.8,1518.9z"/>
          <path className="st5" d="M821.7,1431.4c39.8,0,72.2,11.7,72.2,26.1s-32.3,26.1-72.2,26.1s-72.2-11.7-72.2-26.1
            S781.8,1431.4,821.7,1431.4z"/>
        </g>
        <g id="Ebene_4">
          <circle className="st4" cx="1627.3" cy="597.3" r="31.3"/>
          <circle className="st6" cx="1627.4" cy="597.3" r="26.1"/>
          <text transform="matrix(0.9404 -0.3401 0.3401 0.9404 1614.6188 612.7206)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="1574.2" cy="662.3" r="31.3"/>
          <circle className="st6" cx="1574.3" cy="662.2" r="26.1"/>
          <text transform="matrix(0.8905 0.455 -0.455 0.8905 1554.2688 663.4905)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="1531.2" cy="568.3" r="31.3"/>
          <circle className="st6" cx="1531.3" cy="568.2" r="26.1"/>
          <text transform="matrix(0.9651 0.2619 -0.2619 0.9651 1511.9478 573.5736)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="1484" cy="644.3" r="31.3"/>
          <circle className="st6" cx="1484" cy="644.2" r="26.1"/>
          <text transform="matrix(0.9651 0.2619 -0.2619 0.9651 1464.7227 649.5736)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="1868.3" cy="636.3" r="31.3"/>
          <circle className="st6" cx="1868.3" cy="636.3" r="26.1"/>
          <text transform="matrix(0.9651 0.2619 -0.2619 0.9651 1849.0293 641.6356)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="2560.3" cy="810.2" r="31.3"/>
          <circle className="st6" cx="2560.3" cy="810.2" r="26.1"/>
          <text transform="matrix(0.8639 0.5037 -0.5037 0.8639 2540.2756 810.2704)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="2571.3" cy="1232.5" r="31.3"/>
          <circle className="st6" cx="2571.3" cy="1232.6" r="26.1"/>
          <text transform="matrix(-0.2619 0.9651 -0.9651 -0.2619 2565.9763 1213.2485)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="2624.6" cy="2118.5" r="31.3"/>
          <circle className="st6" cx="2624.7" cy="2118.5" r="26.1"/>
          <text transform="matrix(0.9651 0.2619 -0.2619 0.9651 2605.3657 2123.8474)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="2574.3" cy="1859.8" r="31.3"/>
          <circle className="st6" cx="2574.4" cy="1859.8" r="26.1"/>
          <text transform="matrix(0.9076 -0.4198 0.4198 0.9076 2562.9805 1876.2869)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="2104.4" cy="2361.1" r="31.3"/>
          <circle className="st6" cx="2104.4" cy="2361" r="26.1"/>
          <text transform="matrix(0.9076 -0.4198 0.4198 0.9076 2093.0105 2377.509)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="1793.5" cy="2767.6" r="31.3"/>
          <circle className="st6" cx="1793.5" cy="2767.6" r="26.1"/>
          <text transform="matrix(0.9076 -0.4198 0.4198 0.9076 1782.1134 2784.0576)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="1796.6" cy="2589.7" r="31.3"/>
          <circle className="st6" cx="1796.6" cy="2589.6" r="26.1"/>
          <text transform="matrix(0.9076 -0.4198 0.4198 0.9076 1785.1937 2606.1406)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="1314.2" cy="2356.1" r="31.3"/>
          <circle className="st6" cx="1314.2" cy="2356.1" r="26.1"/>
          <text transform="matrix(0.8664 0.4993 -0.4993 0.8664 1294.2037 2356.3621)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="626.8" cy="2253.7" r="31.3"/>
          <circle className="st6" cx="626.9" cy="2253.7" r="26.1"/>
          <text transform="matrix(0.8664 0.4993 -0.4993 0.8664 606.8277 2253.9316)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="903.2" cy="1927.8" r="31.3"/>
          <circle className="st6" cx="903.2" cy="1927.8" r="26.1"/>
          <text transform="matrix(0.8664 0.4993 -0.4993 0.8664 883.1851 1928.0142)" className="st4 st7 st8">LN</text>
          <circle className="st4" cx="819.2" cy="1501.8" r="31.3"/>
          <circle className="st6" cx="819.2" cy="1501.7" r="26.1"/>
          <text transform="matrix(0.8664 0.4993 -0.4993 0.8664 799.2066 1501.9604)" className="st4 st7 st8">LN</text>
        </g>
        <circle className="st9" cx="2933.8" cy="542.1" r="54.4"/>
        <circle className="st9" cx="3002.3" cy="2387.1" r="54.4"/>
        <circle className="st9" cx="1793.5" cy="3035.8" r="54.4"/>
        <circle className="st9" cx="454.7" cy="2387.5" r="54.4"/>
        <circle className="st9" cx="821.7" cy="1224.6" r="54.4"/>
        </svg>
        <div className={styles['text-wrapper']}>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </section>
  )
}

export default BurningRate