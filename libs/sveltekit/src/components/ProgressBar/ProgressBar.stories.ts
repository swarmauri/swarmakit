import ProgressBar from './ProgressBar.svelte';

export default {
  title: 'Indicators/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: {
      control: { type: 'number', min: 0, max: 100 },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  Component: ProgressBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  isDisabled: false,
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  isDisabled: false,
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 0,
  isDisabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  progress: 50,
  isDisabled: false,
};

Hover.parameters = {
  pseudo: { hover: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
  progress: 50,
  isDisabled: true,
};