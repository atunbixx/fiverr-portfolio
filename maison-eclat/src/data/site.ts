// All business content lives here — swap this file to re-skin the template for a new client.
import heroImg from '../assets/img/hero-bistro.jpg';
import interiorImg from '../assets/img/interior.jpg';
import soupImg from '../assets/img/onion-soup.jpg';
import duckImg from '../assets/img/duck.jpg';
import bruleeImg from '../assets/img/creme-brulee.jpg';
import breadImg from '../assets/img/bread.jpg';
import wineImg from '../assets/img/wine.jpg';
import chefImg from '../assets/img/chef.jpg';
import cheeseImg from '../assets/img/cheese.jpg';

export const site = {
  name: 'Maison Éclat',
  tagline: 'Est. 2009 · Paris-Inspired Cuisine',
  description:
    'Maison Éclat is a warm French brasserie in Paris serving slow-braised, seasonal classics. Book a table online, view our menu and opening hours.',
  phone: '+33 1 42 00 11 22',
  email: 'hello@maisoneclat.fr',
  address: {
    street: '12 Rue du Faubourg Saint-Antoine',
    postcode: '75012',
    city: 'Paris',
    country: 'France',
    short: '12 Rue du Faubourg, Paris',
  },
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
  priceRange: '€€',
  cuisine: 'French',
};

export const nav = [
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  image: heroImg,
  alt: 'Candlelit bistro table with a brass lamp and warm evening light',
  eyebrow: site.tagline,
  title: 'Where every meal tells a story worth savouring',
};

export const story = {
  image: interiorImg,
  alt: 'Inside a classic Parisian bistro with rattan chairs and marble tables',
  eyebrow: 'Our Story',
  title: 'A table that feels like coming home',
  body:
    'Founded in 2009 by chef Mathieu Bernard, Maison Éclat is a celebration of French brasserie cooking — slow-braised, seasonal, and made with love. We believe the best meals happen around a table with people you cherish.',
};

export const menu = [
  {
    image: soupImg,
    alt: 'French onion soup with a golden gruyère crust',
    dish: "Soupe à l'Oignon",
    description: 'Caramelised onion broth, gruyère crust, toasted sourdough',
    price: '14',
    tag: 'Starter',
  },
  {
    image: duckImg,
    alt: 'Sliced pink duck breast with a glossy jus on a white plate',
    dish: 'Magret de Canard',
    description: 'Duck breast, wild cherry jus, celeriac purée, watercress',
    price: '34',
    tag: 'Signature',
  },
  {
    image: bruleeImg,
    alt: 'Crème brûlée in a ramekin topped with fresh berries',
    dish: 'Crème Brûlée',
    description: 'Madagascan vanilla, caramelised crust, fresh berries',
    price: '11',
    tag: 'Dessert',
  },
];

export const hours = [
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tuesday – Thursday', time: '12:00 – 14:30 · 18:30 – 22:00' },
  { day: 'Friday', time: '12:00 – 14:30 · 18:30 – 22:30' },
  { day: 'Saturday', time: '11:00 – 15:00 · 18:00 – 23:00' },
  { day: 'Sunday', time: '11:00 – 15:30' },
];

// Used by the booking form's time picker and the schema.org data
export const openingSpec = [
  { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '12:00', closes: '14:30' },
  { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '18:30', closes: '22:00' },
  { days: ['Friday'], opens: '12:00', closes: '14:30' },
  { days: ['Friday'], opens: '18:30', closes: '22:30' },
  { days: ['Saturday'], opens: '11:00', closes: '15:00' },
  { days: ['Saturday'], opens: '18:00', closes: '23:00' },
  { days: ['Sunday'], opens: '11:00', closes: '15:30' },
];

export const gallery = [
  { image: breadImg, alt: 'Crusty sourdough loaf on a wooden board' },
  { image: wineImg, alt: 'Glass of red wine beside a lit candle at dinner' },
  { image: chefImg, alt: 'Chef carefully plating a dish in the kitchen' },
  { image: cheeseImg, alt: 'Cheese board with brie, figs, grapes and raspberries' },
];

export const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'About', href: '#about' },
  { label: 'Private Dining', href: '#contact' },
  { label: 'Press', href: '#about' },
];

export const photoCredits = [
  'Photography via Pexels (free licence): Sarah O\'Shea, Céline, Sara Free, Nadin Sh, César O\'neill, Natalia Olivera, Ron Lach, Willians Huerta, Mimi.',
];
