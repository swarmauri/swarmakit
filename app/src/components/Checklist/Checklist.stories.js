import React, { useState } from 'react';
import Checklist from './Checklist';

export default {
  title: 'Lists/Checklist',
  component: Checklist,
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);

  const handleToggle = (itemToToggle) => {
    const updatedItems = items.map((item) =>
      item.label === itemToToggle.label ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  return <Checklist {...args} items={items} onToggle={handleToggle} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Item 1', checked: false },
    { label: 'Item 2', checked: false },
    { label: 'Item 3', checked: false },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  items: [
    { label: 'Item 1', checked: true },
    { label: 'Item 2', checked: false },
    { label: 'Item 3', checked: false },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  items: [
    { label: 'Item 1', checked: false },
    { label: 'Item 2', checked: false },
    { label: 'Item 3', checked: false },
  ],
};

export const PartiallyChecked = Template.bind({});
PartiallyChecked.args = {
  items: [
    { label: 'Item 1', checked: true },
    { label: 'Item 2', checked: false },
    { label: 'Item 3', checked: true },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Item 1', checked: false },
    { label: 'Item 2', checked: true },
    { label: 'Item 3', checked: false },
  ],
  disabled: true,
};