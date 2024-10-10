import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';

export default {
  title: 'Components/MarkdownEditor',
  component: MarkdownEditor,
};

const Template = (args) => {
  const [content, setContent] = useState(args.content);
  return (
    <MarkdownEditor
      {...args}
      content={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  content: 'Type **markdown** here!',
};