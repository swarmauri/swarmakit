import Popover from './Popover.vue';

export default {
  title: 'Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { Popover },
  setup() {
    return { args };
  },
  template: `
    <Popover v-bind="args">
      <template #trigger>
        <button>Toggle Popover</button>
      </template>
      <template #content>
        <p>This is a popover content.</p>
      </template>
    </Popover>
  `,
});

export const Default = Template.bind({});
Default.args = {
  visible: false,
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
};