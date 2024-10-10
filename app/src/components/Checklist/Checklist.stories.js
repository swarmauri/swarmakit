import React from 'react';
import Checklist from './Checklist';

export default {
  title: 'Lists/Checklist',
  component: Checklist,
};

const Template = (args) => <Checklist {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Item 1', checked: false, partiallyChecked: false, disabled: false },
    { label: 'Item 2', checked: false, partiallyChecked: false, disabled: false },
    { label: 'Item 3', checked: false, partiallyChecked: false, disabled: false },
  ],
  onCheck: (item) => alert(`Checked ${item.label}`),
};

export const Checked = Template.bind({});
Checked.args = {
  items: [
    { label: 'Item 1', checked: true, partiallyChecked: false, disabled: false },
    { label: 'Item 2', checked: false, partiallyChecked: false, disabled: false },
    { label: 'Item 3', checked: false, partiallyChecked: false, disabled: false },
  ],
  onCheck: (item) => alert(`Checked ${item.label}`),
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  ...Default.args,
};

export const PartiallyChecked = Template.bind({});
PartiallyChecked.args = {
  items: [
    { label: 'Item 1', checked: false, partiallyChecked: true, disabled: false },
    { label: 'Item 2', checked: false, partiallyChecked: false, disabled: false },
    { label: 'Item 3', checked: false, partiallyChecked: false, disabled: false },
  ],
  onCheck: (item) => alert(`Checked ${item.label}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Item 1', checked: false, partiallyChecked: false, disabled: true },
    { label: 'Item 2', checked: false, partiallyChecked: false, disabled: false },
    { label: 'Item 3', checked: false, partiallyChecked: false, disabled: false },
  ],
  onCheck: (item) => alert(`Checked ${item.label}`),
};