/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import ClearContainer from '../../Generic/ClearContainer/ClearContainer';
import styles from './benefits.module.scss';
import generics from '../../../styles/generics.module.scss';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

function Benefits() {
  const { isDarkMode } = useStore();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isDesktop) {
      setScale(1.5);
    } else {
      setScale(1);
    }
  }, [isDesktop])

  useEffect(() => {
    console.log(scale);
  }, [scale])
  
  return (
    <section className={`${styles['app-wrapper']} ${generics['alternating-rows-wrapper']} spacing-x`}>
      <div className={`${generics['alternating-rows']}`}>
        <div style={{marginBottom: '4rem'}}>
          <img src="/downloads/download1.png" alt="" />
        </div>
        <ClearContainer
          title="Non-Custodial wallet"
          to="/app"
          linkText="Read More"
          reducedPadding
        >
          <p>
            The Legacy Network blockchain wallet allows for easy on-boarding with a seed pharase and flexibility to receive, send, stake and vest the LGCN Token across crypto users.
          </p>
          <p>
            Payment rails for fiat on-boarding, KYC/AML, NFT support, and the LGCN token...we've handled it all to make it easy for you to enage in a game with your community participating in your success.
          </p>
        </ClearContainer>
      </div>
      <div className={`${generics['alternating-rows']}`}>
        <div><img src="/nft/char-with-iphone.png" alt="" className={`${styles.scaled}`}/></div>
        <ClearContainer
          title="NFT"
          to="/app"
          linkText="Read More"
          reducedPadding
        >
          <p>
            Unique tokenized assets with in-game benefits that you can offer to your players. Legacy Network offers an integrated pipeline to turn your playable assets into minted NFT's that can be offered for sale to players. Fund your game or offer playable NFT's to an established game community. Our platform handles all the merchandising, marketing, and payments complexity.
          </p>
        </ClearContainer>
      </div>
      <div className={`${generics['alternating-rows']}`}>
        <div style={{
          marginBottom: '4rem',
          scale: `${scale}`
        }}>
          <img src="/illustrations/token.png" alt=""  />
        </div>
        <ClearContainer
          title="LGCN TOKEN"
          to="/app"
          linkText="Read More"
          reducedPadding
        >
          <p>
            Integrate the LGCN token to offer players the chance to use the token in your blockchain game economy. Sell NFT's for the token or offer game mechanics powered by the LGCN platform that allow them to earn, buy, or win it in your game.
          </p>
        </ClearContainer>
      </div>
    </section>
  );
}

export default Benefits;
