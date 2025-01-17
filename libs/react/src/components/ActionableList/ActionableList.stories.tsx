import React from 'react';
import { Meta, Story } from '@storybook/react';
import ActionableList from './ActionableList';

export default {
  title: 'component/Lists/ActionableList',
  component: ActionableList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ActionableListProps> = (args) => <ActionableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, text: 'Item 1', actionLabel: 'Action' },
    { id: 2, text: 'Item 2', actionLabel: 'Action' },
  ],
  onAction: (id) => alert(`Action triggered for item ${id}`),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, text: 'Item 1', actionLabel: 'Action', disabled: true },
    { id: 2, text: 'Item 2', actionLabel: 'Action', disabled: true },
  ],
  onAction: (id) => alert(`Action triggered for item ${id}`),
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};