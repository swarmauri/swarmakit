import DarkModeToggle from './DarkModeToggle.svelte';

export default {
  title: 'Miscellaneous/DarkModeToggle',
  component: DarkModeToggle,
  argTypes: {
    isDarkMode: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: DarkModeToggle,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isDarkMode: false,
};

export const LightMode = Template.bind({});
LightMode.args = {
  isDarkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  isDarkMode: true,
};