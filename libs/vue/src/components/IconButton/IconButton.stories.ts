import IconButton from './IconButton.vue';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { IconButton },
  setup() {
    return { args };
  },
  template: '<IconButton v-bind="args"><svg><!-- Your SVG icon here --></svg></IconButton>',
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const Hover = Template.bind({});
Hover.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};