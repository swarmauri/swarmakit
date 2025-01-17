import React from 'react';
import { Meta, Story } from '@storybook/react';
import UndoRedoButtons, { UndoRedoButtonsProps } from './UndoRedoButtons';

export default {
  title: 'component/Drawing/UndoRedoButtons',
  component: UndoRedoButtons,
  tags: ['autodocs'],
} as Meta;

const Template: Story<UndoRedoButtonsProps> = (args) => <UndoRedoButtons {...args} />;

export const Default = Template.bind({});
Default.args = {
  canUndo: false,
  canRedo: false,
  onUndo: () => console.log('Undo'),
  onRedo: () => console.log('Redo'),
};

export const UndoAvailable = Template.bind({});
UndoAvailable.args = {
  ...Default.args,
  canUndo: true,
};

export const RedoAvailable = Template.bind({});
RedoAvailable.args = {
  ...Default.args,
  canRedo: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
};