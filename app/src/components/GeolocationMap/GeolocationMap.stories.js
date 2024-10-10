// GeolocationMap.stories.js
import React from 'react';
import GeolocationMap from './GeolocationMap';

export default {
  title: 'Components/GeolocationMap',
  component: GeolocationMap,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <GeolocationMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  latitude: 37.7749,
  longitude: -122.4194,
  zoomLevel: 10,
};

export const ZoomedIn = Template.bind({});
ZoomedIn.args = {
  latitude: 37.7749,
  longitude: -122.4194,
  zoomLevel: 15,
};