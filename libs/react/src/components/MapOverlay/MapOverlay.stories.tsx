import React from 'react';
import { Meta, Story } from '@storybook/react';
import MapOverlay, { MapOverlayProps } from './MapOverlay';

export default {
  title: 'component/Map Navigation/MapOverlay',
  component: MapOverlay,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MapOverlayProps> = (args) => <MapOverlay {...args} />;

export const Default = Template.bind({});
Default.args = {
  visibility: 'visible',
  activeState: 'active',
  content: <div>Weather Information</div>,
};

export const Visible = Template.bind({});
Visible.args = {
  visibility: 'visible',
  activeState: 'active',
  content: <div>Heatmap Data</div>,
};

export const Hidden = Template.bind({});
Hidden.args = {
  visibility: 'hidden',
  activeState: 'disabled',
  content: <div>No Data Available</div>,
};

export const Active = Template.bind({});
Active.args = {
  visibility: 'visible',
  activeState: 'active',
  content: <div>Live Traffic Updates</div>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  visibility: 'visible',
  activeState: 'disabled',
  content: <div>Feature Disabled</div>,
};