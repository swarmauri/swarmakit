import React from 'react';
import { Meta, Story } from '@storybook/react';
import MessageReactions, { MessageReactionsProps } from './MessageReactions';

export default {
  title: 'component/Chat/MessageReactions',
  component: MessageReactions,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MessageReactionsProps> = (args) => <MessageReactions {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'available',
};

export const Available = Template.bind({});
Available.args = {
  ...Default.args,
  state: 'available',
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  ...Default.args,
  state: 'unavailable',
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
  state: 'hovered',
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  state: 'clicked',
};