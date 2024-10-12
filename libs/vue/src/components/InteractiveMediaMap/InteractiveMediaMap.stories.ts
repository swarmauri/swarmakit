import InteractiveMediaMap from './InteractiveMediaMap.vue';

export default {
  title: 'Media/InteractiveMediaMap',
  component: InteractiveMediaMap,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['Default', 'Zoomed In', 'Marker Selected', 'Loading'] },
    markers: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { InteractiveMediaMap },
  setup() {
    return { args };
  },
  template: '<InteractiveMediaMap v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  state: 'Default',
  markers: [
    { x: 20, y: 30 },
    { x: 50, y: 50 },
    { x: 80, y: 70 },
  ],
};

export const ZoomedIn = Template.bind({});
ZoomedIn.args = {
  state: 'Zoomed In',
  markers: [
    { x: 20, y: 30 },
    { x: 50, y: 50 },
    { x: 80, y: 70 },
  ],
};

export const MarkerSelected = Template.bind({});
MarkerSelected.args = {
  state: 'Marker Selected',
  markers: [
    { x: 20, y: 30 },
    { x: 50, y: 50 },
    { x: 80, y: 70 },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'Loading',
  markers: [],
};