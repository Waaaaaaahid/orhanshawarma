import type { MenuItem } from '@/data/restaurantData';

// Prices verified from public Orhan Shawarma House menu/listing evidence.
// Delhi sources show ₹60 for a shawarma and a menu board showing ₹100/plate
// for Lebanese Buff + Chicken Shawarma and ₹120/plate for Turkish Donor Kabab/Burger.
export const menuItems: MenuItem[] = [
  {
    id: 'nalli-shawarma',
    name: 'Nalli Shawarma',
    description: 'Orhan’s signature buff nalli shawarma with fresh fillings and house sauces.',
    price: '₹60',
    category: 'SIGNATURES',
    image: 'https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'classic-chicken-shawarma',
    name: 'Chicken Shawarma',
    description: 'Chicken shawarma wrapped fresh with vegetables and signature sauces.',
    price: '₹100 / plate',
    category: 'SHAWARMA',
    image: 'https://images.pexels.com/photos/18330008/pexels-photo-18330008.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'lebanese-buff-shawarma',
    name: 'Lebanese Buff Shawarma',
    description: 'Lebanese-style buff shawarma served fresh with the house accompaniments.',
    price: '₹100 / plate',
    category: 'SHAWARMA',
    image: 'https://images.pexels.com/photos/38337105/pexels-photo-38337105.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'turkish-donor-kabab',
    name: 'Turkish Donor Kabab',
    description: 'Turkish-style donor kabab, carved fresh and served hot.',
    price: '₹120 / plate',
    category: 'SIGNATURES',
    image: 'https://images.pexels.com/photos/5779368/pexels-photo-5779368.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
  {
    id: 'turkish-donor-burger',
    name: 'Turkish Donor Burger',
    description: 'Turkish donor meat loaded into a burger with fresh fillings and sauces.',
    price: '₹120 / plate',
    category: 'SIGNATURES',
    image: 'https://images.pexels.com/photos/5175625/pexels-photo-5175625.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    veg: false,
    available: true,
  },
];

export const menuCategories = ['ALL', 'SHAWARMA', 'SIGNATURES'] as const;
