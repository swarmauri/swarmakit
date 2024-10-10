import React from 'react';
import ActionableListItemWithOptions from './ActionableListItemWithOptions';

export default {
  title: 'Components/ActionableListItemWithOptions',
  component: ActionableListItemWithOptions,
};

const Template = (args) => <ActionableListItemWithOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'List Item Title',
  subtitle: 'This is a subtitle.',
  options: ['Edit', 'Delete'],
  onOptionSelect: (option) => alert(`${option} option selected!`),
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  title: 'List Item Title',
  options: ['Edit', 'Delete'],
  onOptionSelect: (option) => alert(`${option} option selected!`),
};

export const ManyOptions = Template.bind({});
ManyOptions.args = {
  title: 'List Item Title',
  subtitle: 'This item has multiple options.',
  options: ['Edit', 'Delete', 'Archive', 'Share'],
  onOptionSelect: (option) => alert(`${option} option selected!`),
};