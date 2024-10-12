import Pagination from './Pagination.vue';

export default {
  title: 'Lists/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: { control: 'number' },
  },
};

const Template = (args: any) => ({
  components: { Pagination },
  setup() {
    return { args };
  },
  template: '<Pagination v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  totalPages: 5,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};