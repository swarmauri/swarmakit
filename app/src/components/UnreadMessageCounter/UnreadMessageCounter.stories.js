// UnreadMessageCounter.stories.js
import React from 'react';
import UnreadMessageCounter from './UnreadMessageCounter';

export default {
  title: 'Chat/UnreadMessageCounter',
  component: UnreadMessageCounter,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <UnreadMessageCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 0,
};

export const Displayed = Template.bind({});
Displayed.args = {
  count: 5,
};

export const Hidden = Template.bind({});
Hidden.args = {
  count: 0,
};

export const Incremented = Template.bind({});
Incremented.args = {
  count: 10,
};

export const Decremented = Template.bind({});
Decremented.args = {
  count: 2,
};