import React from 'react';
import { Meta, Story } from '@storybook/react';
import CommunityCards, { CommunityCardsProps } from './CommunityCards';

export default {
  title: 'component/Cards/CommunityCards',
  component: CommunityCards,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CommunityCardsProps> = (args) => <CommunityCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    { suit: '♠️', value: 'A', isRevealed: false },
    { suit: '♥️', value: 'K', isRevealed: false },
  ],
};

export const CardsDealt = Template.bind({});
CardsDealt.args = {
  cards: [
    { suit: '♠️', value: 'A', isRevealed: false },
    { suit: '♥️', value: 'K', isRevealed: false },
  ],
};

export const CardsRevealed = Template.bind({});
CardsRevealed.args = {
  cards: [
    { suit: '♠️', value: 'A', isRevealed: true },
    { suit: '♥️', value: 'K', isRevealed: true },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  cards: [],
};

export const Full = Template.bind({});
Full.args = {
  cards: [
    { suit: '♠️', value: 'A', isRevealed: true },
    { suit: '♥️', value: 'K', isRevealed: true },
    { suit: '♦️', value: 'Q', isRevealed: true },
    { suit: '♣️', value: 'J', isRevealed: true },
    { suit: '♠️', value: '10', isRevealed: true },
  ],
};