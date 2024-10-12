import Popover from './Popover.svelte';

export default {
  title: 'Overlays/Popover',
  component: Popover,
  argTypes: {
    isVisible: { control: 'boolean' },
    content: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: Popover,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
  content: 'This is a default popover content.',
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  content: 'This popover is visible.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
  content: 'This popover is hidden.',
};