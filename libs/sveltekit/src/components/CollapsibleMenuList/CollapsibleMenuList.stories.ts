import CollapsibleMenuList from './CollapsibleMenuList.svelte';
import type { MenuState } from './CollapsibleMenuList.svelte';

export default {
  title: 'Lists/CollapsibleMenuList',
  component: CollapsibleMenuList,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(MenuState),
    },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: CollapsibleMenuList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: MenuState.Collapsed,
  items: [
    { label: 'Item 1', active: false },
    { label: 'Item 2', active: false },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: MenuState.Expanded,
  items: [
    { label: 'Item 1', active: false },
    { label: 'Item 2', active: false },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: MenuState.Collapsed,
  items: [
    { label: 'Item 1', active: false },
    { label: 'Item 2', active: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  state: MenuState.Hover,
  items: [
    { label: 'Item 1', active: false },
    { label: 'Item 2', active: false },
  ],
};

export const Active = Template.bind({});
Active.args = {
  state: MenuState.Active,
  items: [
    { label: 'Item 1', active: true },
    { label: 'Item 2', active: false },
  ],
};