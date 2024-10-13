import Accordion from './Accordion.svelte';

export default {
  title: 'Lists/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    isOpen: false,
    title: 'Accordion Title',
  },
};

export const Open = {
  args: {
    isOpen: true,
    title: 'Accordion Title',
  },
};

export const Closed = {
  args: {
    isOpen: false,
    title: 'Accordion Title',
  },
};

export const Hover = {
  args: {
    isOpen: false,
    title: 'Accordion Title',
  },
  parameters: {
    pseudo: { hover: true }
  }
};