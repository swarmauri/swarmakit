import Carousel from './Carousel.vue';

export default {
  title: 'Media/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    slides: { control: 'array' },
    state: { control: 'select', options: ['Auto-Play', 'Paused', 'Hover', 'Active'] },
  },
};

const Template = (args: any) => ({
  components: { Carousel },
  setup() {
    return { args };
  },
  template: '<Carousel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  slides: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  state: 'Paused',
};

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  slides: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  state: 'Auto-Play',
};

export const Paused = Template.bind({});
Paused.args = {
  slides: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  state: 'Paused',
};

export const Hover = Template.bind({});
Hover.args = {
  slides: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  state: 'Hover',
};

export const Active = Template.bind({});
Active.args = {
  slides: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  state: 'Active',
};