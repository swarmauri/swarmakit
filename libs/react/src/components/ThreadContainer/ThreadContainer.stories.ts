import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadContainer, { ThreadContainerProps } from './ThreadContainer';

export default {
  title: 'component/Threads/ThreadContainer',
  component: ThreadContainer,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadContainerProps> = (args) => <ThreadContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'open',
  threadTitle: 'Thread Title',
  threadContent: 'This is the content of the thread.',
  onToggle: () => alert('Thread toggled'),
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  state: 'open',
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  state: 'closed',
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  state: 'expanded',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...Default.args,
  state: 'collapsed',
};