import DropdownMenu from './DropdownMenu.vue';

export default {
  title: 'Navigation/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    menuItems: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { DropdownMenu },
  setup() {
    return { args };
  },
  template: `
    <DropdownMenu v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Services' },
    { label: 'Contact' },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  menuItems: [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Services' },
    { label: 'Contact' },
  ],
};
Expanded.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button', { name: /menu/i }));
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  menuItems: [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Services' },
    { label: 'Contact' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  menuItems: [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Services' },
    { label: 'Contact' },
  ],
};
Hover.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const menuItem = canvas.getByText('Home');
  await userEvent.hover(menuItem);
};

export const Active = Template.bind({});
Active.args = {
  menuItems: [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Services' },
    { label: 'Contact' },
  ],
};
Active.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const menuItem = canvas.getByText('Home');
  await userEvent.hover(menuItem);
};