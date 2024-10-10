// QRCodeScanner.stories.js
import React from 'react';
import QRCodeScanner from './QRCodeScanner';

export default {
  title: 'Components/QRCodeScanner',
  component: QRCodeScanner,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <QRCodeScanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  onScan: (qrCodeResult) => alert(`QR Code Scanned: ${qrCodeResult}`),
  onError: (error) => alert(`Error: ${error}`),
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  onScan: (qrCodeResult) => alert(`QR Code Scanned: ${qrCodeResult}`),
  onError: (error) => alert(`Error: ${error}`),
};