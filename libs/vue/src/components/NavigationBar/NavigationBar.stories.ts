import NavigationBar from './NavigationBar.vue';

export default {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  argTypes: {
    navItems: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { NavigationBar },
  setup() {
    return { args };
  },
  template: `
    <NavigationBar v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  navItems: [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Services' },
    { label: 'Contact' },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  navItems: Default.args.navItems,
};
Expanded.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /expand/i });
  await userEvent.click(button);
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  navItems: Default.args.navItems,
};

export const Hover = Template.bind({});
Hover.args = {
  navItems: Default.args.navItems,
};
Hover.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText('Services'));
};

export const Active = Template.bind({});
Active.args = {
  navItems: Default.args.navItems,
};
Active.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText('Contact'));
};