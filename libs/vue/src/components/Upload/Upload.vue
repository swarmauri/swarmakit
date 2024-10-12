<template>
  <div class="upload" :class="status">
    <div class="status-indicator" role="status" aria-live="polite">
      <p>{{ statusMessage }}</p>
    </div>
    <button @click="togglePause" v-if="status === 'uploading' || status === 'paused'">
      {{ status === 'paused' ? 'Resume' : 'Pause' }}
    </button>
    <button @click="retry" v-if="status === 'failed'">Retry</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from 'vue';

export default defineComponent({
  name: 'Upload',
  props: {
    status: {
      type: String as PropType<'uploading' | 'downloading' | 'completed' | 'paused' | 'failed'>,
      required: true,
    },
  },
  setup(props) {
    const statusMessage = computed(() => {
      switch (props.status) {
        case 'uploading':
          return 'Uploading...';
        case 'downloading':
          return 'Downloading...';
        case 'completed':
          return 'Completed';
        case 'paused':
          return 'Paused';
        case 'failed':
          return 'Failed';
        default:
          return '';
      }
    });

    const togglePause = () => {
      if (props.status === 'uploading') {
        props.status = 'paused';
      } else if (props.status === 'paused') {
        props.status = 'uploading';
      }
    };

    const retry = () => {
      if (props.status === 'failed') {
        props.status = 'uploading';
      }
    };

    return { statusMessage, togglePause, retry };
  },
});
</script>

<style lang="css">
@import './Upload.css';
</style>