import React from 'react';
import AccordionCollapsibleSections from './AccordionCollapsibleSections';

export default {
  title: 'Components/AccordionCollapsibleSections',
  component: AccordionCollapsibleSections,
  argTypes: {
    sections: { control: 'object' },
  },
};

const Template = (args) => <AccordionCollapsibleSections {...args} />;

export const Default = Template.bind({});
Default.args = {
  sections: [
    { label: 'Section 1', content: 'Content for Section 1' },
    { label: 'Section 2', content: 'Content for Section 2' },
    { label: 'Section 3', content: 'Content for Section 3' },
  ],
};

export const SingleSection = Template.bind({});
SingleSection.args = {
  sections: [
    { label: 'Only Section', content: 'Content for the only section' },
  ],
};

export const DynamicContent = Template.bind({});
DynamicContent.args = {
  sections: [
    { label: 'Introduction', content: <div><h2>Introduction</h2><p>Some introductory content here.</p></div> },
    { label: 'Details', content: <div><h2>Details</h2><p>In-depth details about the topic.</p></div> },
    { label: 'Summary', content: <div><h2>Summary</h2><p>Summary of the main points.</p></div> },
  ],
};