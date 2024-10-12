import SidebarWithAccordionMenus, { MenuItem } from './SidebarWithAccordionMenus.svelte';

export default {
  title: 'Navigation/SidebarWithAccordionMenus',
  component: SidebarWithAccordionMenus,
  argTypes: {
    menus: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: SidebarWithAccordionMenus,
  props: args,
});

const sampleMenus: MenuItem[] = [
  {
    label: 'Dashboard',
    children: [
      { label: 'Overview', action: () => alert('Overview clicked') },
      { label: 'Stats', action: () => alert('Stats clicked') },
    ],
  },
  {
    label: 'Settings',
    children: [
      { label: 'Profile', action: () => alert('Profile clicked') },
      { label: 'Security', action: () => alert('Security clicked') },
    ],
  },
  {
    label: 'Help',
    disabled: true,
    children: [
      { label: 'FAQ', action: () => alert('FAQ clicked') },
      { label: 'Contact', action: () => alert('Contact clicked') },
    ],
  },
];

export const Default = Template.bind({});
Default.args = {
  menus: sampleMenus,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...Default.args,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
};