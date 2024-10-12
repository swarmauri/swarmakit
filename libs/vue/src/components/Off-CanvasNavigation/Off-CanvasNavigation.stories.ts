import OffCanvasNavigation from './Off-CanvasNavigation.vue';

export default {
  title: 'Navigation/Off-CanvasNavigation',
  component: OffCanvasNavigation,
  tags: ['autodocs'],
  argTypes: {
    navItems: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { OffCanvasNavigation },
  setup() {
    return { args };
  },
  template: `
    <OffCanvasNavigation v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  navItems: [
    { label: 'Dashboard' },
    { label: 'Profile' },
    { label: 'Settings' },
    { label: 'Logout' },
  ],
};

export const Hidden = Template.bind({});
Hidden.args = {
  navItems: Default.args.navItems,
};

export const Visible = Template.bind({});
Visible.args = {
  navItems: Default.args.navItems,
};
Visible.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /open menu/i });
  await userEvent.click(button);
};

export const Active = Template.bind({});
Active.args = {
  navItems: Default.args.navItems,
};
Active.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Profile'));
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  navItems: Default.args.navItems,
};
Dismissed.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /open menu/i });
  await userEvent.click(button);
  const backdrop = canvas.getByRole('button', { name: /close menu/i });
  await userEvent.click(backdrop);
};