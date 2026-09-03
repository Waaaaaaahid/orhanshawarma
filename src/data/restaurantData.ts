// ============================================================
// ORHAN SHAWARMA HOUSE — Central Business Data
// ============================================================
// All business information lives here. Update this file to
// change content across the entire website.
// Fields marked with [PLACEHOLDER] need verified data.
// ============================================================

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'SHAWARMA' | 'SIGNATURES' | 'SIDES' | 'DRINKS' | 'COMBOS';
  image: string;
  veg: boolean;
  available: boolean;
};

export type DayHours = {
  day: string;
  hours: string;
};

export type Location = {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: DayHours[];
  mapsUrl: string;
  latitude: string;
  longitude: string;
  image: string;
  orderUrl: string;
  instagramUrl: string;
  services: string[];
  description: string;
};

export type Review = {
  id: string;
  rating: number;
  text: string;
  author: string;
  source: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span: 'tall' | 'wide' | 'normal';
};

// ── Brand ────────────────────────────────────────────────────
export const brand = {
  name: 'ORHAN',
  fullName: 'ORHAN SHAWARMA HOUSE',
  tagline: 'Little Place, Big Taste',
  established: '',
  shortDescription:
    'Bold shawarma. Big flavour. A Delhi NCR street-food spot serving up flame-grilled wraps, signature Nalli Shawarma, and the kind of cravings that keep you coming back.',
};

// ── Contact ──────────────────────────────────────────────────
export const contact = {
  phone: '',
  whatsapp: '',
  email: '',
  primaryAddress: '[ADD VERIFIED ADDRESS]',
  instagramUrl: '',
  facebookUrl: '',
  mapsUrl: '',
};

// ── SEO ──────────────────────────────────────────────────────
export const seo = {
  title: 'Orhan Shawarma House | Official Website',
  description:
    'Orhan Shawarma House — Little Place, Big Taste. Premium shawarma & street food in Delhi NCR. Explore our menu, signature Nalli Shawarma, and find your nearest branch.',
  ogImage:
    'https://images.pexels.com/photos/10572741/pexels-photo-10572741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  canonical: 'https://orhanshawarma.com/',
};

// ── Signature Product ────────────────────────────────────────
export const signatureProduct = {
  label: 'THE ORHAN SPECIAL',
  title: 'NALLI SHAWARMA',
  description:
    'Slow-cooked marrow-infused shawarma, carved fresh off the spit and wrapped in warm flatbread with house sauces. The signature that built the name.',
  features: [
    'Marinated overnight in secret spice blend',
    'Carved fresh from the vertical spit',
    'Served with house-made garlic & chilli sauce',
  ],
  image:
    'https://images.pexels.com/photos/10572741/pexels-photo-10572741.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
};

// ── About ────────────────────────────────────────────────────
export const about = {
  heading: 'ABOUT ORHAN',
  altHeading: 'MORE THAN SHAWARMA.',
  body: [
    'Orhan Shawarma House was born from a simple idea: bring bold, authentic street-food flavour to Delhi NCR — and do it with no shortcuts.',
    'Every shawarma is built to order. Every spit is loaded fresh. Every sauce is made in-house. From the signature Nalli Shawarma to the classic chicken roll, the focus is the same: big taste from a little place.',
    '[Add verified brand story here — when was Orhan founded, who started it, what inspired the concept.]',
  ],
  image:
    'https://images.pexels.com/photos/32796208/pexels-photo-32796208.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  stats: [
    { label: 'SIGNATURE DISH', value: 'Nalli Shawarma' },
    { label: 'CITY', value: 'Delhi NCR' },
    { label: 'STYLE', value: 'Street Food' },
  ],
};

