<template>
  <div class="embedded-media-iframe" :class="stateClass" role="region" aria-label="Embedded Media">
    <iframe
      :src="src"
      frameborder="0"
      allowfullscreen
      aria-busy="true"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'EmbeddedMediaIframe',
  props: {
    src: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      default: 'Default',
    },
  },
  setup(props) {
    const stateClass = computed(() => {
      switch (props.state) {
        case 'Fullscreen':
          return 'fullscreen';
        case 'Buffering':
          return 'buffering';
        default:
          return '';
      }
    });

    return { stateClass };
  },
});
</script>

<style lang="css">
@import './EmbeddedMediaIframe.css';
</style>