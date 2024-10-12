import Carousel from './Carousel.svelte';

export default {
  title: 'Media/Carousel',
  component: Carousel,
  argTypes: {
    images: { control: 'array' },
    autoPlay: { control: 'boolean' },
    interval: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: Carousel,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  autoPlay: false,
  interval: 3000,
};

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  ...Default.args,
  autoPlay: true,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  autoPlay: false,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  autoPlay: true,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  autoPlay: false,
};