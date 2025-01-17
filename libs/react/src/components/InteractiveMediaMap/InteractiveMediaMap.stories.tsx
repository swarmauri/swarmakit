import React from 'react';
import { Meta, Story } from '@storybook/react';
import InteractiveMediaMap, { InteractiveMediaMapProps } from './InteractiveMediaMap';

export default {
  title: 'component/Media/InteractiveMediaMap',
  component: InteractiveMediaMap,
  tags: ['autodocs'],
} as Meta;

const Template: Story<InteractiveMediaMapProps> = (args) => <InteractiveMediaMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  markers: [
    { id: '1', lat: 30, lng: 50, label: 'A' },
    { id: '2', lat: 60, lng: 70, label: 'B' },
  ],
};

export const ZoomedIn = Template.bind({});
ZoomedIn.args = {
  ...Default.args,
  initialZoom: 5,
};

export const MarkerSelected = Template.bind({});
MarkerSelected.args = {
  ...Default.args,
  markers: [
    { id: '1', lat: 30, lng: 50, label: 'A' },
    { id: '2', lat: 60, lng: 70, label: 'B', selected: true },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};