// ── Menu Items ───────────────────────────────────────────────
export const menuItems: MenuItem[] = [
  {
    id: 'nalli-shawarma',
    name: 'Nalli Shawarma',
    description:
      'The signature. Marrow-infused shawarma carved off the spit, wrapped with house sauces.',
    price: '₹[ADD MENU PRICE]',
    category: 'SIGNATURES',
    image:
      'https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'classic-chicken-shawarma',
    name: 'Classic Chicken Shawarma',
    description:
      'Marinated chicken shaved fresh, garlic sauce, pickles, wrapped tight.',
    price: '₹[ADD MENU PRICE]',
    category: 'SHAWARMA',
    image:
      'https://images.pexels.com/photos/18330008/pexels-photo-18330008.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'double-meat-shawarma',
    name: 'Double Meat Shawarma',
    description:
      'Twice the carved shawarma, extra sauce, grilled flatbread. Built for big cravings.',
    price: '₹[ADD MENU PRICE]',
    category: 'SHAWARMA',
    image:
      'https://images.pexels.com/photos/38337105/pexels-photo-38337105.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'mutton-shawarma',
    name: 'Mutton Shawarma',
    description:
      'Slow-marinated mutton from the spit, warm spices, house chutney.',
    price: '₹[ADD MENU PRICE]',
    category: 'SHAWARMA',
    image:
      'https://images.pexels.com/photos/5779368/pexels-photo-5779368.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'shawarma-platter',
    name: 'Shawarma Platter',
    description:
      'Carved shawarma over rice, saffron, pickled veg, and dual sauces.',
    price: '₹[ADD MENU PRICE]',
    category: 'SIGNATURES',
    image:
      'https://images.pexels.com/photos/18177325/pexels-photo-18177325.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'veg-shawarma',
    name: 'Veg Shawarma',
    description:
      'Grilled paneer & veg, garlic sauce, crunch — all the shawarma feel, fully veg.',
    price: '₹[ADD MENU PRICE]',
    category: 'SHAWARMA',
    image:
      'https://images.pexels.com/photos/15913640/pexels-photo-15913640.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: true,
    available: true,
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Shawarma Fries',
    description:
      'Crispy fries topped with shaved shawarma, melted cheese, and house sauce.',
    price: '₹[ADD MENU PRICE]',
    category: 'SIDES',
    image:
      'https://images.pexels.com/photos/20535802/pexels-photo-20535802.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'cheese-fries',
    name: 'Cheese Fries',
    description: 'Golden fries, molten cheese, a dust of spices.',
    price: '₹[ADD MENU PRICE]',
    category: 'SIDES',
    image:
      'https://images.pexels.com/photos/39034199/pexels-photo-39034199.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: true,
    available: true,
  },
  {
    id: 'hummus-pita',
    name: 'Hummus & Pita',
    description: 'Creamy house hummus, warm pita, olive oil drizzle.',
    price: '₹[ADD MENU PRICE]',
    category: 'SIDES',
    image:
      'https://images.pexels.com/photos/5899670/pexels-photo-5899670.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: true,
    available: true,
  },
  {
    id: 'chicken-shawarma-combo',
    name: 'Chicken Shawarma Combo',
    description: 'Classic chicken shawarma, cheese fries, and a drink.',
    price: '₹[ADD MENU PRICE]',
    category: 'COMBOS',
    image:
      'https://images.pexels.com/photos/5175625/pexels-photo-5175625.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'nalli-combo',
    name: 'Nalli Shawarma Combo',
    description: 'The signature Nalli, loaded fries, and a soft drink.',
    price: '₹[ADD MENU PRICE]',
    category: 'COMBOS',
    image:
      'https://images.pexels.com/photos/34106235/pexels-photo-34106235.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'cola',
    name: 'Soft Drink',
    description: 'Chilled cola or choice of soft drink.',
    price: '₹[ADD MENU PRICE]',
    category: 'DRINKS',
    image:
      'https://images.pexels.com/photos/8880742/pexels-photo-8880742.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: true,
    available: true,
  },
  {
    id: 'mint-lemonade',
    name: 'Mint Lemonade',
    description: 'Fresh lime, mint, ice — the perfect shawarma companion.',
    price: '₹[ADD MENU PRICE]',
    category: 'DRINKS',
    image:
      'https://images.pexels.com/photos/34837764/pexels-photo-34837764.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: true,
    available: true,
  },
];

export const menuCategories = [
  'ALL',
  'SHAWARMA',
  'SIGNATURES',
  'SIDES',
  'DRINKS',
  'COMBOS',
] as const;

