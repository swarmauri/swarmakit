import TimelineList from './TimelineList.vue';

export default {
  title: 'Lists/TimelineList',
  component: TimelineList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
    activeIndex: { control: 'number' },
  },
};

const Template = (args: any) => ({
  components: { TimelineList },
  setup() {
    return { args };
  },
  template: '<TimelineList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, title: 'Step 1', description: 'Start', active: true },
    { id: 2, title: 'Step 2', description: 'In Progress' },
    { id: 3, title: 'Step 3', description: 'Review' },
    { id: 4, title: 'Step 4', description: 'Complete' },
  ],
  activeIndex: 0,
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { id: 1, title: 'Step 1', description: 'Start', active: true },
    { id: 2, title: 'Step 2', description: 'In Progress' },
    { id: 3, title: 'Step 3', description: 'Review' },
  ],
  activeIndex: 0,
};

export const Completed = Template.bind({});
Completed.args = {
  items: [
    { id: 1, title: 'Step 1', description: 'Start', completed: true },
    { id: 2, title: 'Step 2', description: 'In Progress', completed: true },
    { id: 3, title: 'Step 3', description: 'Review' },
  ],
  activeIndex: 2,
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { id: 1, title: 'Step 1', description: 'Start' },
    { id: 2, title: 'Step 2', description: 'In Progress' },
    { id: 3, title: 'Step 3', description: 'Review' },
  ],
  activeIndex: 0,
};

export const Inactive = Template.bind({});
Inactive.args = {
  items: [
    { id: 1, title: 'Step 1', description: 'Start', active: false },
    { id: 2, title: 'Step 2', description: 'In Progress', active: false },
    { id: 3, title: 'Step 3', description: 'Review', active: false },
  ],
  activeIndex: 0,
};