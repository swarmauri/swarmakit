import SidebarWithAccordionMenus from './SidebarWithAccordionMenus.vue';

export default {
  title: 'Navigation/SidebarWithAccordionMenus',
  component: SidebarWithAccordionMenus,
  tags: ['autodocs'],
  argTypes: {
    menus: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { SidebarWithAccordionMenus },
  setup() {
    return { args };
  },
  template: `
    <SidebarWithAccordionMenus v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  menus: [
    { label: 'Menu 1', items: [{ label: 'Submenu 1-1' }, { label: 'Submenu 1-2' }] },
    { label: 'Menu 2', items: [{ label: 'Submenu 2-1' }, { label: 'Submenu 2-2' }] },
    { label: 'Menu 3', items: [{ label: 'Submenu 3-1' }, { label: 'Submenu 3-2' }] },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  menus: Default.args.menus,
};
Expanded.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Menu 1');
  await userEvent.click(button);
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  menus: Default.args.menus,
};

export const Active = Template.bind({});
Active.args = {
  menus: Default.args.menus,
};
Active.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByText('Submenu 2-1');
  await userEvent.click(link);
};

export const Disabled = Template.bind({});
Disabled.args = {
  menus: [
    ...Default.args.menus.slice(0, 1),
    { label: 'Menu 2', items: [{ label: 'Submenu 2-1' }, { label: 'Submenu 2-2' }], disabled: true },
    ...Default.args.menus.slice(2),
  ],
};