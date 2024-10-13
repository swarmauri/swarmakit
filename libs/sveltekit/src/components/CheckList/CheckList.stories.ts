import CheckList from './CheckList.svelte';

export default {
  title: 'Lists/CheckList',
  component: CheckList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { id: 1, label: 'Task 1', checked: false },
      { id: 2, label: 'Task 2', checked: false },
      { id: 3, label: 'Task 3', checked: false },
    ],
    isDisabled: false,
  },
};

export const Checked = {
  args: {
    items: [
      { id: 1, label: 'Task 1', checked: true },
      { id: 2, label: 'Task 2', checked: true },
      { id: 3, label: 'Task 3', checked: true },
    ],
    isDisabled: false,
  },
};

export const Unchecked = {
  args: {
    items: [
      { id: 1, label: 'Task 1', checked: false },
      { id: 2, label: 'Task 2', checked: false },
      { id: 3, label: 'Task 3', checked: false },
    ],
    isDisabled: false,
  },
};

export const PartiallyChecked = {
  args: {
    items: [
      { id: 1, label: 'Task 1', checked: true },
      { id: 2, label: 'Task 2', checked: false, partiallyChecked: true },
      { id: 3, label: 'Task 3', checked: false },
    ],
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    items: [
      { id: 1, label: 'Task 1', checked: false },
      { id: 2, label: 'Task 2', checked: true },
      { id: 3, label: 'Task 3', checked: false },
    ],
    isDisabled: true,
  },
};