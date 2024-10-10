import React from 'react';
import SidebarWithAccordionMenus from './SidebarWithAccordionMenus';

export default {
  title: 'Navigation/SidebarWithAccordionMenus',
  component: SidebarWithAccordionMenus,
};

const Template = (args) => <SidebarWithAccordionMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  menus: [
    {
      title: 'Dashboard',
      items: [{ name: 'Home' }, { name: 'Analytics' }, { name: 'Sales' }],
    },
    {
      title: 'Settings',
      items: [{ name: 'Profile' }, { name: 'Billing' }],
    },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  menus: [
    {
      title: 'Dashboard',
      items: [{ name: 'Home' }, { name: 'Analytics' }, { name: 'Sales' }],
    },
    {
      title: 'Settings',
      items: [{ name: 'Profile' }, { name: 'Billing' }],
    },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  menus: [
    {
      title: 'Dashboard',
      items: [{ name: 'Home' }, { name: 'Analytics' }, { name: 'Sales' }],
    },
    {
      title: 'Settings',
      items: [{ name: 'Profile' }, { name: 'Billing' }],
    },
  ],
};

export const Active = Template.bind({});
Active.args = {
  menus: [
    {
      title: 'Dashboard',
      items: [{ name: 'Home', active: true }, { name: 'Analytics' }, { name: 'Sales' }],
    },
    {
      title: 'Settings',
      items: [{ name: 'Profile' }, { name: 'Billing' }],
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  menus: [
    {
      title: 'Dashboard',
      items: [{ name: 'Home' }, { name: 'Analytics', disabled: true }, { name: 'Sales' }],
    },
    {
      title: 'Settings',
      items: [{ name: 'Profile' }, { name: 'Billing' }],
    },
  ],
};