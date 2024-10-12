import Checkbox from './Checkbox.vue';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args">Checkbox Label</Checkbox>',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  modelValue: true,
  disabled: false,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  modelValue: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: false,
  disabled: true,
};