import VirtualizedList from './VirtualizedList.vue';

export default {
  title: 'Lists/VirtualizedList',
  component: VirtualizedList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
    loading: { control: 'boolean' },
    endOfList: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { VirtualizedList },
  setup() {
    return { args };
  },
  template: '<VirtualizedList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 100 }, (_, i) => ({
    id: i,
    content: `Item ${i + 1}`,
  })),
  loading: false,
  endOfList: false,
};

export const LoadingMore = Template.bind({});
LoadingMore.args = {
  items: Array.from({ length: 50 }, (_, i) => ({
    id: i,
    content: `Item ${i + 1}`,
  })),
  loading: true,
  endOfList: false,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: Array.from({ length: 50 }, (_, i) => ({
    id: i,
    content: `Item ${i + 1}`,
  })),
  loading: false,
  endOfList: true,
};