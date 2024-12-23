import React from 'react';
import { Meta, Story } from '@storybook/react';
import CommandPalette, { CommandPaletteProps } from './CommandPalette';

export default {
  title: 'component/Miscellaneous/CommandPalette',
  component: CommandPalette,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CommandPaletteProps> = (args) => <CommandPalette {...args} />;

const commandsList = ['Command 1', 'Command 2', 'Command 3'];

export const Default = Template.bind({});
Default.args = {
  commands: commandsList,
  onSelect: (command) => alert(`Selected: ${command}`),
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
};

export const ActiveSelection = Template.bind({});
ActiveSelection.args = {
  ...Default.args,
};