import InteractivePollResults from './InteractivePollResults.vue';

export default {
  title: 'Indicators/InteractivePollResults',
  component: InteractivePollResults,
  tags: ['autodocs'],
  argTypes: {
    pollTitle: {
      control: { type: 'text' },
      description: 'Title of the poll',
    },
    options: {
      control: { type: 'object' },
      description: 'Array of poll options with percentages',
    },
    status: {
      control: { type: 'select' },
      options: ['Live Results', 'Completed', 'Closed'],
      description: 'Status of the poll',
    },
  },
};

const Template = (args: any) => ({
  components: { InteractivePollResults },
  setup() {
    return { args };
  },
  template: '<InteractivePollResults v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  pollTitle: 'Favorite Programming Language',
  options: [
    { id: 1, text: 'JavaScript', percentage: 40 },
    { id: 2, text: 'Python', percentage: 30 },
    { id: 3, text: 'Java', percentage: 20 },
    { id: 4, text: 'C++', percentage: 10 },
  ],
  status: 'Live Results',
};

export const LiveResults = Template.bind({});
LiveResults.args = {
  ...Default.args,
  status: 'Live Results',
};

export const Completed = Template.bind({});
Completed.args = {
  ...Default.args,
  status: 'Completed',
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  status: 'Closed',
};