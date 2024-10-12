import ThreadReactionButton from './ThreadReactionButton.svelte';

export default {
  title: 'Threads/ThreadReactionButton',
  component: ThreadReactionButton,
  argTypes: {
    label: {
      control: 'text',
    },
    isAvailable: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  Component: ThreadReactionButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'React',
  isAvailable: true,
};

export const Available = Template.bind({});
Available.args = {
  label: 'React',
  isAvailable: true,
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  label: 'React',
  isAvailable: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  label: 'React',
  isAvailable: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  label: 'React',
  isAvailable: true,
};