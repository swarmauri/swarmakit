import Breadcrumbs from './Breadcrumbs.vue';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    breadcrumbItems: { control: 'object' },
    activeIndex: { control: 'number' },
  },
};

const Template = (args: any) => ({
  components: { Breadcrumbs },
  setup() {
    return { args };
  },
  template: `
    <Breadcrumbs v-bind="args" @navigate="args.navigateToItem = $event" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  breadcrumbItems: [
    { label: 'Home' },
    { label: 'Category' },
    { label: 'Subcategory' },
    { label: 'Product' },
  ],
  activeIndex: 3,
};

export const Truncated = Template.bind({});
Truncated.args = {
  breadcrumbItems: [
    { label: 'Home' },
    { label: 'LongCategoryName' },
    { label: 'VeryLongSubcategoryName' },
    { label: 'Product' },
  ],
  activeIndex: 3,
};

export const Active = Template.bind({});
Active.args = {
  breadcrumbItems: [
    { label: 'Home' },
    { label: 'Category' },
    { label: 'Subcategory' },
    { label: 'Product' },
  ],
  activeIndex: 2,
};