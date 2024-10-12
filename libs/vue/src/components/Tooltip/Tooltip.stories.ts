import Tooltip from './Tooltip.vue';

export default {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    type: { 
      control: 'select',
      options: ['information', 'error'],
    },
  },
};

const Template = (args: any) => ({
  components: { Tooltip },
  setup() {
    return { args };
  },
  template: `
    <Tooltip v-bind="args">
      <template #trigger>
        <button>Hover me</button>
      </template>
      <template #content>
        <p>This is a tooltip content.</p>
      </template>
    </Tooltip>
  `,
});

export const Default = Template.bind({});
Default.args = {
  visible: false,
  type: 'information',
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
  type: 'information',
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
  type: 'information',
};

export const Error = Template.bind({});
Error.args = {
  visible: true,
  type: 'error',
};

export const Information = Template.bind({});
Information.args = {
  visible: true,
  type: 'information',
};