import NumberInputWithIncrement from './NumberInputWithIncrement.svelte';

export default {
  title: 'Components/Forms/NumberInputWithIncrement',
  component: NumberInputWithIncrement,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: NumberInputWithIncrement,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
};

export const Increment = Template.bind({});
Increment.args = {
  value: 5,
  min: 0,
  max: 10,
  step: 1,
  disabled: false,
};

export const Decrement = Template.bind({});
Decrement.args = {
  value: 5,
  min: 0,
  max: 10,
  step: 1,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 5,
  min: 0,
  max: 10,
  step: 1,
  disabled: true,
};