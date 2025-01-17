import React from 'react';
import { Meta, Story } from '@storybook/react';
import UnreadMessageCounter, { UnreadMessageCounterProps } from './UnreadMessageCounter';

export default {
  title: 'component/Chat/UnreadMessageCounter',
  component: UnreadMessageCounter,
  tags: ['autodocs'],
} as Meta;

const Template: Story<UnreadMessageCounterProps> = (args) => <UnreadMessageCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 5,
  hidden: false,
};

export const Displayed = Template.bind({});
Displayed.args = {
  count: 5,
  hidden: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  count: 5,
  hidden: true,
};

export const Incremented = Template.bind({});
Incremented.args = {
  count: 10,
  hidden: false,
};

export const Decremented = Template.bind({});
Decremented.args = {
  count: 2,
  hidden: false,
};