import MediaGallery from './MediaGallery.svelte';

export default {
  title: 'Media/MediaGallery',
  component: MediaGallery,
  argTypes: {
    isThumbnail: { control: 'boolean' },
    isExpanded: { control: 'boolean' },
    isSlideshow: { control: 'boolean' },
    isZoomed: { control: 'boolean' },
    currentImageIndex: { control: 'number' },
    images: { control: 'array' },
  },
};

const Template = (args) => ({
  Component: MediaGallery,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isThumbnail: true,
  isExpanded: false,
  isSlideshow: false,
  isZoomed: false,
  currentImageIndex: 0,
  images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  isExpanded: true,
};

export const Slideshow = Template.bind({});
Slideshow.args = {
  ...Default.args,
  isSlideshow: true,
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  ...Default.args,
  isZoomed: true,
};

export const NextPrevious = Template.bind({});
NextPrevious.args = {
  ...Default.args,
  currentImageIndex: 1,
};