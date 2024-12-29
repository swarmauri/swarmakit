import React from 'react';
import { Meta, Story } from '@storybook/react';
import ExpandableCard, { ExpandableCardProps } from './ExpandableCard';

export default {
  title: 'component/Card Types/ExpandableCard',
  component: ExpandableCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ExpandableCardProps> = (args) => <ExpandableCard {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: 'Sample Title',
  content: 'This is the content of the expandable card.',
};

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'Sample Title',
  content: 'This is the expanded content of the expandable card.',
};
Expanded.play = ({ canvasElement }) => {
  const card = canvasElement.querySelector('.expandable-card-header');
  card?.click();
};

export const Hovered = Template.bind({});
Hovered.args = {
  title: 'Hovered Title',
  content: 'This is the content of the expandable card on hover.',
};