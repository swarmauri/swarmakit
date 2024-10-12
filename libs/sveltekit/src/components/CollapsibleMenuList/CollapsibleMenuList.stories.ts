import CollapsibleMenuList from './CollapsibleMenuList.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Lists/CollapsibleMenuList',
  component: CollapsibleMenuList,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['expanded', 'collapsed', 'hover', 'active'],
    },
    menuItems: {
      control: { type: 'array' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: CollapsibleMenuList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'collapsed',
  menuItems: [
    { label: 'Home', active: false },
    { label: 'About', active: false },
    { label: 'Contact', active: false },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  state: 'expanded',
  menuItems: [
    { label: 'Home', active: false },
    { label: 'About', active: false },
    { label: 'Contact', active: false },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  state: 'collapsed',
  menuItems: [
    { label: 'Home', active: false },
    { label: 'About', active: false },
    { label: 'Contact', active: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  state: 'hover',
  menuItems: [
    { label: 'Home', active: false },
    { label: 'About', active: false },
    { label: 'Contact', active: false },
  ],
};

export const Active = Template.bind({});
Active.args = {
  state: 'active',
  menuItems: [
    { label: 'Home', active: true },
    { label: 'About', active: false },
    { label: 'Contact', active: false },
  ],
};