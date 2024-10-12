import CommandPalette from './CommandPalette.svelte';

export default {
  title: 'Miscellaneous/CommandPalette',
  component: CommandPalette,
  argTypes: {
    isOpen: { control: 'boolean' },
    commands: { control: 'array' },
    activeIndex: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: CommandPalette,
  props: args,
  on: {
    select: args.onSelect,
  },
});

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  commands: ['Command 1', 'Command 2', 'Command 3'],
  activeIndex: -1,
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  commands: ['Command 1', 'Command 2', 'Command 3'],
  activeIndex: -1,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  commands: ['Command 1', 'Command 2', 'Command 3'],
  activeIndex: -1,
};

export const ActiveSelection = Template.bind({});
ActiveSelection.args = {
  isOpen: true,
  commands: ['Command 1', 'Command 2', 'Command 3'],
  activeIndex: 0,
};