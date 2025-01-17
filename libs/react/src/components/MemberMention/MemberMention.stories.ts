import React from 'react';
import { Meta, Story } from '@storybook/react';
import MemberMention, { MemberMentionProps } from './MemberMention';

export default {
  title: 'component/Chat/MemberMention',
  component: MemberMention,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MemberMentionProps> = (args) => <MemberMention {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  memberName: 'JohnDoe',
  onClick: () => alert('Mention clicked'),
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

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  state: 'clicked',
};