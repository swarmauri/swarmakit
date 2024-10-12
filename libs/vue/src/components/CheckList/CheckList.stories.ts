import CheckList from './CheckList.vue';

export default {
  title: 'Lists/CheckList',
  component: CheckList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    'item-checked': { action: 'item-checked' },
  },
};

const Template = (args: any) => ({
  components: { CheckList },
  setup() {
    return { args };
  },
  template: '<CheckList v-bind="args" @item-checked="args[\'item-checked\']" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Item 1', checked: false, indeterminate: false, disabled: false },
    { label: 'Item 2', checked: false, indeterminate: false, disabled: false },
  ],
};

export const Checked = Template.bind({});
Checked.args = {
  items: [
    { label: 'Item 1', checked: true, indeterminate: false, disabled: false },
    { label: 'Item 2', checked: false, indeterminate: false, disabled: false },
  ],
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  items: [
    { label: 'Item 1', checked: false, indeterminate: false, disabled: false },
    { label: 'Item 2', checked: false, indeterminate: false, disabled: false },
  ],
};

export const PartiallyChecked = Template.bind({});
PartiallyChecked.args = {
  items: [
    { label: 'Item 1', checked: false, indeterminate: true, disabled: false },
    { label: 'Item 2', checked: false, indeterminate: false, disabled: false },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { label: 'Item 1', checked: false, indeterminate: false, disabled: true },
    { label: 'Item 2', checked: true, indeterminate: false, disabled: true },
  ],
};