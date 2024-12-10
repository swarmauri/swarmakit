import React from 'react';
import { Meta, Story } from '@storybook/react';
import ZoomTool, { ZoomToolProps } from './ZoomTool';

export default {
  title: 'component/Drawing/ZoomTool',
  component: ZoomTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ZoomToolProps> = (args) => <ZoomTool {...args} />;

export const Default = Template.bind({});
Default.args = {
  onZoomIn: () => console.log('Zoomed In'),
  onZoomOut: () => console.log('Zoomed Out'),
  onFitToScreen: () => console.log('Fit to Screen'),
  onReset: () => console.log('Reset Zoom'),
  zoomLevel: 100,
};

export const ZoomIn = Template.bind({});
ZoomIn.args = {
  ...Default.args,
  zoomLevel: 150,
};

export const ZoomOut = Template.bind({});
ZoomOut.args = {
  ...Default.args,
  zoomLevel: 50,
};

export const FitToScreen = Template.bind({});
FitToScreen.args = {
  ...Default.args,
};

export const Reset = Template.bind({});
Reset.args = {
  ...Default.args,
  zoomLevel: 100,
};