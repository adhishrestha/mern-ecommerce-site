import { assets } from '../assets/data/assets';

export const TIMELINE_DATA = [
  {
    id: 1,
    title: '1910',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    image: assets.about_p_img1,
    imageAlt: 'Moon ceramic craftsmanship in 1910',
    reverse: false,
  },
  {
    id: 2,
    title: '1990',
    description:
      'Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit',
    image: assets.about_p_img2,
    imageAlt: 'Traditional clay vase on wooden table',
    reverse: true,
  },
  {
    id: 3,
    title: '2010',
    description:
      'Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit',
    image: assets.about_p_img3,
    imageAlt: 'Modern blue ceramic plate styling',
    reverse: false,
  },
];

export const PROCESS_DATA = {
  featuredImage: assets.about_p_img4,
  imageAlt:
    'Artisan sculpting a clay plate detailing intricate circular patterns',
  steps: [
    {
      id: 1,
      title: 'Product design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.',
    },
    {
      id: 2,
      title: 'Crafted',
      description:
        'Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.',
    },
    {
      id: 3,
      title: 'Sell product',
      description:
        'Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.',
    },
  ],
};

export const TEAM_DATA = [
  {
    id: 1,
    name: 'Bernie Patterson',
    role: 'CEO & Founder',
    image: assets.team_memb_img1,
  },
  {
    id: 2,
    name: 'Ophelia Vase',
    role: 'Creative Director',
    image: assets.team_memb_img2,
  },
  {
    id: 3,
    name: 'Corbin Hossain',
    role: 'Artist',
    image: assets.team_memb_img3,
  },
  {
    id: 4,
    name: 'Seren Bowl',
    role: 'Marketing',
    image: assets.team_memb_img4,
  },
];
