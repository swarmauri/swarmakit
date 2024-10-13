import Slider from './Slider.svelte';

export default {
  title: 'Input/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    isDisabled: false,
  },
};

export const Min = {
  args: {
    min: 0,
    max: 100,
    value: 0,
    isDisabled: false,
  },
};

export const Max = {
  args: {
    min: 0,
    max: 100,
    value: 100,
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    isDisabled: true,
  },
};