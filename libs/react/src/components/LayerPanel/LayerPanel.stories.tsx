import React from 'react';
import { Meta, Story } from '@storybook/react';
import LayerPanel, { LayerPanelProps } from './LayerPanel';

export default {
  title: 'component/Drawing/LayerPanel',
  component: LayerPanel,
  tags: ['autodocs'],
} as Meta;

const Template: Story<LayerPanelProps> = (args) => <LayerPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLayerChange: (layers) => console.log(layers),
};

export const LayerAdded = Template.bind({});
LayerAdded.args = {
  ...Default.args,
};
LayerAdded.play = ({ canvasElement }) => {
  const addButton = canvasElement.querySelector('.add-layer');
  addButton?.click();
};

export const LayerRemoved = Template.bind({});
LayerRemoved.args = {
  ...Default.args,
};
LayerRemoved.play = ({ canvasElement }) => {
  const addButton = canvasElement.querySelector('.add-layer');
  addButton?.click();
  const deleteButton = canvasElement.querySelector('.layer-item .remove-layer');
  deleteButton?.click();
};

export const LayerRenamed = Template.bind({});
LayerRenamed.args = {
  ...Default.args,
};
LayerRenamed.play = ({ canvasElement }) => {
  const addButton = canvasElement.querySelector('.add-layer');
  addButton?.click();
  const input = canvasElement.querySelector('.layer-item input[type="text"]');
  if (input) {
    input.value = 'Renamed Layer';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
};