<template>
  <div class="file-input-container">
    <input
      type="file"
      :disabled="disabled"
      @change="handleFileChange"
      :aria-disabled="disabled"
    />
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-if="previewUrl" class="preview">
      <img :src="previewUrl" alt="File preview" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'FileInputWithPreview',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
  },
  emits: ['fileUploaded'],
  setup(_, { emit }) {
    const previewUrl = ref<string | null>(null);

    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files ? target.files[0] : null;
      if (file && !_.disabled) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewUrl.value = e.target?.result as string;
          emit('fileUploaded', file);
        };
        reader.readAsDataURL(file);
      }
    };

    return {
      previewUrl,
      handleFileChange,
    };
  },
});
</script>

<style lang="css">
@import './FileInputWithPreview.css';
</style>