import NumberedList from './NumberedList.vue';

export default {
  title: 'Lists/NumberedList',
  component: NumberedList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { NumberedList },
  setup() {
    return { args };
  },
  template: '<NumberedList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};