import ContextualNavigation from './ContextualNavigation.svelte';

export default {
  title: 'Navigation/ContextualNavigation',
  component: ContextualNavigation,
  argTypes: {
    items: { control: 'object' },
    isVisible: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ContextualNavigation,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Profile', action: () => alert('Profile clicked') },
    { label: 'Settings', action: () => alert('Settings clicked') },
    { label: 'Logout', action: () => alert('Logout clicked') },
  ],
  isVisible: false,
};

export const ContextTriggered = Template.bind({});
ContextTriggered.args = {
  ...Default.args,
  isVisible: true,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  ...Default.args,
  isVisible: false,
};