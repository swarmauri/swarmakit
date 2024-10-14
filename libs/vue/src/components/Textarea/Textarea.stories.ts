import Textarea from './Textarea.vue';

export default {
  component: Textarea,
  title: 'component/Forms/Textarea',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
};

const Template = (args) => ({
  components: { Textarea },
  setup() {
    return { args };
  },
  template: '<Textarea v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Enter text...',
  disabled: true,
};