// ChartComponents.stories.js
import React from 'react';
import ChartComponents from './ChartComponents';

export default {
  title: 'Components/ChartComponents',
  component: ChartComponents,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    data: { control: 'object' },
    options: { control: 'object' },
  },
};

const Template = (args) => <ChartComponents {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

export const WithMultipleDatasets = Template.bind({});
WithMultipleDatasets.args = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Revenue',
        data: [45, 69, 70, 91, 66],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};