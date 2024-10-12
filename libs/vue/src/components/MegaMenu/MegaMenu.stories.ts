import MegaMenu from './MegaMenu.vue';

export default {
  title: 'Navigation/MegaMenu',
  component: MegaMenu,
  tags: ['autodocs'],
  argTypes: {
    menuItems: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { MegaMenu },
  setup() {
    return { args };
  },
  template: `
    <MegaMenu v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: 'Products', subItems: [{ label: 'Product 1' }, { label: 'Product 2' }] },
    { label: 'Services', subItems: [{ label: 'Service 1' }, { label: 'Service 2' }] },
    { label: 'Contact', subItems: [{ label: 'Email' }, { label: 'Phone' }] },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  menuItems: Default.args.menuItems,
};
Expanded.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText('Products'));
};

export const Hover = Template.bind({});
Hover.args = {
  menuItems: Default.args.menuItems,
};
Hover.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText('Services'));
};

export const Active = Template.bind({});
Active.args = {
  menuItems: Default.args.menuItems,
};
Active.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText('Contact'));
};