// All business content lives here — swap this file to re-skin the template for a new client.
import heroHair from '../assets/img/hero-hair.jpg';
import heroInset from '../assets/img/hero-inset.jpg';
import studioImg from '../assets/img/studio.jpg';
import avaImg from '../assets/img/stylist-ava.jpg';
import marcoImg from '../assets/img/stylist-marco.jpg';
import lenaImg from '../assets/img/stylist-lena.jpg';
import lookBraids from '../assets/img/look-braids.jpg';
import lookBridal from '../assets/img/look-bridal.jpg';
import lookColour from '../assets/img/look-colour.jpg';
import lookAfro from '../assets/img/look-afro.jpg';
import lookWaves from '../assets/img/look-waves.jpg';
import lookCurls from '../assets/img/look-curls.jpg';

export const site = {
  name: 'Sable & Rose',
  tagline: 'Hair & Beauty Studio',
  city: 'Austin, TX',
  description:
    'Sable & Rose is a calm, light-filled hair studio in East Austin — precision cuts, lived-in colour, textured hair and bridal styling. Book online in under a minute.',
  phone: '(512) 555-0147',
  email: 'hello@sableandrose.studio',
  address: { street: '2118 E Cesar Chavez St', locality: 'Austin', region: 'TX', postcode: '78702', country: 'US' },
  instagram: '@sableandrose',
  social: { instagram: 'https://instagram.com/', tiktok: 'https://tiktok.com/', pinterest: 'https://pinterest.com/' },
  rating: '4.9',
  reviewCount: '600+',
  founded: 2016,
  currency: '$',
  offer: 'New clients — 15% off your first colour service',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Stylists', href: '#stylists' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Visit', href: '#visit' },
];

export const hero = {
  image: heroHair,
  imageAlt: 'Glossy, healthy brown hair seen from behind against a dark backdrop',
  inset: heroInset,
  insetAlt: 'Side profile of a woman with soft pink balayage',
};

// Weekly hours. Day index: 0 = Sunday … 6 = Saturday. null = closed.
export const hours: Record<number, { open: string; close: string } | null> = {
  0: { open: '11:00', close: '16:00' },
  1: null,
  2: { open: '10:00', close: '19:00' },
  3: { open: '10:00', close: '19:00' },
  4: { open: '10:00', close: '20:00' },
  5: { open: '10:00', close: '19:00' },
  6: { open: '09:00', close: '17:00' },
};
export const hoursDisplay = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tue – Wed', time: '10am – 7pm' },
  { day: 'Thursday', time: '10am – 8pm' },
  { day: 'Friday', time: '10am – 7pm' },
  { day: 'Saturday', time: '9am – 5pm' },
  { day: 'Sunday', time: '11am – 4pm' },
];

export type Service = { id: string; name: string; description: string; duration: number; price: number; from?: boolean };
export const menu: { id: string; label: string; services: Service[] }[] = [
  {
    id: 'cut', label: 'Cut & Style', services: [
      { id: 'cut-signature', name: 'Signature Cut & Style', description: 'Consultation, wash, precision cut and finish.', duration: 60, price: 85 },
      { id: 'cut-short', name: 'Short Hair & Clipper Cut', description: 'Tailored short cuts, fades and tidy-ups.', duration: 45, price: 55 },
      { id: 'cut-blowout', name: 'Blowout', description: 'Wash and a smooth, bouncy blow-dry that lasts.', duration: 45, price: 55 },
      { id: 'cut-fringe', name: 'Fringe Refresh', description: 'Quick bang trim between appointments.', duration: 15, price: 20 },
    ],
  },
  {
    id: 'colour', label: 'Colour', services: [
      { id: 'col-balayage', name: 'Balayage', description: 'Hand-painted, lived-in colour with toner and finish.', duration: 180, price: 240, from: true },
      { id: 'col-full', name: 'Full Colour', description: 'All-over permanent or demi colour, root to tip.', duration: 120, price: 140, from: true },
      { id: 'col-roots', name: 'Root Touch-Up', description: 'Regrowth coverage up to 1 inch.', duration: 90, price: 95 },
      { id: 'col-gloss', name: 'Gloss & Tone', description: 'Shine, tone-correct and refresh faded colour.', duration: 45, price: 65 },
    ],
  },
  {
    id: 'textured', label: 'Textured Hair', services: [
      { id: 'tex-curly', name: 'Curly Cut', description: 'Dry, curl-by-curl cut to shape your pattern.', duration: 75, price: 110 },
      { id: 'tex-silk', name: 'Silk Press', description: 'Heat-protected press for sleek, swinging movement.', duration: 90, price: 95 },
      { id: 'tex-braids', name: 'Knotless Braids', description: 'Medium knotless braids, mid-back length.', duration: 240, price: 180, from: true },
      { id: 'tex-twist', name: 'Wash & Twist-Out', description: 'Deep cleanse, define and set for days of curls.', duration: 90, price: 90 },
    ],
  },
  {
    id: 'treatments', label: 'Treatments', services: [
      { id: 'tr-olaplex', name: 'Bond Repair Treatment', description: 'Rebuilds strength after colour or heat.', duration: 30, price: 45 },
      { id: 'tr-scalp', name: 'Scalp Detox Ritual', description: 'Exfoliating scalp treatment with massage.', duration: 45, price: 60 },
      { id: 'tr-keratin', name: 'Smoothing Keratin', description: 'Frizz-free, faster blow-dries for up to 4 months.', duration: 150, price: 280, from: true },
    ],
  },
  {
    id: 'bridal', label: 'Bridal & Events', services: [
      { id: 'br-trial', name: 'Bridal Trial', description: 'Design your wedding look with your stylist.', duration: 90, price: 150 },
      { id: 'br-day', name: 'Wedding Day Hair', description: 'In-studio or on-location bridal styling.', duration: 120, price: 250, from: true },
      { id: 'br-event', name: 'Event Styling', description: 'Updos, waves and polished looks for any occasion.', duration: 60, price: 95 },
    ],
  },
];

