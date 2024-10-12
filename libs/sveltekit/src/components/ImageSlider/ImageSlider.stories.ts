import ImageSlider from './ImageSlider.svelte';

export default {
  title: 'Media/ImageSlider',
  component: ImageSlider,
  argTypes: {
    images: { control: 'array' },
    activeIndex: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: ImageSlider,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3',
  ],
  activeIndex: 0,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  activeIndex: 1,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
  activeIndex: 2,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  activeIndex: 0,
};