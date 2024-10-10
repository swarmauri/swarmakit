// RemoveMemberButton.stories.js
import React from 'react';
import RemoveMemberButton from './RemoveMemberButton';

export default {
  title: 'Chat/RemoveMemberButton',
  component: RemoveMemberButton,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <RemoveMemberButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isEnabled: true,
};

export const Enabled = Template.bind({});
Enabled.args = {
  isEnabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isEnabled: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  isEnabled: true,
};
Hovered.parameters = {
  pseudo: { hover: true },
};

export const Clicked = Template.bind({});
Clicked.args = {
  isEnabled: true,
};
Clicked.parameters = {
  pseudo: { active: true },
};