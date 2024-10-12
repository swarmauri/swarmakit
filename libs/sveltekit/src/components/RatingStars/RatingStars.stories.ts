import RatingStars from './RatingStars.svelte';

export default {
  title: 'Components/Indicators/RatingStars',
  component: RatingStars,
  tags: ['autodocs'],
  argTypes: {
    rating: { control: { type: 'number', min: 0, max: 5 } },
    maxRating: { control: { type: 'number', min: 1, max: 10 } },
    interactive: { control: 'boolean' }
  },
};

const Template = (args) => ({
  Component: RatingStars,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  rating: 3,
  maxRating: 5,
  interactive: true,
};

export const Hover = Template.bind({});
Hover.args = {
  rating: 4,
  maxRating: 5,
  interactive: true,
};

export const Selected = Template.bind({});
Selected.args = {
  rating: 5,
  maxRating: 5,
  interactive: false,
};

export const Inactive = Template.bind({});
Inactive.args = {
  rating: 2,
  maxRating: 5,
  interactive: false,
};