import ScrollableHorizontalNavigation from './ScrollableHorizontalNavigation.svelte';

export default {
  title: 'Navigation/ScrollableHorizontalNavigation',
  component: ScrollableHorizontalNavigation,
  argTypes: {
    items: { control: 'object' },
    activeIndex: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: ScrollableHorizontalNavigation,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', action: () => alert('Home clicked') },
    { label: 'About', action: () => alert('About clicked') },
    { label: 'Services', action: () => alert('Services clicked') },
    { label: 'Contact', action: () => alert('Contact clicked') },
  ],
  activeIndex: null,
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  activeIndex: 0,
};