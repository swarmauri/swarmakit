import Sidebar from './Sidebar.svelte';
import type { SidebarState } from './Sidebar.svelte';

export default {
  title: 'UI Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    state: {
      control: 'select',
      options: ['visible', 'hidden', 'collapsed', 'expanded', 'hovered'],
    },
    items: { control: 'array' },
  },
};

const Template = (args: { state: SidebarState; items: string[] }) => ({
  Component: Sidebar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  items: ['Home', 'About', 'Contact'],
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  items: ['Home', 'About', 'Contact'],
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  items: ['Home', 'About', 'Contact'],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  items: ['Home', 'About', 'Contact'],
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
  items: ['Home', 'About', 'Contact'],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  items: ['Home', 'About', 'Contact'],
};