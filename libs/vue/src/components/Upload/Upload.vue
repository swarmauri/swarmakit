
<template>
  <div class="upload" :class="status">
    <span>{{ message }}</span>
    <progress v-if="progressVisible" :value="progress" max="100"></progress>
    <button v-if="showCancelButton" @click="cancelUpload" class="cancel-btn" aria-label="Cancel Upload">
      Cancel
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Upload',
  props: {
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String as () => 'uploading' | 'downloading' | 'completed' | 'paused' | 'failed',
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const progressVisible = ref(props.status === 'uploading' || props.status === 'downloading');
    const showCancelButton = ref(props.status === 'uploading');

    const cancelUpload = () => {
      console.log('Upload cancelled.');
    };

    return { progressVisible, showCancelButton, cancelUpload };
  },
});
</script>




<style scoped lang="css">
@import './Upload.css';
</style>
