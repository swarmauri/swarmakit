import Slider from './Slider.svelte';
import type { SliderState } from './Slider.svelte';

export default {
  title: 'Input/Slider',
  component: Slider,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(SliderState),
    },
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'number' },
    step: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: Slider,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: SliderState.Min,
  min: 0,
  max: 100,
  value: 0,
  step: 1,
};

export const Min = Template.bind({});
Min.args = {
  state: SliderState.Min,
  min: 0,
  max: 100,
  value: 0,
  step: 1,
};

export const Max = Template.bind({});
Max.args = {
  state: SliderState.Max,
  min: 0,
  max: 100,
  value: 100,
  step: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: SliderState.Disabled,
  min: 0,
  max: 100,
  value: 50,
  step: 1,
};