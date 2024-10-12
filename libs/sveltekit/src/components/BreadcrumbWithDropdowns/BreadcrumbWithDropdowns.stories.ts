import BreadcrumbWithDropdowns from './BreadcrumbWithDropdowns.svelte';

export default {
  title: 'Navigation/BreadcrumbWithDropdowns',
  component: BreadcrumbWithDropdowns,
  argTypes: {
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: BreadcrumbWithDropdowns,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Product', href: '/product', dropdown: [{ label: 'Details', href: '/product/details' }, { label: 'Reviews', href: '/product/reviews' }] },
  ],
};

export const DropdownOpen = Template.bind({});
DropdownOpen.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Product', href: '/product', dropdown: [{ label: 'Details', href: '/product/details' }, { label: 'Reviews', href: '/product/reviews' }] },
  ],
};

export const DropdownClosed = Template.bind({});
DropdownClosed.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Product', href: '/product', dropdown: [{ label: 'Details', href: '/product/details' }, { label: 'Reviews', href: '/product/reviews' }] },
  ],
};