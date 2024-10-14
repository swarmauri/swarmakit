import React, { useState } from 'react';
import BottomNavigationBar from './BottomNavigationBar';

export default {
  title: 'Navigation/BottomNavigationBar',
  component: BottomNavigationBar,
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.selectedItem);
  return <BottomNavigationBar {...args} selectedItem={selected} onItemSelect={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  items: ['Home', 'Search', 'Profile'],
  selectedItem: 0,
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  items: ['Home', 'Search', 'Profile'],
  selectedItem: 1,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Home', 'Search', 'Profile'],
  selectedItem: 0,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Home', 'Search', 'Profile'],
  selectedItem: 0,
  disabled: true,
};