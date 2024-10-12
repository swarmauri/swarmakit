import ContextualNavigation from './ContextualNavigation.vue';

export default {
  title: 'Navigation/ContextualNavigation',
  component: ContextualNavigation,
  tags: ['autodocs'],
  argTypes: {
    navigationItems: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { ContextualNavigation },
  setup() {
    return { args };
  },
  template: `
    <ContextualNavigation v-bind="args" @navigate="args.navigateToItem = $event" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  navigationItems: [
    { label: 'Dashboard' },
    { label: 'Settings' },
    { label: 'Profile' },
    { label: 'Help' },
  ],
};

export const ContextTriggered = Template.bind({});
ContextTriggered.args = {
  navigationItems: [
    { label: 'Dashboard' },
    { label: 'Settings' },
    { label: 'Profile' },
    { label: 'Help' },
  ],
};
ContextTriggered.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button', { name: /toggle navigation/i }));
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  navigationItems: [
    { label: 'Dashboard' },
    { label: 'Settings' },
    { label: 'Profile' },
    { label: 'Help' },
  ],
};