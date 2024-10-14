import React from 'react';
import InteractivePollResults from './InteractivePollResults';

export default {
  title: 'Indicators/InteractivePollResults',
  component: InteractivePollResults,
};

const Template = (args) => <InteractivePollResults {...args} />;

export const Default = Template.bind({});
Default.args = {
  results: [
    { option: 'Option A', percentage: 40 },
    { option: 'Option B', percentage: 35 },
    { option: 'Option C', percentage: 25 },
  ],
  status: 'Live Results',
};

export const LiveResults = Template.bind({});
LiveResults.args = {
  results: [
    { option: 'Option A', percentage: 50 },
    { option: 'Option B', percentage: 30 },
    { option: 'Option C', percentage: 20 },
  ],
  status: 'Live Results',
};

export const Completed = Template.bind({});
Completed.args = {
  results: [
    { option: 'Option A', percentage: 45 },
    { option: 'Option B', percentage: 40 },
    { option: 'Option C', percentage: 15 },
  ],
  status: 'Completed',
};

export const Closed = Template.bind({});
Closed.args = {
  results: [
    { option: 'Option A', percentage: 40 },
    { option: 'Option B', percentage: 35 },
    { option: 'Option C', percentage: 25 },
  ],
  status: 'Closed',
};