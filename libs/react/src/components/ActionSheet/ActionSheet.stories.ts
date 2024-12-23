import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import ActionSheet, { ActionSheetProps } from './ActionSheet';

export default {
  title: 'component/Overlays/ActionSheet',
  component: ActionSheet,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ActionSheetProps> = (args) => <ActionSheet {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => console.log('Closed'),
  actions: [
    { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
    { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
  ],
};

export const Opened = Template.bind({});
Opened.args = {
  isOpen: true,
  onClose: () => console.log('Closed'),
  actions: [
    { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
    { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
  ],
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  onClose: () => console.log('Closed'),
  actions: [
    { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
    { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  isOpen: true,
  onClose: () => console.log('Closed'),
  actions: [
    { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
    { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
  ],
};