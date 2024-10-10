import React, { useState } from 'react';
import CardBasedList from './CardBasedList';

export default {
  title: 'Lists/CardBasedList',
  component: CardBasedList,
};

const Template = (args) => {
  const [selectedCard, setSelectedCard] = useState(null);
  
  return (
    <CardBasedList
      {...args}
      selectedCard={selectedCard}
      onSelect={(card) => setSelectedCard(card)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  cards: [
    { content: 'Card 1' },
    { content: 'Card 2' },
    { content: 'Card 3' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selectedCard: { content: 'Card 1' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};