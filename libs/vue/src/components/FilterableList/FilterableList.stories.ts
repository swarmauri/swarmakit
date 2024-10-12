import FilterableList from './FilterableList.vue';

export default {
  title: 'Lists/FilterableList',
  component: FilterableList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { FilterableList },
  setup() {
    return { args };
  },
  template: '<FilterableList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  ...Default.args,
};

export const NoResults = Template.bind({});
NoResults.args = {
  ...Default.args,
};

export const ClearFilter = Template.bind({});
ClearFilter.args = {
  ...Default.args,
};