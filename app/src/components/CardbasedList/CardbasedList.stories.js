import React, { useState } from 'react';
import CardbasedList from './CardbasedList';

export default {
  title: 'Lists/CardbasedList',
  component: CardbasedList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => {
  const [selectedCardId, setSelectedCardId] = useState(args.selectedCardId);
  return (
    <CardbasedList
      {...args}
      selectedCardId={selectedCardId}
      onSelect={(id) => {
        setSelectedCardId(id);
        args.onSelect(id);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  cards: [
    { id: 1, content: 'Card 1', disabled: false },
    { id: 2, content: 'Card 2', disabled: false },
  ],
  onSelect: (id) => alert(`Card ${id} selected`),
  selectedCardId: null,
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
  selectedCardId: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  cards: [
    { id: 1, content: 'Card 1', disabled: true },
    { id: 2, content: 'Card 2', disabled: true },
  ],
  onSelect: (id) => alert(`Card ${id} selected`),
  selectedCardId: null,
};