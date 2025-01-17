import React from 'react';
import { Meta, Story } from '@storybook/react';
import DeckOfCards, { DeckOfCardsProps } from './DeckOfCards';

export default {
  title: 'component/Cards/DeckOfCards',
  component: DeckOfCards,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DeckOfCardsProps> = (args) => <DeckOfCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A' },
    { id: 2, suit: '♥️', value: 'K' },
  ],
  onShuffle: () => {},
  onDraw: (id: number) => {},
};

export const Shuffled = Template.bind({});
Shuffled.args = {
  cards: [
    { id: 2, suit: '♥️', value: 'K' },
    { id: 1, suit: '♠️', value: 'A' },
  ],
  onShuffle: () => {},
  onDraw: (id: number) => {},
};

export const Ordered = Template.bind({});
Ordered.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A' },
    { id: 2, suit: '♥️', value: 'K' },
  ],
  onShuffle: () => {},
  onDraw: (id: number) => {},
};

export const Empty = Template.bind({});
Empty.args = {
  cards: [],
  onShuffle: () => {},
  onDraw: (id: number) => {},
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
  onShuffle: () => {},
  onDraw: (id: number) => {},
};