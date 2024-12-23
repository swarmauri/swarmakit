import React from 'react';
import { EditorState, ContentState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import 'draft-js/dist/Draft.css';

interface RichTextEditorProps {
  readOnly?: boolean;
  initialContent?: string;
  onContentChange?: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ readOnly = false, initialContent = '', onContentChange }) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(ContentState.createFromText(initialContent))
  );

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    if (onContentChange) {
      onContentChange(state.getCurrentContent().getPlainText());
    }
  };

  return (
    <div className={`rich-text-editor ${readOnly ? 'read-only' : ''}`}>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        readOnly={readOnly}
        aria-readonly={readOnly}
      />
    </div>
  );
};

export default RichTextEditor;