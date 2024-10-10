import React from 'react';
import CommandPalette from './CommandPalette';

export default {
  title: 'Miscellaneous/CommandPalette',
  component: CommandPalette,
};

const Template = (args) => <CommandPalette {...args} />;

export const Default = Template.bind({});
Default.args = {
  commands: ['Command 1', 'Command 2', 'Command 3'],
  isOpen: false,
};

export const Open = Template.bind({});
Open.args = {
  commands: ['Command 1', 'Command 2', 'Command 3'],
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  commands: ['Command 1', 'Command 2', 'Command 3'],
  isOpen: false,
};

export const ActiveSelection = () => {
  const commands = ['Command 1', 'Command 2', 'Command 3'];
  return <CommandPalette commands={commands} isOpen={true} />;
};