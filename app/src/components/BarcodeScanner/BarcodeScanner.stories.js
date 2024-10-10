// BarcodeScanner.stories.js
import React from 'react';
import BarcodeScanner from './BarcodeScanner';

export default {
  title: 'Components/BarcodeScanner',
  component: BarcodeScanner,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <BarcodeScanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  onScan: (barcode) => alert(`Barcode Scanned: ${barcode}`),
  onError: (error) => alert(`Error: ${error}`),
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  onScan: (barcode) => alert(`Barcode Scanned: ${barcode}`),
  onError: (error) => alert(`Error: ${error}`),
};