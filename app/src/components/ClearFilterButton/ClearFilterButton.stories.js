import React from 'react';
import ClearFilterButton from './ClearFilterButton';

export default {
  title: 'Components/ClearFilterButton',
  component: ClearFilterButton,
};

const Template = (args) => <ClearFilterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Filters cleared!'),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  onClick: () => alert('Filters cleared!'),
  disabled: true,
};