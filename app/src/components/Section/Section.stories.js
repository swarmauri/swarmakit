import React from 'react';
import Section from './Section';

export default {
  title: 'UI Layout/Section',
  component: Section,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    isVisible: { control: 'boolean' },
    isExpanded: { control: 'boolean' },
  },
};

const Template = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Section',
  content: 'This is the default content of the section.',
};

export const Visible = Template.bind({});
Visible.args = {
  title: 'Visible Section',
  content: 'This section is visible.',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  title: 'Hidden Section',
  content: 'This section is hidden.',
  isVisible: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'Expanded Section',
  content: 'This section is expanded with full content.',
  isVisible: true,
  isExpanded: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: 'Collapsed Section',
  content: 'This section is collapsed, only title is visible.',
  isVisible: true,
  isExpanded: false,
};