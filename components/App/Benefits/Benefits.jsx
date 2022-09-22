/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './benefits.module.scss';

function Benefits() {
  const { isDarkMode } = useStore();

  return (
    <section className={`${styles.section}`}>
      <h2>Benefits of using the app </h2>
      <div className={`${styles.content}`}>
        <div className={`${styles.imgwrapper}`}>
          <img src="/downloads/download1.png" alt="download 1" />
        </div>
        <div className={`${styles.bg}`}>
          <h3>Non-Custodial wallet</h3>
          <p>
            The Legacy Network blockchain wallet allows for easy on-boarding
            with a seed pharase and flexibility to receive, send, stake and vest
            the LGCN Token across crypto users. Payment rails for fiat
            on-boarding, KYC/AML, NFT support, and the LGCN token...we've
            handled it all to make it easy for you to enage in a game with your
            community participating in your success.
          </p>
          <button>Read More</button>
        </div>
      </div>

      <div className={`${styles.content}`}>
        <div className={`${styles.imagereverse}`}>
          <img src="/nft/char-with-iphone.png" />
        </div>

        <div className={`${styles.bg}`}>
          <h3>NFT</h3>
          <p>
            Unique tokenized assets with in-game benefits that you can offer to
            your players. Legacy Network offers an integrated pipeline to turn
            your playable assets into minted NFT's that can be offered for sale
            to players. Fund your game or offer playable NFT's to an established
            game community. Our platform handles all the merchandising,
            marketing, and payments complexity.
          </p>
          <button>Read More</button>
        </div>
      </div>

      <div className={`${styles.content}`}>
        <div className={`${styles.imgwrapper}`}>
          <img src="/illustrations/token-3d.png" alt="token-3d" />
        </div>
        <div className={`${styles.bg}`}>
          <h3>LGCN TOKEN</h3>
          <p>
            Integrate the LGCN token to offer players the chance to use the
            token in your blockchain game economy. Sell NFT's for the token or
            offer game mechanics powered by the LGCN platform that allow them to
            earn, buy, or win it in your game.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
