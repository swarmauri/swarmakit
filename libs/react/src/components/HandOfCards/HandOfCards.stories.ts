import React from 'react';
import { Meta, Story } from '@storybook/react';
import HandOfCards, { HandOfCardsProps } from './HandOfCards';

export default {
  title: 'component/Cards/HandOfCards',
  component: HandOfCards,
  tags: ['autodocs'],
} as Meta;

const Template: Story<HandOfCardsProps> = (args) => <HandOfCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A', selected: false },
    { id: 2, suit: '♥️', value: 'K', selected: false },
  ],
  onSelect: (id: number) => {},
  maxCards: 5,
};

export const Selected = Template.bind({});
Selected.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A', selected: true },
    { id: 2, suit: '♥️', value: 'K', selected: false },
  ],
  onSelect: (id: number) => {},
  maxCards: 5,
};

export const Unselected = Template.bind({});
Unselected.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A', selected: false },
    { id: 2, suit: '♥️', value: 'K', selected: false },
  ],
  onSelect: (id: number) => {},
  maxCards: 5,
};

export const Full = Template.bind({});
Full.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A', selected: false },
    { id: 2, suit: '♥️', value: 'K', selected: false },
    { id: 3, suit: '♦️', value: 'Q', selected: false },
    { id: 4, suit: '♣️', value: 'J', selected: false },
    { id: 5, suit: '♠️', value: '10', selected: false },
  ],
  onSelect: (id: number) => {},
  maxCards: 5,
};

export const Empty = Template.bind({});
Empty.args = {
  cards: [],
  onSelect: (id: number) => {},
  maxCards: 5,
};

export const MaxLimitReached = Template.bind({});
MaxLimitReached.args = {
  cards: [
    { id: 1, suit: '♠️', value: 'A', selected: false },
    { id: 2, suit: '♥️', value: 'K', selected: false },
    { id: 3, suit: '♦️', value: 'Q', selected: false },
    { id: 4, suit: '♣️', value: 'J', selected: false },
    { id: 5, suit: '♠️', value: '10', selected: false },
  ],
  onSelect: (id: number) => {},
  maxCards: 5,
};