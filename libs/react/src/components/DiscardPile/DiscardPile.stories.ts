import React from 'react';
import { Meta, Story } from '@storybook/react';
import DiscardPile, { DiscardPileProps } from './DiscardPile';

export default {
  title: 'component/Cards/DiscardPile',
  component: DiscardPile,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DiscardPileProps> = (args) => <DiscardPile {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [],
  maxCards: 5,
  isHovered: false,
  onCardDrop: () => {},
};

export const Empty = Template.bind({});
Empty.args = {
  cards: [],
  maxCards: 5,
  isHovered: false,
  onCardDrop: () => {},
};

export const ContainsCards = Template.bind({});
ContainsCards.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A' },
    { id: 2, suit: '♥️', value: 'K' },
  ],
  maxCards: 5,
  isHovered: false,
  onCardDrop: () => {},
};

export const Hovered = Template.bind({});
Hovered.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A' },
    { id: 2, suit: '♥️', value: 'K' },
  ],
  maxCards: 5,
  isHovered: true,
  onCardDrop: () => {},
};

export const Full = Template.bind({});
Full.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A' },
    { id: 2, suit: '♥️', value: 'K' },
    { id: 3, suit: '♦️', value: 'Q' },
    { id: 4, suit: '♣️', value: 'J' },
    { id: 5, suit: '♠️', value: '10' },
  ],
  maxCards: 5,
  isHovered: false,
  onCardDrop: () => {},
};