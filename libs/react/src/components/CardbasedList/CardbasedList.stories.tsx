import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardbasedList from './CardbasedList';

export default {
  title: 'component/Lists/CardbasedList',
  component: CardbasedList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CardbasedListProps> = (args) => <CardbasedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, title: 'Card 1', description: 'This is the first card.' },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
  ],
  onSelect: (id) => alert(`Card selected: ${id}`),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { id: 1, title: 'Card 1', description: 'This is the first card.', selected: true },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
  ],
  onSelect: (id) => alert(`Card selected: ${id}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, title: 'Card 1', description: 'This is the first card.', disabled: true },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
  ],
  onSelect: (id) => alert(`Card selected: ${id}`),
};