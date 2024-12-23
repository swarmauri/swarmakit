import React from 'react';
import { Meta, Story } from '@storybook/react';
import PinnedMessages, { PinnedMessagesProps } from './PinnedMessages';

export default {
  title: 'component/Chat/PinnedMessages',
  component: PinnedMessages,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PinnedMessagesProps> = (args) => <PinnedMessages {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  messageContent: 'This is a pinned message.',
  onPinToggle: () => alert('Pin toggled'),
};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
  state: 'pinned',
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  ...Default.args,
  state: 'unpinned',
};

export const Visible = Template.bind({});
Visible.args = {
  ...Default.args,
  state: 'visible',
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  state: 'hidden',
};