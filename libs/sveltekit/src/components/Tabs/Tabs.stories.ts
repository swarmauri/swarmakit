import Tabs from './Tabs.svelte';
import type { Tab } from './Tabs.svelte';

export default {
  title: 'Lists/Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: 'object' },
    activeTabId: { control: 'number' },
    onTabChange: { action: 'onTabChange' },
  },
};

const Template = (args) => ({
  Component: Tabs,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: 1, title: 'Tab 1' },
    { id: 2, title: 'Tab 2' },
    { id: 3, title: 'Tab 3' },
  ],
  activeTabId: 1,
  onTabChange: (activeTab: Tab) => console.log('Active tab', activeTab),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
  activeTabId: 2,
};

export const Disabled = Template.bind({});
Disabled.args = {
  tabs: [
    { id: 1, title: 'Tab 1' },
    { id: 2, title: 'Tab 2', disabled: true },
    { id: 3, title: 'Tab 3' },
  ],
  activeTabId: 1,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};