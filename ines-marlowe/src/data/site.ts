// All content lives here — swap this file (and the images) to re-skin the template for another photographer.
// NOTE: client and publication names are fictional on purpose. Never list real brands a photographer hasn't shot for.
import hero from '../assets/img/hero.jpg';
import work1 from '../assets/img/work-1.jpg';
import work2 from '../assets/img/work-2.jpg';
import work3 from '../assets/img/work-3.jpg';
import work4 from '../assets/img/work-4.jpg';
import work5 from '../assets/img/work-5.jpg';
import portrait from '../assets/img/portrait.jpg';

export const site = {
  name: 'Inès Marlowe',
  title: 'Inès Marlowe — Fashion & Editorial Photographer, New York',
  description:
    'Inès Marlowe is a New York–based fashion photographer creating editorial, campaign, lookbook and beauty work. Represented by North & Nine Agency.',
  city: 'New York',
  timezone: 'America/New_York',
  email: 'studio@inesmarlowe.com',
  agentEmail: 'bookings@northandnine.com',
  agentPhone: '+1 212 555 0198',
  instagram: '@inesmarlowe',
  instagramUrl: 'https://instagram.com/',
  agency: 'North & Nine Agency',
};

export const nav = [
  { label: 'Work', href: '#selected-work' },
  { label: 'Editorial', href: '#selected-work' },
  { label: 'Campaigns', href: '#clients' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const work = [
  { image: work1, project: 'Maison Revue', client: 'Atelier Vasseur', year: 2025, kind: 'Editorial', alt: 'Model in a sculptural black gown standing in an empty marble gallery', layout: 'tall' },
  { image: work2, project: 'Contour Quarterly', client: 'Ardent Milano', year: 2025, kind: 'Editorial', alt: 'Two models on a New York rooftop at dusk, skyline behind them', layout: 'wide' },
  { image: work3, project: 'Folio Nine', client: 'Laurier Beauty', year: 2024, kind: 'Beauty', alt: 'Beauty close-up with bold graphic architectural make-up', layout: 'wide' },
  { image: work4, project: 'Static Journal', client: 'Maison Delaunay', year: 2024, kind: 'Campaign', alt: 'Couple in tailored suits inside a brutalist concrete space', layout: 'wide' },
  { image: work5, project: 'Annual Lookbook', client: 'Halde Studio', year: 2024, kind: 'Lookbook', alt: 'Model in minimal white knitwear against a curved white wall', layout: 'wide' },
] as const;

export const heroSlides = [
  { image: hero, label: 'Campaign', title: 'Spring Campaign, 2026', alt: 'Model in an oversized sculptural coat against a dark backdrop', position: '50% 30%' },
  { image: work1, label: 'Editorial', title: 'Maison Revue — Atelier Vasseur, 2025', alt: work[0].alt, position: '50% 35%' },
  { image: work2, label: 'Editorial', title: 'Contour Quarterly — Ardent Milano, 2025', alt: work[1].alt, position: '50% 40%' },
  { image: work4, label: 'Campaign', title: 'Static Journal — Maison Delaunay, 2024', alt: work[3].alt, position: '50% 35%' },
  { image: work3, label: 'Beauty', title: 'Folio Nine — Laurier Beauty, 2024', alt: work[2].alt, position: '50% 30%' },
  { image: work5, label: 'Lookbook', title: 'Halde Studio — Annual Lookbook, 2024', alt: work[4].alt, position: '50% 30%' },
];

export const clients = [
  [
    { name: 'Maison Revue', type: 'Magazine' },
    { name: 'Atelier Vasseur', type: 'Fashion House' },
    { name: 'Ardent Milano', type: 'Fashion House' },
    { name: 'Contour Quarterly', type: 'Magazine' },
  ],
  [
    { name: 'Laurier Beauty', type: 'Beauty Brand' },
    { name: 'Folio Nine', type: 'Magazine' },
    { name: 'Maison Delaunay', type: 'Fashion House' },
    { name: 'Halde Studio', type: 'Fashion Brand' },
  ],
  [
    { name: 'Static Journal', type: 'Magazine' },
    { name: 'Casa Ortell', type: 'Fashion House' },
    { name: 'Ground Matter', type: 'Magazine' },
    { name: 'Hollis & Vane', type: 'Fashion Brand' },
  ],
];

export const about = {
  image: portrait,
  alt: 'Portrait of photographer Inès Marlowe',
  services: ['Editorial', 'Campaign', 'Lookbook', 'Beauty'],
};

export const budgets = ['Under $10k', '$10k – $25k', '$25k – $50k', '$50k – $100k', '$100k+'];
