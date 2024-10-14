import RadioButton from './RadioButton.vue';

export default {
  component: RadioButton,
  title: 'component/Forms/RadioButton',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { RadioButton },
  setup() {
    return { args };
  },
  template: '<RadioButton v-bind="args">Option</RadioButton>',
});

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  value: 'option1',
  name: 'radioGroup',
};

export const Selected = Template.bind({});
Selected.args = {
  checked: true,
  disabled: false,
  value: 'option1',
  name: 'radioGroup',
};

export const Unselected = Template.bind({});
Unselected.args = {
  checked: false,
  disabled: false,
  value: 'option1',
  name: 'radioGroup',
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
  value: 'option1',
  name: 'radioGroup',
};