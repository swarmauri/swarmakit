import PaginationControl from './PaginationControl.vue';

export default {
  title: 'components/Data/PaginationControl',
  component: PaginationControl,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { PaginationControl },
  setup() {
    return { args };
  },
  template: '<PaginationControl v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
  rowsPerPageOptions: [10, 20, 50, 100],
};

export const PageSelected = Template.bind({});
PageSelected.args = {
  ...Default.args,
  currentPage: 5,
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  ...Default.args,
  currentPage: 1,
};

export const LastPage = Template.bind({});
LastPage.args = {
  ...Default.args,
  currentPage: 10,
};