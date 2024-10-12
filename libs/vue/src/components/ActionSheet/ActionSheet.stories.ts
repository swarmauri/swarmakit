import ActionSheet from './ActionSheet.vue';

export default {
  title: 'Overlays/ActionSheet',
  component: ActionSheet,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { ActionSheet },
  setup() {
    return { args };
  },
  template: `<ActionSheet v-bind="args"><p>Action Sheet Content</p></ActionSheet>`,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};

export const Opened = Template.bind({});
Opened.args = {
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};

export const Hover = Template.bind({});
Hover.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const actionSheet = await canvas.getByRole('dialog', { hidden: true });
  await userEvent.hover(actionSheet);
};