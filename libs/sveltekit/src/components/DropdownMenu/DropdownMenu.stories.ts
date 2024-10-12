import DropdownMenu from './DropdownMenu.svelte';

export default {
  title: 'Navigation/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    items: { control: 'object' },
    isExpanded: { control: 'boolean' },
    activeIndex: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: DropdownMenu,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', action: () => alert('Home clicked') },
    { label: 'About', action: () => alert('About clicked') },
    { label: 'Contact', action: () => alert('Contact clicked') },
  ],
  isExpanded: false,
  activeIndex: null,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  isExpanded: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...Default.args,
  isExpanded: false,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  isExpanded: true,
  activeIndex: 1,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isExpanded: true,
  activeIndex: 0,
};