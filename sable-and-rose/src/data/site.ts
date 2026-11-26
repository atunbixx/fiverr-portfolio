// All business content lives here — swap this file to re-skin the template for a new client.
import heroHair from '../assets/img/gloss-hero.jpg';
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
  name: 'GLOSS',
  tagline: 'Hair Studio',
  city: 'Austin, TX',
  description:
    'Precision cuts, colour and textured hair in East Austin. Explore the menu, meet your stylist and book a chair at GLOSS.',
  phone: '(512) 555-0147',
  email: 'hello@gloss.studio',
  address: { street: '2118 E Cesar Chavez St', locality: 'Austin', region: 'TX', postcode: '78702', country: 'US' },
  instagram: '@gloss.atx',
  social: { instagram: 'https://instagram.com/gloss.atx/', tiktok: 'https://tiktok.com/', pinterest: 'https://pinterest.com/' },
  rating: '4.9',
  reviewCount: '600+',
  founded: 2016,
  currency: '$',
};

export const nav = [
  { label: 'Menu', href: '#services' },
  { label: 'Team', href: '#stylists' },
  { label: 'Work', href: '#lookbook' },
  { label: 'Visit', href: '#visit' },
];

export const hero = {
  image: heroHair,
  imageAlt: 'Profile of a model with a sculpted violet crop against a violet backdrop',
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
      { id: 'tr-olaplex', name: 'Bond Repair', description: 'Rebuilds strength after colour or heat.', duration: 30, price: 45 },
      { id: 'tr-scalp', name: 'Scalp Detox', description: 'Exfoliating scalp treatment with massage.', duration: 45, price: 60 },
      { id: 'tr-keratin', name: 'Keratin', description: 'Frizz-free, faster blow-dries for up to 4 months.', duration: 150, price: 280, from: true },
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
  { image: lookColour, alt: 'Vivid violet sculpted short cut', label: 'Vivid violet cut', tall: false },
  { image: lookAfro, alt: 'Full, defined natural afro', label: 'Natural afro', tall: true },
  { image: lookWaves, alt: 'Stylist curling long glossy waves', label: 'Glossy waves', tall: false },
  { image: lookCurls, alt: 'Long defined curls with braided detail', label: 'Defined curls', tall: false },
];

export const testimonials = [
  { quote: 'Ava turned my brassy highlights into the softest balayage.', name: 'Jordan M.', service: 'Balayage' },
  { quote: 'Finally a studio that gets curly hair. Marco cut every curl.', name: 'Danielle K.', service: 'Curly Cut' },
  { quote: 'My wedding hair survived 12 hours of Texas heat.', name: 'Sofia R.', service: 'Wedding Day Hair' },
];

export const photoCredits =
  'Photography via Pexels (free licence): Anastasiya Badun, Arina Krasnikova, Max Vakhtbovych, cottonbro studio, Nataliya Vaitkevich, Vladimir Vysotsky, Farouk Animashaun, Kseniia Lopyreva, Oscar Steiner, Alexander Mass, Beatriz Fernandes.';
