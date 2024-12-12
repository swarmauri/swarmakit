import React from 'react';
import { Meta, Story } from '@storybook/react';
import ZoomControls, { ZoomControlsProps } from './ZoomControls';

export default {
  title: 'component/Map Navigation/ZoomControls',
  component: ZoomControls,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ZoomControlsProps> = (args) => <ZoomControls {...args} />;

export const Default = Template.bind({});
Default.args = {
  onZoomIn: () => console.log('Zoomed In'),
  onZoomOut: () => console.log('Zoomed Out'),
};

export const ZoomIn = Template.bind({});
ZoomIn.args = {
  onZoomIn: () => console.log('Zoomed In'),
  onZoomOut: () => console.log('Zoomed Out'),
};

export const ZoomOut = Template.bind({});
ZoomOut.args = {
  onZoomIn: () => console.log('Zoomed In'),
  onZoomOut: () => console.log('Zoomed Out'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  onZoomIn: () => console.log('Zoomed In'),
  onZoomOut: () => console.log('Zoomed Out'),
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  onZoomIn: () => console.log('Zoomed In'),
  onZoomOut: () => console.log('Zoomed Out'),
};
Hover.parameters = {
  pseudo: { hover: true },
};