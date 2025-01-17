import React from 'react';
import { Meta, Story } from '@storybook/react';
import InteractiveCard, { InteractiveCardProps } from './InteractiveCard';

export default {
  title: 'component/Card Types/InteractiveCard',
  component: InteractiveCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<InteractiveCardProps> = (args) => <InteractiveCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  content: 'This is an interactive card.',
};

export const Selected = Template.bind({});
Selected.args = {
  title: 'Selected Card',
  content: 'This card is selected.',
};
Selected.play = ({ canvasElement }) => {
  const card = canvasElement.querySelector('.interactive-card');
  card?.click();
};

export const Unselected = Template.bind({});
Unselected.args = {
  title: 'Unselected Card',
  content: 'This card is not selected.',
};

export const Hovered = Template.bind({});
Hovered.args = {
  title: 'Hovered Card',
  content: 'This card is being hovered over.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled.',
  disabled: true,
};