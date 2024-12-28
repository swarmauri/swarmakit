import React from 'react';
import { Meta, Story } from '@storybook/react';
import StackedCard, { StackedCardProps } from './StackedCard';

export default {
  title: 'component/Card Types/StackedCard',
  component: StackedCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<StackedCardProps> = (args) => <StackedCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    { title: 'Card 1', content: 'Content of card 1' },
    { title: 'Card 2', content: 'Content of card 2' },
    { title: 'Card 3', content: 'Content of card 3' },
  ],
  layout: 'vertical',
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
};
Hovered.play = ({ canvasElement }) => {
  const card = canvasElement.querySelector('.stacked-card');
  card?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
};
Selected.play = ({ canvasElement }) => {
  const card = canvasElement.querySelector('.stacked-card');
  card?.click();
};