// ── Experience Section ───────────────────────────────────────
export const experience = {
  words: ['MEAT.', 'FIRE.', 'FLAVOUR.'],
  images: [
    {
      src: 'https://images.pexels.com/photos/37229056/pexels-photo-37229056.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
      alt: 'Shawarma spit roasting with vibrant flames',
    },
    {
      src: 'https://images.pexels.com/photos/5779372/pexels-photo-5779372.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
      alt: 'Hands slicing fresh shawarma off the spit',
    },
    {
      src: 'https://images.pexels.com/photos/19692020/pexels-photo-19692020.jpeg?auto=compress&cs=tinysrgb&h=900&w=500',
      alt: 'Chef cooking with dramatic flames in kitchen',
    },
    {
      src: 'https://images.pexels.com/photos/8018079/pexels-photo-8018079.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
      alt: 'Finished shawarma wraps garnished with fresh cucumber',
    },
  ],
};

// ── Gallery ──────────────────────────────────────────────────
export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/10572741/pexels-photo-10572741.jpeg?auto=compress&cs=tinysrgb&h=800&w=900',
    alt: 'Juicy shawarma cooking on a vertical rotisserie',
    span: 'tall',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    alt: 'Freshly grilled shawarma wrap halved to show filling',
    span: 'wide',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/27668672/pexels-photo-27668672.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Authentic shawarma rotating on spits in a street food stall',
    span: 'normal',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/4427655/pexels-photo-4427655.jpeg?auto=compress&cs=tinysrgb&h=700&w=600',
    alt: 'Chef grilling shawarma on open flame',
    span: 'tall',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/5779386/pexels-photo-5779876.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    alt: 'Shawarma on rotisserie inside a modern food kitchen',
    span: 'wide',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/11286814/pexels-photo-11286814.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Turkish kebab wrap with fries and vegetables',
    span: 'normal',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/19300593/pexels-photo-19300593.jpeg?auto=compress&cs=tinysrgb&h=700&w=600',
    alt: 'Moody restaurant interior with warm pendant lighting',
    span: 'tall',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/15202777/pexels-photo-15202777.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    alt: 'Hearty wrap served with fries and dipping sauce',
    span: 'wide',
  },
];

// ── Reviews ──────────────────────────────────────────────────
export const reviews: Review[] = [];

export const reviewsPlaceholder = {
  heading: 'WHAT PEOPLE SAY',
  message:
    'Reviews will appear here once verified. Add real customer reviews or connect a verified Google rating to display authentic feedback.',
};

// ── Locations ────────────────────────────────────────────────
export const locations: Location[] = [
  {
    id: '[branch-id]',
    name: 'Orhan Shawarma House',
    area: '[ADD AREA]',
    city: '[ADD CITY]',
    address: '[ADD VERIFIED ADDRESS]',
    phone: '[ADD PHONE NUMBER]',
    whatsapp: '',
    hours: [
      { day: 'Monday', hours: '[ADD OPENING HOURS]' },
      { day: 'Tuesday', hours: '[ADD OPENING HOURS]' },
      { day: 'Wednesday', hours: '[ADD OPENING HOURS]' },
      { day: 'Thursday', hours: '[ADD OPENING HOURS]' },
      { day: 'Friday', hours: '[ADD OPENING HOURS]' },
      { day: 'Saturday', hours: '[ADD OPENING HOURS]' },
      { day: 'Sunday', hours: '[ADD OPENING HOURS]' },
    ],
    mapsUrl: '',
    latitude: '',
    longitude: '',
    image:
      'https://images.pexels.com/photos/19300593/pexels-photo-19300593.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000',
    orderUrl: '',
    instagramUrl: '',
    services: [],
    description:
      '[Add verified branch description — what makes this location unique, what services are available.]',
  },
];

// ── Navigation ───────────────────────────────────────────────
export const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'MENU', href: '#menu' },
  { label: 'ABOUT', href: '#about' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'LOCATIONS', href: '#locations' },
  { label: 'REVIEWS', href: '#reviews' },
  { label: 'CONTACT', href: '#contact' },
];

// ── Order CTA ────────────────────────────────────────────────
export const orderConfig = {
  url: '',
  label: 'ORDER NOW',
  whatsapp: '',
};
