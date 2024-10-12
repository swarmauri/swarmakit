<template>
  <div class="rich-text-editor-container">
    <div 
      class="toolbar"
      v-if="!readOnly"
      role="toolbar"
      aria-label="Rich Text Editor Toolbar"
    >
      <button @click="execCommand('bold')" aria-label="Bold">B</button>
      <button @click="execCommand('italic')" aria-label="Italic">I</button>
      <button @click="execCommand('underline')" aria-label="Underline">U</button>
    </div>
    <div
      class="editor"
      contenteditable="true"
      :class="{ 'read-only': readOnly }"
      ref="editor"
      @input="updateContent"
      :aria-label="ariaLabel"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  name: 'RichTextEditor',
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: '',
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: 'Rich Text Editor',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const editor = ref<HTMLElement | null>(null);

    const execCommand = (command: string) => {
      document.execCommand(command, false);
    };

    const updateContent = () => {
      if (editor.value) {
        emit('update:modelValue', editor.value.innerHTML);
      }
    };

    return {
      editor,
      execCommand,
      updateContent,
    };
  },
});
</script>

<style lang="css">
@import './RichTextEditor.css';
</style>