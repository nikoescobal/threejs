import Money from '../../../public/icons/money.svg';
import Wallet from '../../../public/icons/wallet.svg';
import Stack from '../../../public/icons/stack.svg';

const content = {
  en: {
    title: 'How the staking works',
    step_translation: 'Step',
    steps: [
      {
        title: 'Get Legacy Token (LGCT)',
        description: `You can get your hands on Legacy Token (LGCT) by using our
        ecosystem, by participating in raffles or by buying them on the open
        market.`,
        img: Money
      },
      {
        title: 'Freeze your tokens in the app',
        description: `As an early adopter, you can stake your Legacy Token (LGCT)s for 6,
        12 or 24 months within our pre-launch app (coming soon).`,
        img: Wallet
      },
      {
        title: 'Get rewarded',
        description: `Profit from staking rewards.`,
        img: Stack
      },
    ]
  },
  de: {
    title: 'So funktioniert das Staking',
    step_translation: 'Schritt',
    steps: [
      {
        title: 'Legacy Token (LGCT) erhalten',
        description: `Sie können Legacy Token (LGCT) über unser 
        Ökosystem, durch Teilnahme an Verlosungen oder 
        durch den Kauf auf dem offenen Markt erhalten.`,
        img: Money
      },
      {
        title: 'Sperren Sie Ihre Tokens in der App',
        description: `Als früher Adopter können Sie Ihre Legacy Token 
        (LGCT) für 6, 12 oder 24 Monate innerhalb unserer 
        Vorab-App (demnächst verfügbar) staken.`,
        img: Wallet
      },
      {
        title: 'Belohnungen erhalten',
        description: `Profitieren Sie von Staking-Belohnungen.`,
        img: Stack
      },
    ]
  }
}

export default content;