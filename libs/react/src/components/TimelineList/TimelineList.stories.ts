import React from 'react';
import { Meta, Story } from '@storybook/react';
import TimelineList, { TimelineListProps } from './TimelineList';

export default {
  title: 'component/Lists/TimelineList',
  component: TimelineList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<TimelineListProps> = (args) => <TimelineList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Step 1', content: 'Details of Step 1' },
    { label: 'Step 2', content: 'Details of Step 2' },
    { label: 'Step 3', content: 'Details of Step 3' },
  ],
  activeIndex: 0,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  activeIndex: 1,
};

export const Completed = Template.bind({});
Completed.args = {
  items: [
    { label: 'Step 1', content: 'Details of Step 1', completed: true },
    { label: 'Step 2', content: 'Details of Step 2', completed: true },
    { label: 'Step 3', content: 'Details of Step 3' },
  ],
  activeIndex: 2,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
  activeIndex: -1,
};