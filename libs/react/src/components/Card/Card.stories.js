import React from 'react';
import Card from './Card';

export default {
  title: 'UI Layout/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    isVisible: { control: 'boolean' },
    isHovered: { control: 'boolean' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is some card content.',
};

export const Visible = Template.bind({});
Visible.args = {
  title: 'Visible Card',
  content: 'This card is visible.',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  title: 'Hidden Card',
  content: 'This card is hidden.',
  isVisible: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  title: 'Hovered Card',
  content: 'Hover over this card.',
  isHovered: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  title: 'Clicked Card',
  content: 'Click this card to expand or collapse.',
};

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'Expanded Card',
  content: 'This card is expanded to show more content.',
  isVisible: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: 'Collapsed Card',
  content: 'This card is collapsed.',
  isVisible: true,
};