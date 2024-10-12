import Pagination from './Pagination.svelte';
import type { Page } from './Pagination.svelte';

export default {
  title: 'Lists/Pagination',
  component: Pagination,
  argTypes: {
    pages: { control: 'object' },
    onPageClick: { action: 'onPageClick' },
  },
};

const Template = (args) => ({
  Component: Pagination,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  pages: [
    { number: 1, active: false },
    { number: 2, active: false },
    { number: 3, active: true },
    { number: 4, active: false },
    { number: 5, active: false },
  ],
  onPageClick: (number: number) => console.log(`Page ${number} clicked`),
};

export const Active = Template.bind({});
Active.args = {
  pages: [
    { number: 1, active: false },
    { number: 2, active: false },
    { number: 3, active: true },
    { number: 4, active: false },
    { number: 5, active: false },
  ],
  onPageClick: (number: number) => console.log(`Page ${number} clicked`),
};

export const Inactive = Template.bind({});
Inactive.args = {
  pages: [
    { number: 1, active: false },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
    { number: 5, active: false },
  ],
  onPageClick: (number: number) => console.log(`Page ${number} clicked`),
};

export const Hover = Template.bind({});
Hover.args = {
  pages: [
    { number: 1, active: false },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
    { number: 5, active: false },
  ],
  onPageClick: (number: number) => console.log(`Page ${number} clicked`),
};