import Sidebars from './Sidebars.svelte';

export default {
  title: 'Navigation/Sidebars',
  component: Sidebars,
  argTypes: {
    expanded: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Sidebars,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  expanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  expanded: false,
};

export const Hover = Template.bind({});
Hover.args = {
  expanded: false,
};