const content = {
  en: {
    main_links: [
      {
        name: 'Products',
        sub_links: [
          {
            name: 'Legacy',
            endpoint: '/legacy',
            title: 'Navbar link to Legacy page'            
          },
          {
            name: 'Legacy Wallet',
            endpoint: '/legacy-wallet',
            title: 'Navbar link to Legacy Wallet page'            
          },
          {
            name: 'Legacy NFT',
            endpoint: '/legacy-nft',
            title: 'Navbar link to Legacy Wallet page'            
          },
        ]
      },
      {
        name: 'Network',
        endpoint: '/network',
        title: 'Navbar link to Network page'
      },
      {
        name: 'Token',
        endpoint: '/token',
        title: 'Navbar link to Token page'
      },
      {
        name: 'Personal Development',
        endpoint: '/personal-development',
        title: 'Navbar link to Personal Development page'
      },
      {
        name: 'About Us',
        endpoint: '/about-us',
        title: 'Navbar link to About Us page'
      },
      {
        name: 'Blog',
        endpoint: 'https://blog.legacynetwork.io',
        title: 'Navbar link to Legacy Network blogs',
        external: true
      },
    ]
  }
}

export default content;