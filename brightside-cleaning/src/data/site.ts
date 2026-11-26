// All business content lives here — swap this file to re-skin the template for a new client.
import heroImg from '../assets/img/hero-kitchen.jpg';
import beforeImg from '../assets/img/before-kitchen.jpg';
import afterImg from '../assets/img/after-kitchen.jpg';

export const site = {
  name: 'Brightside Cleaning Co.',
  short: 'Brightside',
  city: 'London',
  description:
    "Professional residential & end-of-tenancy cleaning in London. Vetted cleaners, eco-friendly products and a 100% satisfaction guarantee. Get an instant quote online.",
  phone: '020 7946 0123',
  email: 'hello@brightsidecleaning.co.uk',
  hours: 'Mon–Sun, 7am – 9pm',
  rating: { stars: '5.0', count: '2,400+', label: 'verified reviews' },
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    x: 'https://x.com/',
  },
  currency: '£',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#quote' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#book' },
];

export const hero = {
  image: heroImg,
  alt: 'Bright, spotless modern kitchen with sunlight streaming in',
  badge: "🌿 Eco-friendly products · London's most trusted cleaners",
  titleA: 'A spotless home,',
  titleB: 'without lifting a finger.',
  lead: 'Professional residential & end-of-tenancy cleaning in London. Vetted cleaners, eco products, and a satisfaction guarantee.',
};

// Instant-quote pricing model: base price + per extra bedroom/bathroom + extras
export const pricing = {
  cleanTypes: [
    { id: 'regular', label: 'Regular Clean', base: 60, perBedroom: 15, perBathroom: 12 },
    { id: 'deep', label: 'Deep Clean', base: 100, perBedroom: 22, perBathroom: 18 },
    { id: 'tenancy', label: 'End of Tenancy', base: 140, perBedroom: 30, perBathroom: 25 },
  ],
  extras: [
    { id: 'oven', label: 'Oven cleaning', price: 30 },
    { id: 'windows', label: 'Window cleaning', price: 25 },
    { id: 'carpet', label: 'Carpet cleaning', price: 40 },
    { id: 'fridge', label: 'Fridge cleaning', price: 20 },
  ],
  defaults: { bedrooms: 2, bathrooms: 1, type: 'deep', extras: ['oven'] },
  limits: { bedrooms: [1, 6], bathrooms: [1, 4] },
};

export const services = [
  { icon: 'sparkles', title: 'Regular Cleaning', description: 'Weekly or fortnightly visits to keep your home consistently clean and fresh.' },
  { icon: 'house', title: 'Deep Cleaning', description: 'A thorough top-to-bottom clean for homes that need extra attention.' },
  { icon: 'key-round', title: 'End of Tenancy', description: 'Landlord-approved cleans to help you get your full deposit back.' },
  { icon: 'building', title: 'Office Cleaning', description: 'Professional cleaning for offices and commercial spaces, big or small.' },
  { icon: 'wind', title: 'Carpet & Upholstery', description: 'Steam cleaning to remove stains, odours and allergens from soft furnishings.' },
  { icon: 'flower-2', title: 'Eco-Friendly Clean', description: 'All-natural, non-toxic products safe for children, pets, and the planet.' },
] as const;

export const beforeAfter = {
  before: { image: beforeImg, alt: 'Cluttered kitchen with crowded worktops before cleaning' },
  after: { image: afterImg, alt: 'Spotless kitchen with clear, gleaming worktops after cleaning' },
};

export const steps = [
  { icon: 'file-text', title: 'Get a Quote', description: 'Use our instant calculator to get a transparent, fixed price in seconds.' },
  { icon: 'calendar', title: 'Pick Your Slot', description: 'Choose a date and 2-hour arrival window that suits you — 7 days a week.' },
  { icon: 'sparkles', title: 'Enjoy a Clean Home', description: 'Your vetted cleaner arrives fully equipped. You relax and come home to spotless.' },
] as const;

export const trust = [
  { icon: 'shield-check', title: 'Fully Insured', subtitle: '£5m public liability cover' },
  { icon: 'user-check', title: 'Vetted & Trained Staff', subtitle: 'Background checked, reference verified' },
  { icon: 'badge-check', title: '100% Satisfaction Guarantee', subtitle: 'Free re-clean if not happy' },
  { icon: 'leaf', title: 'Eco-Friendly Products', subtitle: 'Safe for kids, pets & planet' },
] as const;

export const reviews = [
  { name: 'Sarah Mitchell', location: 'Clapham, London', review: 'Absolutely brilliant service. The team left my flat sparkling clean before my new tenants moved in. Got my full deposit back!' },
  { name: 'James Okafor', location: 'Canary Wharf, London', review: "I've been using Brightside for my weekly clean for 8 months. Consistently excellent — always thorough, always on time." },
  { name: 'Priya Sharma', location: 'Islington, London', review: 'The eco-friendly products were the selling point for me — my kids and cat are sensitive. The clean was fantastic too!' },
];

export const areas = [
  'Kensington', 'Chelsea', 'Fulham', 'Wandsworth', 'Battersea', 'Clapham',
  'Brixton', 'Peckham', 'Greenwich', 'Canary Wharf', 'Hackney', 'Islington',
  'Stoke Newington', 'Shoreditch', 'Bethnal Green', 'Bow', 'Stratford', 'Wimbledon',
  'Putney', 'Richmond', 'Hammersmith', 'Chiswick', 'Ealing', 'Notting Hill',
];

export const faqs = [
  { q: 'What areas do you cover?', a: 'We serve all major neighbourhoods across London including Kensington, Chelsea, Fulham, Wandsworth, Battersea, Clapham, Brixton, Greenwich, Canary Wharf, Hackney, Islington and more.' },
  { q: 'Are your cleaners vetted and insured?', a: 'Yes. Every cleaner undergoes a background check, reference verification and in-person training before joining our team, and we carry £5m public liability insurance.' },
  { q: "What if I'm not happy with the clean?", a: "We offer a 100% satisfaction guarantee. If you're not happy, we'll re-clean the area in question free of charge within 24 hours." },
  { q: 'Do I need to provide cleaning supplies?', a: 'No — we bring all our own professional-grade, eco-friendly products and equipment. Just let us in!' },
  { q: 'How do I book?', a: 'Use our instant quote calculator, then send the booking form with your preferred date. We confirm your slot within the hour.' },
];

export const footerLinks = {
  Services: ['Regular Cleaning', 'Deep Cleaning', 'End of Tenancy', 'Office Cleaning', 'Carpet Cleaning'],
  Company: ['About Us', 'How it Works', 'Careers', 'Blog', 'Press'],
  Support: ['FAQ', 'Contact Us', 'Booking Policy', 'Privacy Policy', 'Terms & Conditions'],
};

export const photoCredits =
  'Photography via Pexels (free licence): Alexander Zvir, Alexander F Ungerer, Curtis Adams.';
