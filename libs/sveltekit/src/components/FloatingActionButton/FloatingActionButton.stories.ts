import FloatingActionButton from './FloatingActionButton.svelte';

export default {
  title: 'Miscellaneous/FloatingActionButton',
  component: FloatingActionButton,
  argTypes: {
    expanded: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: FloatingActionButton,
  props: args,
});

export const Collapsed = Template.bind({});
Collapsed.args = {
  expanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
};

export const Hover = Template.bind({});
Hover.args = {
  expanded: false,
};
Hover.parameters = {
  pseudo: { hover: true },
};