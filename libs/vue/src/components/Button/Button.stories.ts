import Button from './Button.vue';

export default {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
    },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Button</Button>',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  disabled: false,
  active: false,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  variant: 'primary',
  disabled: false,
};

export const Active = Template.bind({});
Active.args = {
  variant: 'primary',
  active: true,
};