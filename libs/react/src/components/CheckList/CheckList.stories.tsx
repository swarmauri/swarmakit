import React from 'react';
import { Meta, Story } from '@storybook/react';
import CheckList from './CheckList';

export default {
  title: 'component/Lists/CheckList',
  component: CheckList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CheckListProps> = (args) => <CheckList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, label: 'Item 1', checked: false },
    { id: 2, label: 'Item 2', checked: true },
  ],
  onToggle: (id) => alert(`Item toggled: ${id}`),
};

export const Checked = Template.bind({});
Checked.args = {
  items: [
    { id: 1, label: 'Item 1', checked: true },
    { id: 2, label: 'Item 2', checked: true },
  ],
  onToggle: (id) => alert(`Item toggled: ${id}`),
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  items: [
    { id: 1, label: 'Item 1', checked: false },
    { id: 2, label: 'Item 2', checked: false },
  ],
  onToggle: (id) => alert(`Item toggled: ${id}`),
};

export const PartiallyChecked = Template.bind({});
PartiallyChecked.args = {
  items: [
    { id: 1, label: 'Item 1', checked: false, indeterminate: true },
    { id: 2, label: 'Item 2', checked: false },
  ],
  onToggle: (id) => alert(`Item toggled: ${id}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, label: 'Item 1', checked: true, disabled: true },
    { id: 2, label: 'Item 2', checked: false, disabled: true },
  ],
  onToggle: (id) => alert(`Item toggled: ${id}`),
};