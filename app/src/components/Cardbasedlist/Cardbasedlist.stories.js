import React from 'react';
import CardBasedList from './CardBasedList';

export default {
  title: 'Lists/CardBasedList',
  component: CardBasedList,
};

const Template = (args) => <CardBasedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Card Item 1' },
    { title: 'Card Item 2' },
    { title: 'Card Item 3' },
  ],
  onSelect: (item) => alert(`Selected ${item.title}`),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};
Hover.parameters = {
  pseudo: { hover: true },
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selectedItem: { title: 'Card Item 2' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};