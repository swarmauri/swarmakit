import React from 'react';
import InteractiveMediaMap from './InteractiveMediaMap';

export default {
  title: 'Media/InteractiveMediaMap',
  component: InteractiveMediaMap,
};

const Template = (args) => <InteractiveMediaMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  mapSrc: 'https://via.placeholder.com/800x500?text=Map',
  markers: [
    { top: 30, left: 40 },
    { top: 60, left: 80 },
  ],
  loading: false,
};

export const ZoomedIn = Template.bind({});
ZoomedIn.args = {
  ...Default.args,
};

export const MarkerSelected = Template.bind({});
MarkerSelected.args = {
  ...Default.args,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};