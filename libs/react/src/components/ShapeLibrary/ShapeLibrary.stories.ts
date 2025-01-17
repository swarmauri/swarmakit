import React from 'react';
import { Meta, Story } from '@storybook/react';
import ShapeLibrary, { ShapeLibraryProps } from './ShapeLibrary';

export default {
  title: 'component/Drawing/ShapeLibrary',
  component: ShapeLibrary,
  tags: ['autodocs'],
} as Meta;

const shapes = [
  { id: '1', name: 'Circle', svgPath: 'M50,10a40,40 0 1,0 0,80a40,40 0 1,0 0,-80' },
  { id: '2', name: 'Square', svgPath: 'M10 10 H 90 V 90 H 10 L 10 10' },
  { id: '3', name: 'Triangle', svgPath: 'M50 10 L90 90 H10 Z' }
];

const Template: Story<ShapeLibraryProps> = (args) => <ShapeLibrary {...args} />;

export const Default = Template.bind({});
Default.args = {
  shapes,
  onShapeInsert: (shape) => console.log(`Shape inserted: ${shape.name}`),
  onShapeSelect: (shape) => console.log(`Shape selected: ${shape.name}`),
};

export const ShapeSelected = Template.bind({});
ShapeSelected.args = {
  ...Default.args,
  onShapeSelect: (shape) => console.log(`Shape selected: ${shape.name}`),
};

export const ShapeInserted = Template.bind({});
ShapeInserted.args = {
  ...Default.args,
  onShapeInsert: (shape) => console.log(`Shape inserted: ${shape.name}`),
};