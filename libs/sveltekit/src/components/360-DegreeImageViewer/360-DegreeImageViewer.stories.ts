import DegreeImageViewer from './360-DegreeImageViewer.svelte';

export default {
  title: 'Media/360-DegreeImageViewer',
  component: DegreeImageViewer,
  argTypes: {
    images: { control: 'array' },
    isRotating: { control: 'boolean' },
    isZoomedIn: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: DegreeImageViewer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  isRotating: false,
  isZoomedIn: false,
  isLoading: false,
};

export const Rotating = Template.bind({});
Rotating.args = {
  ...Default.args,
  isRotating: true,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  isRotating: false,
};

export const ZoomInOut = Template.bind({});
ZoomInOut.args = {
  ...Default.args,
  isZoomedIn: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};