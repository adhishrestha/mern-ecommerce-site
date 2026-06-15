import { assets } from '../assets/data/assets';

export const products = [
  {
    id: 1,
    name: 'Small Ecru Ceramic Compote',
    slug: 'small-ecru-ceramic-compote',
    price: '49.00',
    comparePrice: 69,
    images: [assets.p_img1, assets.p_img1_1, assets.p_img1_2, assets.p_img1_3],
    rating: 3.9,
    reviewCount: 127,
    isInStock: true,
    colors: [
      {
        name: 'Sage',
        value: '#A1B8BE',
      },
      {
        name: 'White',
        value: '#FFFFFF',
      },
      {
        name: 'Terracotta',
        value: '#C88242',
      },
      {
        name: 'Rose',
        value: '#DCB9A8',
      },
      {
        name: 'Blue',
        value: '#758EBD',
      },
    ],

    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
    category: 'ceramic',
    isBestSeller: true,
    createdAt: '2026-05-22',
  },

  {
    id: 2,
    name: 'Porcelain Dinner Plate',
    slug: 'Porcelain-Dinner-Plate',
    price: '49.00',
    images: [assets.p_img2],
    description: 'Lorem ipsum dolor sit amet conse bolli tetur.',
    rating: 3.4,
    reviewCount: 17,
    isInStock: false,
    colors: [
      {
        name: 'White',
        value: '#FFFFFF',
      },

      {
        name: 'Rose',
        value: '#DCB9A8',
      },
      {
        name: 'Blue',
        value: '#758EBD',
      },
    ],
    category: 'dinnerware',
    isBestSeller: true,
    createdAt: '2026-05-20',
  },
  {
    id: 3,
    name: 'Warrick White Vase 20',
    slug: 'Warrick-White-Vase-20',
    price: '49.00',
    images: [assets.p_img3],
    rating: 5,
    reviewCount: 1107,
    isInStock: false,
    colors: [
      {
        name: 'Sage',
        value: '#A1B8BE',
      },
      {
        name: 'White',
        value: '#FFFFFF',
      },
      {
        name: 'Rose',
        value: '#DCB9A8',
      },
      {
        name: 'Blue',
        value: '#758EBD',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
    category: 'vase',
    isBestSeller: true,
    createdAt: '2026-05-21',
  },
  {
    id: 4,
    name: 'Marin White Dinner Plate',
    slug: 'Marin-White-Dinner-Plate',
    price: '49.00',
    comparePrice: 69,
    rating: 3.9,
    reviewCount: 127,
    isInStock: true,
    colors: [
      {
        name: 'Blue',
        value: '#758EBD',
      },
      {
        name: 'White',
        value: '#FFFFFF',
      },
      {
        name: 'Terracotta',
        value: '#C88242',
      },
      {
        name: 'Rose',
        value: '#DCB9A8',
      },
      {
        name: 'Sage',
        value: '#A1B8BE',
      },
    ],
    images: [
      assets.p_img4,
      assets.p_img4_1,
      assets.p_img4_2,
      assets.p_img4_3,
      assets.p_img4_4,
    ],
    description: 'Lorem ipsum dolor sit amet conse.',
    category: 'dinnerware',
    isBestSeller: true,
    createdAt: '2026-05-25',
  },
  {
    id: 5,
    name: 'Tall Cream Ceramic Vase',
    slug: 'Tall-Cream-Ceramic-Vase',
    price: '49.00',
    images: [assets.p_img5],
    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
    category: 'vase',
    isBestSeller: true,
    createdAt: '2026-05-24',
  },
  {
    id: 6,
    name: 'Luana Bowl',
    slug: 'Luana-Bowl',
    price: '49.00',
    images: [assets.p_img6],
    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',

    category: 'bowl',
    isBestSeller: true,
    createdAt: '2026-05-23',
  },
  {
    id: 7,
    name: 'Ophelia Matte Natural  Vase',
    slug: 'Ophelia-Matte-Natural -Vase',
    price: '49.00',
    images: [assets.p_img7],
    description: 'Lorem ipsum dolor sit amet conse bolli tetur.',

    category: 'vase',
    isBestSeller: false,
    createdAt: '2026-05-28',
  },
  {
    id: 8,
    name: 'Luana Bowl',
    slug: 'Luana-Bowl',
    price: '49.00',
    images: [assets.p_img8],
    description: 'Lorem ipsum dolor sit amet conse.',
    category: 'bowl',
    isBestSeller: false,
    createdAt: '2026-05-26',
  },
  {
    id: 9,
    name: 'Porcelain Dinner Plate',
    slug: 'Porcelain-Dinner-Plate',
    price: '49.00',
    images: [assets.p_img9],
    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
    category: 'dinnerware',
    isBestSeller: false,
    createdAt: '2026-05-27',
  },
  {
    id: 10,
    name: 'Porcelain Dinner Plate',
    slug: 'Porcelain-Dinner-Plate',
    price: '49.00',
    images: [assets.p_img10],
    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
    category: 'dinnerware',
    isBestSeller: false,
    createdAt: '2026-05-29',
  },
  {
    id: 11,
    name: 'Warrick White Vase 14',
    slug: 'Warrick-White-Vase-14',
    price: '49.00',
    images: [assets.p_img11],
    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
    category: 'vase',
    isBestSeller: true,
    createdAt: '2026-05-18',
  },
  {
    id: 12,
    name: 'Rounded Dual Handled Vase',
    slug: 'Rounded-Dual-Handled -Vase',
    price: '49.00',
    images: [assets.p_img12],
    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
    category: 'vase',
    isBestSeller: true,
    createdAt: '2026-05-17',
  },
  {
    id: 13,
    name: 'Rounded Dual Handled Vase',
    slug: 'Rounded-Dual-Handled -Vase',
    price: '49.00',
    images: [assets.p_img13],
    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
    category: 'vase',
    isBestSeller: false,
    createdAt: '2026-06-15',
  },
  {
    id: 14,
    name: 'Small Ecru Ceramic Compote',
    slug: 'small-ecru-ceramic-compote',
    price: '49.00',
    comparePrice: 69,
    images: [assets.p_img14],
    rating: 3,
    reviewCount: 12,
    isInStock: true,
    colors: [
      {
        name: 'Terracotta',
        value: '#C88242',
      },
      {
        name: 'Rose',
        value: '#DCB9A8',
      },
      {
        name: 'Blue',
        value: '#758EBD',
      },
    ],

    description:
      'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
    category: 'ceramic',
    isBestSeller: false,
    createdAt: '2026-05-22',
  },
];
