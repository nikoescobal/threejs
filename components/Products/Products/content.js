const content = {
  en: {
    title: 'Our Products',
    tabs: ['Legacy Main App', 'Legacy Wallet', 'Legacy Health', 'Legacy NFT'],
    panels: [
      {
        content: `
          <h4>Legacy Main App</h4>
          <p>
          In the education area of the app, the user can choose from various categories. Each category contains content, which can be text, video, animation, podcast (audio content) and other forms.
          </p>
          <br/>
          <p>
          Each category has its own level system. The AI uses targeted questions, user behavior, feedback app tracking and other parameters to decide how advanced the user already is and which content is relevant to them. This makes the system usable for everyone, whether beginner or professional. The content consists of both a theoretical and a practical part.
          </p>
        `,
        img: '/mockups/legacy-main.png',
      },
      {
        content: `
          <h4>Legacy Wallet</h4>
          <p>
          The Legacy wallet provides the following functions:
          </p>
        `,
        img: '/mockups/staking.png',
      },
      {
        content: `
          <h4>Legacy Health</h4>
          <p>
            Coming soon
          </p>
        `,
        img: '/mockups/legacy-health.png',
      },
      {
        content: `
          <h4>Legacy NFT</h4>
          <p>
          <strong?>What</strong>
          </p>
          <br/>
          <p>
          The Legacy Network NFT is an in-game character with a unique set of features. There are 5 different tribes that hold the legacy. They come in different forms of animation, face props, armour, colour, and character traits. Each trait such as character, animation, face prop, etc. also has multiple tiers of rarity, resulting in unique and epic combinations for you to own!
          </p>
        `,
        img: '/mockups/viking.png',
      },
    ],
  },
  de: {
    title: 'Legacy Wallet',
    tabs: ['Managing', 'Staking', 'Vesting', 'Bridging'],
    panels: [
      {
        content: `
          <h4>Verwaltung</h4>
          <p>
          Verwalten Sie Ihre bevorzugten Kryptowährungen in einer sicheren, non-custodialen Wallet. Die Legacy-Wallet ermöglicht es Ihnen, Token auf mehreren Blockchains einfach zu halten, zu senden und zu empfangen. Die privaten Schlüssel werden lokal auf dem Gerät gespeichert, sodass nur Sie Zugriff auf Ihre Mittel haben. Durchsuchen Sie die NFT-Sektion, um alle Ihre Sammlerstücke an einem sicheren Ort zu sehen. Darüber hinaus verfügt die Wallet über eine Browser-Erweiterung, mit der Sie Zugriff auf die aufregende Welt von Web3 haben.
          </p>
          <ul>
            Token und NFT support:
            <li>VeChain</li>
            <li>Ethereum</li>
            <li>Binance</li>
            <li>Polygon.</li>
          </ul>
        `,
        img: '/mockups/managing.png',
      },
      {
        content: `
          <h4>Staking</h4>
          <p>
          Als langfristiges Mitglied können Sie Ihre Legacy Token (LGCT)s für 6, 12 oder 24 Monate hinterlegen, um von exklusiven Belohnungen zu profitieren. Alternativ kann die flexible Staking-Option verwendet werden, sodass Sie Ihre Mittel jederzeit abheben können. Die flexible Staking-Option verfügt über eine Auto-Compoundfunktion, die Ihnen Zeit spart, indem sie automatisch die Belohnungen beansprucht und erneut beschlagnahmt. Die Tokens werden von überprüften Smart Contracts gehalten, um eine hohe Sicherheit und Leistung zu gewährleisten.

          </p>
        `,
        img: '/mockups/staking.png',
      },
      {
        content: `
          <h4>Vesting</h4>
          <p>
          Als Teilnehmer eines privaten Verkaufs, öffentlichen Verkaufs oder Giveaways können Sie Ihre gesicherten Legacy Token (LGCT)s direkt in der Wallet beanspruchen. Die Funktion berechnet den beanspruchbaren Betrag in Echtzeit, sodass Token in einem Intervall Ihrer Wahl beansprucht werden können. Genau wie die Staking-Verträge werden auch die Vesting-Verträge überprüft, was eine hohe Sicherheit und Leistung gewährleistet.

          </p>
        `,
        img: '/mockups/vesting.png',
      },
      {
        content: `
          <h4>Bridging</h4>
          <p>
          Bridgen Sie Ihre Legacy Token (LGCT)s zwischen den unterstützten Blockchains in einem Augenblick dank unserer SafeSwap-Integration. Atomic Swaps werden verwendet, was das Bridging billig, schnell und sicher macht. Darüber hinaus arbeiten wir an einer Auto-Bridge-Funktion, mit der Sie Ihre Legacy Token (LGCT)s von einer Blockchain auf eine andere senden können, ohne sie zuvor verbinden zu müssen.
          </p>
        `,
        img: '/mockups/bridging.png',
      },
    ],
  },
};

export default content;
