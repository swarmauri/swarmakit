import ActionableList from './ActionableList.svelte';

export default {
  title: 'Lists/ActionableList',
  component: ActionableList,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
    ],
    isDisabled: false,
    isLoading: false,
  },
};

export const Hover = {
  args: {
    items: [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
    ],
    isDisabled: false,
    isLoading: false,
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const ActionTriggered = {
  args: {
    items: [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
    ],
    isDisabled: false,
    isLoading: false,
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    if (button) {
      button.click();
    }
  },
};

export const Disabled = {
  args: {
    items: [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
    ],
    isDisabled: true,
    isLoading: false,
  },
};

export const Loading = {
  args: {
    items: [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
    ],
    isDisabled: false,
    isLoading: true,
  },
};