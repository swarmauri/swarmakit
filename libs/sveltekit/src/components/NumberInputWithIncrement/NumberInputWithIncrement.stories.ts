import NumberInputWithIncrement from './NumberInputWithIncrement.svelte';

export default {
  title: 'Forms/NumberInputWithIncrement',
  component: NumberInputWithIncrement,
  argTypes: {
    value: { control: 'number' },
    step: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: NumberInputWithIncrement,
  props: args,
  on: {
    valueChange: args.onValueChange,
  },
});

export const Default = Template.bind({});
Default.args = {
  value: 0,
  step: 1,
  min: 0,
  max: 100,
  disabled: false,
  onValueChange: (value) => console.log('Value changed:', value),
};

export const Increment = Template.bind({});
Increment.args = {
  value: 10,
  step: 2,
  min: 0,
  max: 100,
  disabled: false,
  onValueChange: (value) => console.log('Incremented value:', value),
};

export const Decrement = Template.bind({});
Decrement.args = {
  value: 10,
  step: 2,
  min: 0,
  max: 100,
  disabled: false,
  onValueChange: (value) => console.log('Decremented value:', value),
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 10,
  step: 1,
  min: 0,
  max: 100,
  disabled: true,
  onValueChange: (value) => console.log('Disabled value change:', value),
};