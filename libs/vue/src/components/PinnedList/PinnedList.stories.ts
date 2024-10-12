import PinnedList from './PinnedList.vue';

export default {
  title: 'Lists/PinnedList',
  component: PinnedList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
  },
};

const Template = (args: any) => ({
  components: { PinnedList },
  setup() {
    return { args };
  },
  template: '<PinnedList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: false },
    { id: 2, name: 'Item 2', pinned: true },
    { id: 3, name: 'Item 3', pinned: false },
  ],
};

export const Pinned = Template.bind({});
Pinned.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: true },
    { id: 2, name: 'Item 2', pinned: true },
  ],
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: false },
    { id: 2, name: 'Item 2', pinned: false },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { id: 1, name: 'Item 1', pinned: true },
    { id: 2, name: 'Item 2', pinned: false },
  ],
};