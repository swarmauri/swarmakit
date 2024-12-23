import React from 'react';
import { Meta, Story } from '@storybook/react';
import MapCompass, { MapCompassProps } from './MapCompass';

export default {
  title: 'component/Map Navigation/MapCompass',
  component: MapCompass,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MapCompassProps> = (args) => <MapCompass {...args} />;

export const Default = Template.bind({});
Default.args = {
  orientation: 0,
};

export const North = Template.bind({});
North.args = {
  orientation: 0,
};

export const Rotated = Template.bind({});
Rotated.args = {
  orientation: 45,
};

export const Hidden = Template.bind({});
Hidden.args = {
  orientation: 0,
  hidden: true,
};