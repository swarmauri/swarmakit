import React from 'react';
import { Meta, Story } from '@storybook/react';
import Grid, { GridProps } from './Grid';

export default {
  title: 'component/UI Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'populated',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  items: [],
};

export const Populated = Template.bind({});
Populated.args = {
  state: 'populated',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const Responsive = Template.bind({});
Responsive.args = {
  state: 'responsive',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const Stretched = Template.bind({});
Stretched.args = {
  state: 'stretched',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const Aligned = Template.bind({});
Aligned.args = {
  state: 'aligned',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};