import React from 'react';
import { Meta, Story } from '@storybook/react';
import ScrollButton, { ScrollButtonProps } from './ScrollButton';

export default {
  title: 'component/Chat/ScrollButton',
  component: ScrollButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ScrollButtonProps> = (args) => <ScrollButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  onClick: () => alert('Button clicked'),
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