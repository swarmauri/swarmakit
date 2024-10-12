import DegreeImageViewer from './360-DegreeImageViewer.vue';

export default {
  title: 'Media/360-DegreeImageViewer',
  component: DegreeImageViewer,
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'array' },
    loading: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { DegreeImageViewer },
  setup() {
    return { args };
  },
  template: '<DegreeImageViewer v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  images: Array.from({ length: 36 }, (_, i) => `image_${i + 1}.jpg`),
  loading: false,
};

export const Rotating = Template.bind({});
Rotating.args = {
  images: Array.from({ length: 36 }, (_, i) => `image_${i + 1}.jpg`),
  loading: false,
};

export const Paused = Template.bind({});
Paused.args = {
  images: Array.from({ length: 36 }, (_, i) => `image_${i + 1}.jpg`),
  loading: false,
};

export const ZoomInOut = Template.bind({});
ZoomInOut.args = {
  images: Array.from({ length: 36 }, (_, i) => `image_${i + 1}.jpg`),
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  images: [],
  loading: true,
};