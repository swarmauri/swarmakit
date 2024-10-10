// ScrollButton.stories.js
import React from 'react';
import ScrollButton from './ScrollButton';

export default {
  title: 'Chat/ScrollButton',
  component: ScrollButton,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ScrollButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  onClick: () => alert('Button clicked!'),
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  onClick: () => alert('Button clicked!'),
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  onClick: () => alert('Button clicked!'),
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  onClick: () => alert('Button clicked!'),
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  onClick: () => alert('Button clicked!'),
};