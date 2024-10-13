import NumberInputWithIncrement from './NumberInputWithIncrement.svelte';

export default {
  title: 'Forms/NumberInputWithIncrement',
  component: NumberInputWithIncrement,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    value: 0,
    step: 1,
    disabled: false,
  },
};

export const Increment = {
  args: {
    value: 5,
    step: 1,
    disabled: false,
  },
};

export const Decrement = {
  args: {
    value: 5,
    step: 1,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    value: 10,
    step: 1,
    disabled: true,
  },
};