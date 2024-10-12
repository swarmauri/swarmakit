import MediaGallery from './MediaGallery.vue';

export default {
  title: 'Media/MediaGallery',
  component: MediaGallery,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Thumbnail', 'Expanded', 'Slideshow', 'Zoom In/Out', 'Next/Previous'],
    },
    images: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { MediaGallery },
  setup() {
    return { args };
  },
  template: '<MediaGallery v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  state: 'Thumbnail',
  images: [
    'https://www.example.com/image1.jpg',
    'https://www.example.com/image2.jpg',
    'https://www.example.com/image3.jpg',
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'Expanded',
  images: [
    'https://www.example.com/image1.jpg',
    'https://www.example.com/image2.jpg',
    'https://www.example.com/image3.jpg',
  ],
};

export const Slideshow = Template.bind({});
Slideshow.args = {
  state: 'Slideshow',
  images: [
    'https://www.example.com/image1.jpg',
    'https://www.example.com/image2.jpg',
    'https://www.example.com/image3.jpg',
  ],
};

export const ZoomInOut = Template.bind({});
ZoomInOut.args = {
  state: 'Zoom In/Out',
  images: [
    'https://www.example.com/image1.jpg',
    'https://www.example.com/image2.jpg',
    'https://www.example.com/image3.jpg',
  ],
};

export const NextPrevious = Template.bind({});
NextPrevious.args = {
  state: 'Next/Previous',
  images: [
    'https://www.example.com/image1.jpg',
    'https://www.example.com/image2.jpg',
    'https://www.example.com/image3.jpg',
  ],
};