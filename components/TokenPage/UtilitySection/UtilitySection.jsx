import styles from './utilitysection.module.scss';

function UtilitySection() {
  const data = [
    {
      img: '/illustrations/world.svg',
      text: 'Free access to the ecosystem',
    },
    {
      img: '/illustrations/rounded-grid.svg',
      text: 'Share distribution',
    },
    {
      img: '/illustrations/balance.svg',
      text: 'Neutral',
    },
    {
      img: '/illustrations/person.svg',
      text: 'In-game character',
    },
    {
      img: '/illustrations/medal.svg',
      text: 'High play to earn reward',
    },
    {
      img: '/illustrations/medal.svg',
      text: 'High play to earn reward',
    },
  ]
  
  return (
    <section className={`${styles.wrapper} spacing-x`}>
      <h3>NFT Utility</h3>
      <p>
        Unique tokenized assets with in-game benefits that you can offer to your players. Legacy Network offers an integrated pipeline to turn your playable assets into minted NFT&apos;s that can be offered for sale to players. Our platform handles all the merchandising, marketing, and payments complexity.
      </p>
      <div className={`${styles.grid} grid three-col`}>
        {data.map((item) => (
          <div key={item.text}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <p>
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <button className='button-blue'>Learn more</button>
    </section>
  )
}

export default UtilitySection