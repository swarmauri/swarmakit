import DarkModeToggle from './DarkModeToggle.vue';

export default {
  title: 'Miscellaneous/DarkModeToggle',
  component: DarkModeToggle,
  tags: ['autodocs'],
  argTypes: {
    isDarkMode: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { DarkModeToggle },
  setup() {
    return { args };
  },
  template: '<DarkModeToggle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const LightMode = Template.bind({});
LightMode.args = {};

export const DarkMode = Template.bind({});
DarkMode.args = {
  isDarkMode: true,
};