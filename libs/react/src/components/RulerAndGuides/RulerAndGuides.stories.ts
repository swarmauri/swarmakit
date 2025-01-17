import React from 'react';
import { Meta, Story } from '@storybook/react';
import RulerAndGuides, { RulerAndGuidesProps } from './RulerAndGuides';

export default {
  title: 'component/Drawing/RulerAndGuides',
  component: RulerAndGuides,
  tags: ['autodocs'],
} as Meta;

const Template: Story<RulerAndGuidesProps> = (args) => <RulerAndGuides {...args} />;

export const Default = Template.bind({});
Default.args = {
  unit: 'pixels',
  zoomLevel: 100,
  onAddGuide: (position) => console.log(`Guide added at ${position}`),
  onMoveGuide: (oldPosition, newPosition) => console.log(`Guide moved from ${oldPosition} to ${newPosition}`),
  onRemoveGuide: (position) => console.log(`Guide removed from ${position}`),
};

export const GuideAdded = Template.bind({});
GuideAdded.args = {
  ...Default.args,
  onAddGuide: (position) => console.log(`Guide added at ${position}`),
};

export const GuideMoved = Template.bind({});
GuideMoved.args = {
  ...Default.args,
  onMoveGuide: (oldPosition, newPosition) => console.log(`Guide moved from ${oldPosition} to ${newPosition}`),
};

export const GuideRemoved = Template.bind({});
GuideRemoved.args = {
  ...Default.args,
  onRemoveGuide: (position) => console.log(`Guide removed from ${position}`),
};