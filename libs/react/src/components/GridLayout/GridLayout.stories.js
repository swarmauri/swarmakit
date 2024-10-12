import React from 'react';
import GridLayout from './GridLayout';

export default {
  title: 'Components/GridLayout',
  component: GridLayout,
  argTypes: {
    columns: { control: 'number' },
    gap: { control: 'text' },
  },
};

const Template = (args) => (
  <GridLayout {...args}>
    <div style={{ backgroundColor: 'lightcoral', padding: '20px' }}>Item 1</div>
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>Item 2</div>
    <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>Item 3</div>
    <div style={{ backgroundColor: 'lightpink', padding: '20px' }}>Item 4</div>
    <div style={{ backgroundColor: 'lightyellow', padding: '20px' }}>Item 5</div>
  </GridLayout>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: '10px',
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  columns: 2,
  gap: '20px',
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  columns: 4,
  gap: '5px',
};