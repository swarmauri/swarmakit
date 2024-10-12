import OffCanvasNavigation from './Off-CanvasNavigation.svelte';

export default {
  title: 'Navigation/Off-CanvasNavigation',
  component: OffCanvasNavigation,
  argTypes: {
    items: { control: 'object' },
    isVisible: { control: 'boolean' },
    activeIndex: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: OffCanvasNavigation,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Dashboard', action: () => alert('Dashboard clicked') },
    { label: 'Profile', action: () => alert('Profile clicked') },
    { label: 'Settings', action: () => alert('Settings clicked') },
  ],
  isVisible: false,
  activeIndex: null,
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  isVisible: false,
};

export const Visible = Template.bind({});
Visible.args = {
  ...Default.args,
  isVisible: true,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isVisible: true,
  activeIndex: 0,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  ...Default.args,
  isVisible: false,
};