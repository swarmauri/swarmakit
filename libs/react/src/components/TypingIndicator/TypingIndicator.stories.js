// TypingIndicator.stories.js
import React from 'react';
import TypingIndicator from './TypingIndicator';

export default {
  title: 'Chat/TypingIndicator',
  component: TypingIndicator,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <TypingIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'typing',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
};

export const Typing = Template.bind({});
Typing.args = {
  state: 'typing',
};