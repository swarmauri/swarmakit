import React from 'react';
import { Meta, Story } from '@storybook/react';
import ColumnVisibilityToggle, { ColumnVisibilityToggleProps } from './ColumnVisibilityToggle';

export default {
  title: 'component/Data/ColumnVisibilityToggle',
  component: ColumnVisibilityToggle,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ColumnVisibilityToggleProps> = (args) => <ColumnVisibilityToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'location', label: 'Location' },
  ],
  onToggle: (id, visible) => console.log(`${id} visibility: ${visible}`),
};

export const ColumnHidden = Template.bind({});
ColumnHidden.args = {
  ...Default.args,
  onToggle: (id, visible) => {
    console.log(`${id} visibility: ${visible}`);
    if (id === 'age') {
      visible = false;
    }
  },
};

export const ColumnVisible = Template.bind({});
ColumnVisible.args = {
  ...Default.args,
};