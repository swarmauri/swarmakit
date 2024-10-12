import FloatingActionButton from './FloatingActionButton.vue';

export default {
  title: 'Miscellaneous/FloatingActionButton',
  component: FloatingActionButton,
  tags: ['autodocs'],
  argTypes: {
    isExpanded: { control: 'boolean' },
    hover: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { FloatingActionButton },
  setup() {
    return { args };
  },
  template: '<FloatingActionButton v-bind="args" />',
});

export const Collapsed = Template.bind({});
Collapsed.args = {
  isExpanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  isExpanded: true,
};

export const Hover = Template.bind({});
Hover.args = {
  hover: true,
};