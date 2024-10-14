// MarkdownRenderer.stories.js
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

export default {
  title: 'Components/MarkdownRenderer',
  component: MarkdownRenderer,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <MarkdownRenderer {...args} />;

export const Default = Template.bind({});
Default.args = {
  markdownText: '# Hello World\nThis is a **markdown** text example.',
};

export const ComplexMarkdown = Template.bind({});
ComplexMarkdown.args = {
  markdownText: `
# Sample Document

## Subheading

- Item 1
- Item 2

**Bold Text** and _italic text_.

> Blockquote

[Link](https://example.com)
  `,
};