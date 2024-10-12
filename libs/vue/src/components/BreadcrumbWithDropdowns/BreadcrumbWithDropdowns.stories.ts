import BreadcrumbWithDropdowns from './BreadcrumbWithDropdowns.vue';

export default {
  title: 'Navigation/BreadcrumbWithDropdowns',
  component: BreadcrumbWithDropdowns,
  tags: ['autodocs'],
  argTypes: {
    breadcrumbItems: { control: 'object' },
  },
};

const Template = (args: any) => ({
  components: { BreadcrumbWithDropdowns },
  setup() {
    return { args };
  },
  template: `
    <BreadcrumbWithDropdowns v-bind="args" @select="args.selectedItem = $event" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  breadcrumbItems: [
    { label: 'Home' },
    { label: 'Products', children: [{ label: 'Electronics' }, { label: 'Apparel' }] },
    { label: 'Electronics', children: [{ label: 'Phones' }, { label: 'Laptops' }] },
    { label: 'Phones' },
  ],
};

export const DropdownOpen = Template.bind({});
DropdownOpen.args = {
  breadcrumbItems: [
    { label: 'Home' },
    { label: 'Products', children: [{ label: 'Electronics' }, { label: 'Apparel' }] },
    { label: 'Electronics', children: [{ label: 'Phones' }, { label: 'Laptops' }] },
    { label: 'Phones' },
  ],
};

export const DropdownClosed = Template.bind({});
DropdownClosed.args = {
  breadcrumbItems: [
    { label: 'Home' },
    { label: 'Products', children: [{ label: 'Electronics' }, { label: 'Apparel' }] },
    { label: 'Electronics', children: [{ label: 'Phones' }, { label: 'Laptops' }] },
    { label: 'Phones' },
  ],
};