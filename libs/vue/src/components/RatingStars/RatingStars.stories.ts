import RatingStars from './RatingStars.vue';

export default {
  title: 'Indicators/RatingStars',
  component: RatingStars,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'number', min: 0, max: 5 },
      description: 'The current rating value',
    },
    state: {
      control: { type: 'select', options: ['hover', 'selected', 'inactive'] },
      description: 'The current state of the rating stars',
    },
  },
};

const Template = (args: any) => ({
  components: { RatingStars },
  setup() {
    return { args };
  },
  template: '<RatingStars v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 0,
  state: 'inactive',
};

export const Hover = Template.bind({});
Hover.args = {
  modelValue: 3,
  state: 'hover',
};

export const Selected = Template.bind({});
Selected.args = {
  modelValue: 4,
  state: 'selected',
};

export const Inactive = Template.bind({});
Inactive.args = {
  modelValue: 2,
  state: 'inactive',
};