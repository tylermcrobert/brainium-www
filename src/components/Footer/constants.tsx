type Item = {
  name: string
  url: string
  external?: boolean
}

type List = {
  name: string
  items: Item[]
}[]

export const SECTIONS: List = [
  {
    name: 'Brainium',
    items: [
      {
        name: 'Games',
        url: '/games',
      },
      {
        name: 'Privacy Policy',
        url: '/privacy',
      },
    ],
  },
  {
    name: 'Company',
    items: [
      {
        name: 'Contact Us',
        url: '/about/#contact',
      },
      {
        name: 'Careers',
        url: '/careers/',
      },
    ],
  },
  {
    name: 'Support',
    items: [
      {
        name: 'FAQs',
        url: 'https://brainium.helpshift.com/',
        external: true,
      },
      {
        name: 'Open New Ticket',
        url: 'https://brainium.helpshift.com/a/solitaire/?p=all&contact=1',
        external: true,
      },
    ],
  },
]
