import Textarea from './Textarea.vue';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
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