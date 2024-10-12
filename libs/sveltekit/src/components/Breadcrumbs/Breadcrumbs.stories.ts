import Breadcrumbs from './Breadcrumbs.svelte';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    items: { control: 'object' },
    activeIndex: { control: 'number' },
    truncate: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Breadcrumbs,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/subcategory' },
    { label: 'Product', href: '/product' },
  ],
  activeIndex: null,
  truncate: false,
};

export const Truncated = Template.bind({});
Truncated.args = {
  ...Default.args,
  truncate: true,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  activeIndex: 3,
};