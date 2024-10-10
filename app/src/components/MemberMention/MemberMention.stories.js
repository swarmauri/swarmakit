// MemberMention.stories.js
import React from 'react';
import MemberMention from './MemberMention';

export default {
  title: 'Chat/MemberMention',
  component: MemberMention,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <MemberMention {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  isClicked: false,
  memberName: 'JohnDoe',
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  isClicked: false,
  memberName: 'JohnDoe',
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
  isClicked: false,
  memberName: 'JohnDoe',
};

export const Clicked = Template.bind({});
Clicked.args = {
  isVisible: true,
  isClicked: true,
  memberName: 'JohnDoe',
};