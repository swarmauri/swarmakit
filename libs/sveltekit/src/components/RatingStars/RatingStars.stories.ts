import RatingStars from './RatingStars.svelte';

export default {
  title: 'Indicators/RatingStars',
  component: RatingStars,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    rating: 3,
    maxRating: 5,
    status: 'inactive',
  },
};

export const Hover = {
  args: {
    rating: 3,
    maxRating: 5,
    status: 'hover',
  },
};

export const Selected = {
  args: {
    rating: 4,
    maxRating: 5,
    status: 'selected',
  },
};

export const Inactive = {
  args: {
    rating: 3,
    maxRating: 5,
    status: 'inactive',
  },
};