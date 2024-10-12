import SearchBar from './SearchBar.vue';

export default {
  title: 'Input/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { SearchBar },
  setup() {
    return { args };
  },
  template: '<SearchBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Focused = Template.bind({});
Focused.args = {
  disabled: false,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};