import LoadMoreButtonInList from './LoadMoreButtonInList.vue';

export default {
  title: 'Lists/LoadMoreButtonInList',
  component: LoadMoreButtonInList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
    itemsPerPage: { control: 'number' },
  },
};

const Template = (args: any) => ({
  components: { LoadMoreButtonInList },
  setup() {
    return { args };
  },
  template: '<LoadMoreButtonInList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  itemsPerPage: 5,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  ...Default.args,
};