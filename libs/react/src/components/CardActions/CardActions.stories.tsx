import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardActions, { CardActionsProps } from './CardActions';

export default {
  title: 'component/Card Elements/CardActions',
  component: CardActions,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CardActionsProps> = (args) => <CardActions {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [
    { label: 'Action 1', onClick: () => alert('Action 1 clicked') },
    { label: 'Action 2', onClick: () => alert('Action 2 clicked') },
  ],
};

export const Hovered = Template.bind({});
Hovered.args = {
  buttons: [
    { label: 'Hovered Action', onClick: () => alert('Hovered Action clicked') },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttons: [
    { label: 'Disabled Action', onClick: () => alert('Disabled Action clicked'), disabled: true },
  ],
};