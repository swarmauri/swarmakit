import React from 'react';
import { Meta, Story } from '@storybook/react';
import Section, { SectionProps } from './Section';

export default {
  title: 'component/UI Layout/Section',
  component: Section,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  title: 'Default Section',
  content: 'This is the default section content.',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  title: 'Visible Section',
  content: 'This section is visible.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  title: 'Hidden Section',
  content: 'This section is hidden.',
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
  title: 'Expanded Section',
  content: 'This section is expanded and shows all content.',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  title: 'Collapsed Section',
  content: 'This section is collapsed.',
};