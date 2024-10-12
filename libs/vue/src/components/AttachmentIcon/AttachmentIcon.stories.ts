import AttachmentIcon from './AttachmentIcon.vue';

export default {
  title: 'Chat/AttachmentIcon',
  component: AttachmentIcon,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['enabled', 'disabled', 'hovered', 'clicked'],
    },
  },
};

const Template = (args: any) => ({
  components: { AttachmentIcon },
  setup() {
    return { args };
  },
  template: `
    <AttachmentIcon v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  state: 'enabled',
};

export const Enabled = Template.bind({});
Enabled.args = {
  state: 'enabled',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
};