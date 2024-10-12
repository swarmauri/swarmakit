import RangeSlider from './RangeSlider.vue';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    modelValue: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { RangeSlider },
  setup() {
    return { args };
  },
  template: '<RangeSlider v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Volume',
  id: 'default-slider',
  min: 0,
  max: 100,
  step: 1,
  modelValue: 50,
  disabled: false,
};

export const Min = Template.bind({});
Min.args = {
  label: 'Volume',
  id: 'min-slider',
  min: 0,
  max: 100,
  step: 1,
  modelValue: 0,
  disabled: false,
};

export const Max = Template.bind({});
Max.args = {
  label: 'Volume',
  id: 'max-slider',
  min: 0,
  max: 100,
  step: 1,
  modelValue: 100,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Volume',
  id: 'hover-slider',
  min: 0,
  max: 100,
  step: 1,
  modelValue: 50,
  disabled: false,
};

export const Active = Template.bind({});
Active.args = {
  label: 'Volume',
  id: 'active-slider',
  min: 0,
  max: 100,
  step: 1,
  modelValue: 75,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Volume',
  id: 'disabled-slider',
  min: 0,
  max: 100,
  step: 1,
  modelValue: 50,
  disabled: true,
};