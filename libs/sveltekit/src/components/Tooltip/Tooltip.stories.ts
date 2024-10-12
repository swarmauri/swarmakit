import Tooltip from './Tooltip.svelte';

export default {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  argTypes: {
    isVisible: { control: 'boolean' },
    content: { control: 'text' },
    type: { 
      control: { type: 'select' }, 
      options: ['default', 'error', 'information']
    },
  },
};

const Template = (args) => ({
  Component: Tooltip,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
  content: 'This is a default tooltip.',
  type: 'default',
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
  content: 'This tooltip is visible.',
  type: 'default',
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
  content: 'This tooltip is hidden.',
  type: 'default',
};

export const Error = Template.bind({});
Error.args = {
  isVisible: true,
  content: 'This is an error tooltip.',
  type: 'error',
};

export const Information = Template.bind({});
Information.args = {
  isVisible: true,
  content: 'This is an informational tooltip.',
  type: 'information',
};