import ImageSlider from './ImageSlider.vue';

export default {
  title: 'Media/ImageSlider',
  component: ImageSlider,
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'array' },
    state: { control: 'select', options: ['Active', 'Inactive', 'Hover'] },
  },
};

const Template = (args: any) => ({
  components: { ImageSlider },
  setup() {
    return { args };
  },
  template: '<ImageSlider v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ],
  state: 'Active',
};

export const Active = Template.bind({});
Active.args = {
  images: [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ],
  state: 'Active',
};

export const Inactive = Template.bind({});
Inactive.args = {
  images: [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ],
  state: 'Inactive',
};

export const Hover = Template.bind({});
Hover.args = {
  images: [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ],
  state: 'Hover',
};