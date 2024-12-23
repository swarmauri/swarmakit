import React from 'react';
import { Meta, Story } from '@storybook/react';
import MapScaleIndicator, { MapScaleIndicatorProps } from './MapScaleIndicator';

export default {
  title: 'component/Map Navigation/MapScaleIndicator',
  component: MapScaleIndicator,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MapScaleIndicatorProps> = (args) => <MapScaleIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  updating: false,
  scale: '1:5000',
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
  updating: false,
  scale: '1:10000',
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
  updating: false,
  scale: '1:10000',
};

export const Updating = Template.bind({});
Updating.args = {
  visible: true,
  updating: true,
  scale: '1:10000',
};