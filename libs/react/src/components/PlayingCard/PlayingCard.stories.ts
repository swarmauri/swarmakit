import React from 'react';
import { Meta, Story } from '@storybook/react';
import PlayingCard, { PlayingCardProps } from './PlayingCard';

export default {
  title: 'component/Cards/PlayingCard',
  component: PlayingCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PlayingCardProps> = (args) => <PlayingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  suit: '♠️',
  value: 'A',
};

export const FaceUp = Template.bind({});
FaceUp.args = {
  suit: '♠️',
  value: 'A',
};

export const FaceDown = Template.bind({});
FaceDown.args = {
  suit: '♠️',
  value: 'A',
};

export const Flipped = Template.bind({});
Flipped.args = {
  suit: '♠️',
  value: 'A',
};

export const Hovered = Template.bind({});
Hovered.args = {
  suit: '♠️',
  value: 'A',
};

export const Disabled = Template.bind({});
Disabled.args = {
  suit: '♠️',
  value: 'A',
  disabled: true,
};