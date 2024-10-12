import ProgressBar from './ProgressBar.svelte';

export default {
  title: 'Components/Indicators/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100 } },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ProgressBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  disabled: false,
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  disabled: false,
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  progress: 25,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  progress: 75,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  progress: 50,
  disabled: true,
};