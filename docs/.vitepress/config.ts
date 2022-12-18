import { defineConfig } from 'vitepress'


const NAVIGATION_LOGIC = [
  {
    text: '🎭 Actors',
    items: [
      { text: 'Buyer', link: '/actors/buyer' },
      { text: 'Seller', link: '/actors/seller' },
      { text: 'Creditor', link: '/actors/creditor' },
      { text: 'Debitor', link: '/actors/debitor' },
    ]
  },
  {
    text: '💡 Concepts',
    items: [
      { text: 'Home Loan', link: '/concepts/home-loan' },
      { text: 'Taxes', link: '/concepts/taxes' },
      { text: 'Law', link: '/concepts/law' },
      { text: 'Rates', link: '/concepts/rates' },
    ]
  },
  {
    text: '🏠 Tangible',
    items: [
      { text: 'Real estate', link: '/tangible/real-estate' },
    ]
  },
  {
    text: '👊 The best',
    items: [
      { text: 'Team', link: '/team' },
    ]
  }
]

export default defineConfig({
  title: 'Loanusaurus',
  description: 'A documentation site, to learn about Real estate Loan ',
  lastUpdated: true,


  themeConfig: {
    // Type is `DefaultTheme.Config`s
    outline: 'deep',
    logo: '/logo.png',
    nav: NAVIGATION_LOGIC,
    sidebar: NAVIGATION_LOGIC,
    footer: {
      message: 'Made with ❤️ by Stéphane Pires',
      copyright: 'Copyright © 2022-present'
    },

    lastUpdatedText: 'Updated Date'
  }
})