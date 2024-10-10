import React from 'react';
import Timeline from './Timeline';

export default {
  title: 'UI Layout/Timeline',
  component: Timeline,
  argTypes: {
    events: { control: 'array' },
    visible: { control: 'boolean' },
  },
};

const Template = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: ['Event 1', 'Event 2', 'Event 3'],
  visible: true,
};

export const Visible = Template.bind({});
Visible.args = {
  events: ['Event 1', 'Event 2', 'Event 3'],
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  events: ['Event 1', 'Event 2', 'Event 3'],
  visible: false,
};

export const Populated = Template.bind({});
Populated.args = {
  events: ['Event 1', 'Event 2', 'Event 3', 'Event 4'],
  visible: true,
};

export const Empty = Template.bind({});
Empty.args = {
  events: [],
  visible: true,
};