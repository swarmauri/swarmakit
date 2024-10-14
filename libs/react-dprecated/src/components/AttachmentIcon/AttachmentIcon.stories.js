// AttachmentIcon.stories.js
import React from 'react';
import AttachmentIcon from './AttachmentIcon';

export default {
  title: 'Chat/AttachmentIcon',
  component: AttachmentIcon,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <AttachmentIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'enabled',
  onClick: () => {},
};

export const Enabled = Template.bind({});
Enabled.args = {
  state: 'enabled',
  onClick: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  onClick: () => {},
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  onClick: () => {},
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  onClick: () => {},
};