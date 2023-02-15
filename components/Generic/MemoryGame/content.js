import { v4 as uuid } from 'uuid';

const content = {
  pictures: [
    {
      id: uuid(),
      url: '/icons/util1.svg',
      alt: 'Utility Icon 1',
      description: 'Free access to our ecosystem',
    },
    {
      id: uuid(),
      url: '/icons/util2.svg',
      alt: 'Utility Icon 2',
      description: 'Access to special areas within the app',
    },
    {
      id: uuid(),
      url: '/icons/util3.svg',
      alt: 'Utility Icon 3',
      description: 'Reward distribution',
    },
    {
      id: uuid(),
      url: '/icons/util4.svg',
      alt: 'Utility Icon 4',
      description: 'Networking opportunities',
    },
    {
      id: uuid(),
      url: '/icons/util5.svg',
      alt: 'Utility Icon 5',
      description: 'Higher play-to-earn reward',
    },
    {
      id: uuid(),
      url: '/icons/util6.svg',
      alt: 'Utility Icon 6',
      description: 'In-game character',
    },
  ],
  en: {
    title: 'Find out about our utility',
    description: 'Lets play a game...',
  },
  de: {
    title: 'Find out about our utility',
    description: 'Lets play a game...'
  },
}

export default content;