export const stylists = [
  { id: 'ava', name: 'Ava Brooks', role: 'Founder & Colour Director', specialties: ['Balayage', 'Blondes', 'Colour correction'], image: avaImg, alt: 'Portrait of Ava Brooks in the studio', days: [0, 2, 3, 4, 5, 6] },
  { id: 'marco', name: 'Marco Reyes', role: 'Senior Stylist', specialties: ['Precision cuts', 'Curly cuts', 'Gloss'], image: marcoImg, alt: 'Portrait of Marco Reyes holding a colour bowl', days: [2, 3, 4, 5, 6] },
  { id: 'lena', name: 'Lena Volkova', role: 'Colour & Bridal Specialist', specialties: ['Vivid colour', 'Bridal', 'Updos'], image: lenaImg, alt: 'Portrait of Lena Volkova holding colour tubes', days: [0, 3, 4, 5, 6] },
];

export const studio = {
  image: studioImg,
  alt: 'Bright salon interior with round illuminated mirrors and leather styling chairs',
  points: [
    { icon: 'sparkles', title: 'Complimentary consultations', text: 'Every new client starts with a 10-minute chat — no surprises.' },
    { icon: 'droplets', title: 'Bond repair in every colour', text: 'We protect your hair’s strength with every lightening service.' },
    { icon: 'leaf', title: 'Clean, cruelty-free products', text: 'Vegan colour lines and a refill bar for your favourites.' },
  ],
} as const;

export const lookbook = [
  { image: lookBraids, alt: 'Long knotless braids with silver cuffs', label: 'Knotless braids', tall: true },
  { image: lookBridal, alt: 'Soft romantic bridal updo, black and white', label: 'Bridal updo', tall: false },
  { image: lookColour, alt: 'Vivid violet sculpted short cut', label: 'Vivid colour', tall: false },
  { image: lookAfro, alt: 'Full, defined natural afro', label: 'Natural curls', tall: true },
  { image: lookWaves, alt: 'Stylist curling long glossy waves', label: 'Glossy waves', tall: false },
  { image: lookCurls, alt: 'Long defined curls with braided detail', label: 'Curl definition', tall: false },
];

export const testimonials = [
  { quote: 'Ava completely transformed my brassy highlights into the softest balayage. I get compliments every single day.', name: 'Jordan M.', service: 'Balayage' },
  { quote: 'Finally a studio that truly understands curly hair. Marco cut every curl individually — it has never sat better.', name: 'Danielle K.', service: 'Curly Cut' },
  { quote: 'Lena did my wedding hair and it held through 12 hours of Texas heat and dancing. Calm, kind and so talented.', name: 'Sofia R.', service: 'Wedding Day Hair' },
];

export const photoCredits =
  'Photography via Pexels (free licence): Anastasiya Badun, Arina Krasnikova, Max Vakhtbovych, cottonbro studio, Nataliya Vaitkevich, Vladimir Vysotsky, Farouk Animashaun, Kseniia Lopyreva, Oscar Steiner, Alexander Mass, Beatriz Fernandes.';
