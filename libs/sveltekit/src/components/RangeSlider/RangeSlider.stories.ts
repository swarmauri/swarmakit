import RangeSlider from './RangeSlider.svelte';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: RangeSlider,
  props: args,
  on: {
    input: args.onInput,
  },
});

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  onInput: (value) => console.log('Range slider value:', value),
};

export const Min = Template.bind({});
Min.args = {
  min: 0,
  max: 100,
  value: 0,
  step: 1,
  disabled: false,
  onInput: (value) => console.log('Range slider value:', value),
};

export const Max = Template.bind({});
Max.args = {
  min: 0,
  max: 100,
  value: 100,
  step: 1,
  disabled: false,
  onInput: (value) => console.log('Range slider value:', value),
};

export const Hover = Template.bind({});
Hover.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  onInput: (value) => console.log('Range slider value:', value),
};

export const Active = Template.bind({});
Active.args = {
  min: 0,
  max: 100,
  value: 75,
  step: 1,
  disabled: false,
  onInput: (value) => console.log('Range slider value:', value),
};

export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: true,
  onInput: (value) => console.log('Range slider value:', value),
};