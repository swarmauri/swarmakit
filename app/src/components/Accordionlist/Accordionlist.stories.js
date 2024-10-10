import React from 'react';
import AccordionList from './AccordionList';

export default {
  title: 'Lists/AccordionList',
  component: AccordionList,
};

const Template = (args) => <AccordionList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};
Expanded.decorators = [
  (Story) => {
    const Component = Story();
    Component.props.children.props.expandedIndex = 0;
    return Component;
  },
];

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { title: 'Hover over me', content: 'This content is revealed on hover.' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ],
};
Hover.parameters = {
  pseudo: { hover: true },
};