import ToggleSwitch from './ToggleSwitch.svelte';

export default {
  title: 'Components/Forms/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ToggleSwitch,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const On = Template.bind({});
On.args = {
  checked: true,
  disabled: false,
};

export const Off = Template.bind({});
Off.args = {
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};