import BottomNavigationBar from './BottomNavigationBar.svelte';

export default {
  title: 'Navigation/BottomNavigationBar',
  component: BottomNavigationBar,
  argTypes: {
    items: { control: 'object' },
    onSelect: { action: 'selected' }
  },
};

const Template = (args) => ({
  Component: BottomNavigationBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', icon: 'home_icon.svg' },
    { label: 'Search', icon: 'search_icon.svg' },
    { label: 'Profile', icon: 'profile_icon.svg' },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { label: 'Home', icon: 'home_icon.svg', selected: true },
    { label: 'Search', icon: 'search_icon.svg' },
    { label: 'Profile', icon: 'profile_icon.svg' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { label: 'Home', icon: 'home_icon.svg' },
    { label: 'Search', icon: 'search_icon.svg' },
    { label: 'Profile', icon: 'profile_icon.svg' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Home', icon: 'home_icon.svg', disabled: true },
    { label: 'Search', icon: 'search_icon.svg' },
    { label: 'Profile', icon: 'profile_icon.svg' },
  ],
};