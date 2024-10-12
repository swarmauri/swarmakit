import TimelineList from './TimelineList.svelte';
import type { TimelineItem } from './TimelineList.svelte';

export default {
  title: 'Lists/TimelineList',
  component: TimelineList,
  argTypes: {
    items: { control: 'object' },
    activeItemId: { control: 'number' },
    onItemSelect: { action: 'onItemSelect' },
  },
};

const Template = (args) => ({
  Component: TimelineList,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, title: 'Step 1', description: 'Description for step 1' },
    { id: 2, title: 'Step 2', description: 'Description for step 2' },
    { id: 3, title: 'Step 3', description: 'Description for step 3' },
  ],
  activeItemId: 1,
  onItemSelect: (item: TimelineItem) => console.log('Selected item', item),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  activeItemId: 1,
};

export const Completed = Template.bind({});
Completed.args = {
  items: [
    { id: 1, title: 'Step 1', description: 'Description for step 1', completed: true },
    { id: 2, title: 'Step 2', description: 'Description for step 2', completed: true },
    { id: 3, title: 'Step 3', description: 'Description for step 3' },
  ],
  activeItemId: 3,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
  activeItemId: 3,
};