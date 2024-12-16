import React from 'react';
import { Meta, Story } from '@storybook/react';
import RouteDisplay, { RouteDisplayProps } from './RouteDisplay';

export default {
  title: 'component/Map Navigation/RouteDisplay',
  component: RouteDisplay,
  tags: ['autodocs'],
} as Meta;

const Template: Story<RouteDisplayProps> = (args) => <RouteDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'planned',
  routeName: 'Route 1',
};

export const Planned = Template.bind({});
Planned.args = {
  status: 'planned',
  routeName: 'Planned Route',
};

export const InProgress = Template.bind({});
InProgress.args = {
  status: 'in-progress',
  routeName: 'In Progress Route',
};

export const Completed = Template.bind({});
Completed.args = {
  status: 'completed',
  routeName: 'Completed Route',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  routeName: 'Error Route',
};