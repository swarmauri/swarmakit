import CommandPalette from './CommandPalette.vue';

export default {
  title: 'Miscellaneous/CommandPalette',
  component: CommandPalette,
  tags: ['autodocs'],
  argTypes: {
    commands: { control: 'array' },
    isOpen: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { CommandPalette },
  setup() {
    return { args };
  },
  template: '<CommandPalette v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  commands: [
    { id: 1, name: 'Command 1' },
    { id: 2, name: 'Command 2' },
    { id: 3, name: 'Command 3' },
  ],
  isOpen: false,
};

export const Open = Template.bind({});
Open.args = {
  commands: [
    { id: 1, name: 'Open 1' },
    { id: 2, name: 'Open 2' },
    { id: 3, name: 'Open 3' },
  ],
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  commands: [
    { id: 1, name: 'Closed 1' },
    { id: 2, name: 'Closed 2' },
    { id: 3, name: 'Closed 3' },
  ],
  isOpen: false,
};

export const ActiveSelection = Template.bind({});
ActiveSelection.args = {
  commands: [
    { id: 1, name: 'Active 1' },
    { id: 2, name: 'Active 2' },
    { id: 3, name: 'Active 3' },
  ],
  isOpen: true,
};