import TabBarNavigationMobile from './TabBarNavigationMobile.svelte';

export default {
  title: 'Navigation/TabBarNavigationMobile',
  component: TabBarNavigationMobile,
  argTypes: {
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: TabBarNavigationMobile,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  active: false,
  disabled: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.parameters = {
  pseudo: { hover: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
  active: false,
  disabled: true,
};