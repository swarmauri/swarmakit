import React from 'react';
import Chips from './Chips';

export default {
  title: 'Miscellaneous/Chips',
  component: Chips,
};

const Template = (args) => <Chips {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Chip',
};

export const Selectable = Template.bind({});
Selectable.args = {
  label: 'Selectable Chip',
  isSelectable: true,
};

export const Removable = Template.bind({});
Removable.args = {
  label: 'Removable Chip',
  isRemovable: true,
  onRemove: () => alert('Chip removed!'),
};

export const Grouped = () => (
  <div>
    <Chips label="Chip 1" isSelectable />
    <Chips label="Chip 2" isSelectable />
    <Chips label="Chip 3" isSelectable />
  </div>
);