import { v4 as uuid } from 'uuid';

const content = {
  pictures: [
    {
      id: uuid(),
      url: '/icons/util1.svg',
      description: 'Utility Icon 1',
    },
    {
      id: uuid(),
      url: '/icons/util2.svg',
      description: 'Utility Icon 2',
    },
    {
      id: uuid(),
      url: '/icons/util3.svg',
      description: 'Utility Icon 3',
    },
    {
      id: uuid(),
      url: '/icons/util4.svg',
      description: 'Utility Icon 4',
    },
    {
      id: uuid(),
      url: '/icons/util5.svg',
      description: 'Utility Icon 5',
    },
    {
      id: uuid(),
      url: '/icons/util6.svg',
      description: 'Utility Icon 6',
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