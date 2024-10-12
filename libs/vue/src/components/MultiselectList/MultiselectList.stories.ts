import MultiselectList from './MultiselectList.vue';

export default {
  title: 'Lists/MultiselectList',
  component: MultiselectList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { MultiselectList },
  setup() {
    return { args };
  },
  template: '<MultiselectList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  disabled: false,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  ...Default.args,
};

export const ItemDeselected = Template.bind({});
ItemDeselected.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};