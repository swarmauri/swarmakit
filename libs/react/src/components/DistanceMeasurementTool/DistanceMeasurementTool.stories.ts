import React from 'react';
import { Meta, Story } from '@storybook/react';
import DistanceMeasurementTool, { DistanceMeasurementToolProps } from './DistanceMeasurementTool';

export default {
  title: 'component/Map Navigation/DistanceMeasurementTool',
  component: DistanceMeasurementTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DistanceMeasurementToolProps> = (args) => <DistanceMeasurementTool {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'inactive',
  distance: 0,
};

export const Active = Template.bind({});
Active.args = {
  status: 'active',
  distance: 0,
};

export const Measuring = Template.bind({});
Measuring.args = {
  status: 'measuring',
  distance: 5.5,
};

export const Completed = Template.bind({});
Completed.args = {
  status: 'completed',
  distance: 12.3,
};