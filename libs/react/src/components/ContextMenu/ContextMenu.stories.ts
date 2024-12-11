import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContextMenu, { ContextMenuProps } from './ContextMenu';

export default {
  title: 'component/Overlays/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ContextMenuProps> = (args) => <ContextMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
    { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
  ],
};

export const RightClick = Template.bind({});
RightClick.args = {
  options: [
    { label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
    { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
  ],
};

export const TapAndHold = Template.bind({});
TapAndHold.args = {
  options: [
    { label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
    { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  options: [
    { label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
    { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
  ],
};