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
    { content: 'Card 1', disabled: false, selected: false },
    { content: 'Card 2', disabled: false, selected: false },
    { content: 'Card 3', disabled: false, selected: false },
    { content: 'Card 4', disabled: false, selected: false },
  ],
  onSelect: (item) => alert(`Selected ${item.content}`),
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
  items: [
    { content: 'Card 1', disabled: false, selected: true },
    { content: 'Card 2', disabled: false, selected: false },
    { content: 'Card 3', disabled: false, selected: false },
    { content: 'Card 4', disabled: false, selected: false },
  ],
  onSelect: (item) => alert(`Selected ${item.content}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { content: 'Card 1', disabled: true, selected: false },
    { content: 'Card 2', disabled: false, selected: false },
    { content: 'Card 3', disabled: false, selected: false },
    { content: 'Card 4', disabled: false, selected: false },
  ],
  onSelect: (item) => alert(`Selected ${item.content}`),
};