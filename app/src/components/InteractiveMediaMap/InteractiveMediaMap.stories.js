import React from 'react';
import InteractiveMediaMap from './InteractiveMediaMap';

export default {
  title: 'Media/InteractiveMediaMap',
  component: InteractiveMediaMap,
};

const Template = (args) => <InteractiveMediaMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  markers: [
    { name: 'Marker 1', position: { lat: 40.7128, lng: -74.0060 } },
    { name: 'Marker 2', position: { lat: 34.0522, lng: -118.2437 } },
  ],
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
  markers: [],
};