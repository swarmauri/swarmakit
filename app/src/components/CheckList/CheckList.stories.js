import React, { useState } from 'react';
import CheckList from './CheckList';

export default {
  title: 'Lists/CheckList',
  component: CheckList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);
  const handleToggle = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    args.onToggle(id);
  };
  
  return <CheckList {...args} items={items} onToggle={handleToggle} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, label: 'Item 1', checked: false, disabled: false },
    { id: 2, label: 'Item 2', checked: false, disabled: false },
  ],
  onToggle: (id) => alert(`Item ${id} toggled`),
};

export const Checked = Template.bind({});
Checked.args = {
  items: [
    { id: 1, label: 'Item 1', checked: true, disabled: false },
    { id: 2, label: 'Item 2', checked: false, disabled: false },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  items: [
    { id: 1, label: 'Item 1', checked: false, disabled: false },
    { id: 2, label: 'Item 2', checked: false, disabled: false },
  ],
};

export const PartiallyChecked = Template.bind({});
PartiallyChecked.args = {
  items: [
    { id: 1, label: 'Item 1', checked: true, disabled: false },
    { id: 2, label: 'Item 2', checked: false, disabled: false },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, label: 'Item 1', checked: true, disabled: true },
    { id: 2, label: 'Item 2', checked: false, disabled: true },
  ],
};