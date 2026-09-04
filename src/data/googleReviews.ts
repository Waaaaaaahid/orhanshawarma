import type { Review } from '@/data/restaurantData';

// Selected 4+ star customer reviews surfaced as Google reviews by public review aggregators.
// Wording is lightly summarized for the website; names, ratings and source are retained.
export const googleReviews: Review[] = [
  {
    id: 'google-shakeel-a',
    rating: 5,
    text: 'A great shawarma experience. The buff Nalli Shawarma stood out for its flavour, tender meat and spices, while the pricing felt very affordable.',
    author: 'Shakeel A',
    source: 'Google Review · 5/5',
  },
  {
    id: 'google-juweriya-n',
    rating: 5,
    text: 'Loved the Turkish, Nalli and Lebanese shawarmas. The meat was tender and juicy, with fresh vegetables and signature mint chutney and garlic mayo dips.',
    author: 'Juweriya N',
    source: 'Google Review · 5/5',
  },
  {
    id: 'google-fyzan-a',
    rating: 5,
    text: 'One of the best shawarmas I had in a while. The food was excellent, the shop was small, and the prices were very reasonable.',
    author: 'Fyzan A',
    source: 'Google Review · 5/5',
  },
  {
    id: 'google-riya-g',
    rating: 4,
    text: 'Had delicious shawarma here. One plate was quite filling, and I liked that the mayonnaise was served separately as a dip.',
    author: 'Riya G',
    source: 'Google Review · 4/5',
  },
  {
    id: 'google-farhan-k',
    rating: 4,
    text: 'Great shawarma at a very reasonable price, with fast service. The place can get crowded, but the food makes it worth visiting.',
    author: 'Farhan K',
    source: 'Google Review · 4/5',
  },
];
