import TabBarNavigationMobile from './TabBarNavigationMobile.vue';

export default {
  title: 'Navigation/TabBarNavigationMobile',
  component: TabBarNavigationMobile,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { TabBarNavigationMobile },
  setup() {
    return { args };
  },
  template: `<TabBarNavigationMobile />`,
});

export const Default = Template.bind({});

export const Active = Template.bind({});
Active.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Search/i });
  await userEvent.click(button);
};

export const Hover = Template.bind({});
Hover.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Notifications/i });
  await userEvent.hover(button);
};

export const Disabled = Template.bind({});
Disabled.args = {
  tabs: [
    { label: 'Home', isActive: false, isDisabled: true },
    { label: 'Search', isActive: false, isDisabled: false },
    { label: 'Notifications', isActive: true, isDisabled: false },
    { label: 'Profile', isActive: false, isDisabled: false },
  ],
};