import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContextualList from './ContextualList';

export default {
  title: 'component/Lists/ContextualList',
  component: ContextualList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ContextualListProps> = (args) => <ContextualList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ],
  onAction: (id) => console.log(`Action triggered for item ${id}`),
};

export const ActionTriggered = Template.bind({});
ActionTriggered.args = {
  items: [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ],
  onAction: (id) => console.log(`Action triggered for item ${id}`),
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  items: [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ],
  onAction: (id) => console.log(`Action triggered for item ${id}`),
};