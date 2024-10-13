import Textarea from './Textarea.svelte';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    value: '',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    value: '',
    disabled: true,
  },
};