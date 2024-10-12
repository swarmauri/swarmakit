import Sticky from './Sticky.svelte';

export default {
  title: 'Navigation/Sticky',
  component: Sticky,
  argTypes: {
    expanded: { control: 'boolean' },
    scrolled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Sticky,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  expanded: false,
  scrolled: false,
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  expanded: false,
  scrolled: true,
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
  scrolled: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  expanded: false,
  scrolled: false,
};