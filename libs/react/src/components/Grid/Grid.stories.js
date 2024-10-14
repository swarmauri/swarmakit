import React from 'react';
import Grid from './Grid';

export default {
  title: 'UI Layout/Grid',
  component: Grid,
  argTypes: {
    columns: { control: 'number' },
    items: { control: 'array' },
    isStretched: { control: 'boolean' },
    isAligned: { control: 'boolean' },
  },
};

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const Empty = Template.bind({});
Empty.args = {
  columns: 3,
  items: [],
};

export const Populated = Template.bind({});
Populated.args = {
  columns: 3,
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
};

export const Responsive = Template.bind({});
Responsive.args = {
  columns: 4,
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'],
};

export const Stretched = Template.bind({});
Stretched.args = {
  columns: 3,
  items: ['Item 1', 'Item 2', 'Item 3'],
  isStretched: true,
};

export const Aligned = Template.bind({});
Aligned.args = {
  columns: 3,
  items: ['Item 1', 'Item 2', 'Item 3'],
  isAligned: true,
};