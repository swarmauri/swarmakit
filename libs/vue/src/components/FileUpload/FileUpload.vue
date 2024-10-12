<template>
  <div
    class="file-upload-container"
    :class="{ 'drag-active': dragActive }"
    @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave"
    @drop.prevent="handleDrop"
  >
    <input
      type="file"
      :multiple="multiple"
      @change="handleFileChange"
      ref="fileInput"
    />
    <div v-if="progress > 0" class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
    <button type="button" @click="triggerFileInput">Upload Files</button>
    <div v-if="files.length" class="file-list">
      <ul>
        <li v-for="(file, index) in files" :key="index">{{ file.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'FileUpload',
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const files = ref<File[]>([]);
    const fileInput = ref<HTMLInputElement | null>(null);
    const dragActive = ref(false);
    const progress = ref(0);

    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const selectedFiles = target.files ? Array.from(target.files) : [];
      files.value = selectedFiles;
      simulateProgress();
    };

    const handleDragOver = () => {
      dragActive.value = true;
    };

    const handleDragLeave = () => {
      dragActive.value = false;
    };

    const handleDrop = (event: DragEvent) => {
      const droppedFiles = event.dataTransfer?.files
        ? Array.from(event.dataTransfer.files)
        : [];
      files.value = droppedFiles;
      dragActive.value = false;
      simulateProgress();
    };

    const simulateProgress = () => {
      progress.value = 0;
      const interval = setInterval(() => {
        progress.value += 10;
        if (progress.value >= 100) {
          clearInterval(interval);
        }
      }, 100);
    };

    const triggerFileInput = () => {
      fileInput.value?.click();
    };

    return {
      files,
      fileInput,
      dragActive,
      progress,
      handleFileChange,
      handleDragOver,
      handleDragLeave,
      handleDrop,
      triggerFileInput,
    };
  },
});
</script>

<style lang="css">
@import './FileUpload.css';
</style>