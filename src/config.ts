export const NAV_ITEMS = [
  {
    path: '/',
    title: 'Home',
    dropDown: null,
  },
  {
    path: '/rafting',
    title: 'Rafting',
    dropDown: [
      {
        link: '/rafting/day-trip',
        title: 'Day Trip',
      },
      {
        link: '/rafting/day-trip',
        title: 'Overnight Trip',
      },
      {
        link: '/rafting/day-trip',
        title: 'Two Days program',
      },
      {
        link: '/rafting/day-trip',
        title: 'Three Days program',
      },
      {
        link: '/rafting/river-expedition',
        title: 'River Expedition',
      },
    ],
  },
  {
    path: '/elements',
    title: 'Elements Reference',
    dropDown: null,
  },
];

export const SOCIAL_MEDIA_ITEMS = [
  {
    path: '#',
    title: 'Twitter',
    iconClass: 'fa-twitter',
  },
  {
    path: '#',
    title: 'Facebook',
    iconClass: 'fa-facebook-f',
  },
  {
    path: '#',
    title: 'Instagram',
    iconClass: 'fa-instagram',
  },
  {
    path: '#',
    title: 'GitHub',
    iconClass: 'fa-github',
  },
];

export const SITE = {
  title: 'The Adventure Journy',
  description: '',
  url: 'https://astro-massively.darko.io',
  githubUrl: 'https://github.com/DBozhinovski/astro-massively',
};

export const CONTACT = {
  address: ['1234 Somewhere Road #87257 Nashville', 'TN 00000-0000'],
  phone: '(000) 000-0000',
  email: 'info@untitled.tld',
  formSubmitUrl: '/',
};
