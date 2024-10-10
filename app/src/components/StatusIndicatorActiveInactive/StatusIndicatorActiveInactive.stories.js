import React from 'react';
import StatusIndicatorActiveInactive from './StatusIndicatorActiveInactive';

export default {
  title: 'Indicators/StatusIndicatorActiveInactive',
  component: StatusIndicatorActiveInactive,
};

const Template = (args) => <StatusIndicatorActiveInactive {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: true,
  label: 'Active',
};

export const Inactive = Template.bind({});
Inactive.args = {
  isActive: false,
  label: 'Inactive',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  isActive: true,
  label: 'Online',
};