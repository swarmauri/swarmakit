import React from 'react';
import { Meta, Story } from '@storybook/react';
import Timeline, { TimelineProps } from './Timeline';

export default {
  title: 'component/UI Layout/Timeline',
  component: Timeline,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TimelineProps> = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  events: [
    { time: '08:00', content: <div>Event 1</div> },
    { time: '09:00', content: <div>Event 2</div> },
  ],
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  events: [
    { time: '10:00', content: <div>Event A</div> },
    { time: '11:00', content: <div>Event B</div> },
  ],
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  events: [],
};

export const Populated = Template.bind({});
Populated.args = {
  state: 'populated',
  events: [
    { time: '12:00', content: <div>Event X</div> },
    { time: '13:00', content: <div>Event Y</div> },
    { time: '14:00', content: <div>Event Z</div> },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  events: [],
};