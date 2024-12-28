import React from 'react';
import { Meta, Story } from '@storybook/react';
import Sticky, { StickyProps } from './Sticky';

export default {
  title: 'component/Navigation/Sticky',
  component: Sticky,
  tags: ['autodocs'],
} as Meta;

const Template: Story<StickyProps> = (args) => <Sticky {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: <p>Default Sticky Content</p>,
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  content: <p>Scrolled Sticky Content</p>,
};

export const Expanded = Template.bind({});
Expanded.args = {
  content: <p>Expanded Sticky Content</p>,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  content: <p>Collapsed Sticky Content</p>,
};