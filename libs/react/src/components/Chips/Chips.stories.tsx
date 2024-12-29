import React from 'react';
import { Meta, Story } from '@storybook/react';
import Chip, { ChipProps } from './Chips';

export default {
  title: 'component/Miscellaneous/Chips',
  component: Chip,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Basic Chip',
  selectable: false,
  removable: false,
};

export const Selectable = Template.bind({});
Selectable.args = {
  ...Default.args,
  selectable: true,
};

export const Removable = Template.bind({});
Removable.args = {
  ...Default.args,
  removable: true,
  onRemove: () => alert('Chip removed'),
};

export const Grouped: Story = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Chip label="Chip 1" />
    <Chip label="Chip 2" selectable />
    <Chip label="Chip 3" removable onRemove={() => alert('Chip 3 removed')} />
  </div>
);