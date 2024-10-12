import ScrollableHorizontalNavigation from './ScrollableHorizontalNavigation.vue';

export default {
  title: 'Navigation/ScrollableHorizontalNavigation',
  component: ScrollableHorizontalNavigation,
  tags: ['autodocs'],
  argTypes: {
    navItems: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { ScrollableHorizontalNavigation },
  setup() {
    return { args };
  },
  template: `
    <ScrollableHorizontalNavigation v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  navItems: [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Services' },
    { label: 'Contact' },
    { label: 'Blog' },
  ],
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  navItems: Default.args.navItems,
};
Scrolled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const navList = canvas.getByRole('navigation');
  navList.scrollLeft = 100;
};

export const Hover = Template.bind({});
Hover.args = {
  navItems: Default.args.navItems,
};
Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByText('Services');
  await userEvent.hover(link);
};

export const Active = Template.bind({});
Active.args = {
  navItems: Default.args.navItems,
};
Active.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByText('Contact');
  await userEvent.click(link);
};