import RangeSlider from './RangeSlider.svelte';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    disabled: false,
  },
};

export const Min = {
  args: {
    min: 0,
    max: 100,
    value: 0,
    disabled: false,
  },
};

export const Max = {
  args: {
    min: 0,
    max: 100,
    value: 100,
    disabled: false,
  },
};

export const Hover = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Active = {
  args: {
    min: 0,
    max: 100,
    value: 75,
    disabled: false,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Disabled = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    disabled: true,
  },
};