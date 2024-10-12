import InteractiveMediaMap from './InteractiveMediaMap.svelte';

export default {
  title: 'Media/InteractiveMediaMap',
  component: InteractiveMediaMap,
  argTypes: {
    markers: { control: 'array' },
    selectedMarkerId: { control: 'number' },
    loading: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: InteractiveMediaMap,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  markers: [
    { id: 1, label: 'Marker 1', lat: 30, lng: 50 },
    { id: 2, label: 'Marker 2', lat: 70, lng: 80 },
  ],
  selectedMarkerId: null,
  loading: false,
};

export const ZoomedIn = Template.bind({});
ZoomedIn.args = {
  ...Default.args,
};

export const MarkerSelected = Template.bind({});
MarkerSelected.args = {
  ...Default.args,
  selectedMarkerId: 1,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};