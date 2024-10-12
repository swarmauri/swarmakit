import ToggleSwitch from './ToggleSwitch.vue';

export default {
  title: 'Forms/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { ToggleSwitch },
  setup() {
    return { args };
  },
  template: '<ToggleSwitch v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: false,
  disabled: false,
};

export const On = Template.bind({});
On.args = {
  modelValue: true,
  disabled: false,
};

export const Off = Template.bind({});
Off.args = {
  modelValue: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: false,
  disabled: true,
};