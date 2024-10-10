import React from 'react';
import FloatingActionButtonFab from './FloatingActionButtonFab';
import { FaPlus } from 'react-icons/fa';

export default {
  title: 'Components/FloatingActionButtonFab',
  component: FloatingActionButtonFab,
};

const Template = (args) => <FloatingActionButtonFab {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaPlus />,
  onClick: () => alert('FAB Clicked!'),
  disabled: false,
  label: 'Add Item',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <FaPlus />,
  onClick: () => alert('FAB Clicked!'),
  disabled: true,
  label: 'Disabled Add Item',
};