import Modal from './Modal.svelte';

export default {
  title: 'Overlays/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: Modal,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  isDisabled: false,
  title: 'Default Modal',
  content: 'This is the default modal content.',
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  isDisabled: false,
  title: 'Open Modal',
  content: 'This modal is currently open.',
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  isDisabled: false,
  title: 'Closed Modal',
  content: 'This modal is currently closed.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isOpen: true,
  isDisabled: true,
  title: 'Disabled Modal',
  content: 'This modal is disabled and cannot be closed.',
};