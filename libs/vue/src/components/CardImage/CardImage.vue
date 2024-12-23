
<template>
  <div class="card-image" :style="{ backgroundImage: `url(${src})` }" @mouseover="hover = true" @mouseleave="hover = false">
    <div v-if="caption" class="caption">{{ caption }}</div>
    <div v-if="hover && overlay" class="overlay">{{ overlay }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CardImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    },
    overlay: {
      type: String,
      default: '',
    },
  },
  setup() {
    const hover = ref(false);
    return { hover };
  },
});
</script>




<style scoped lang="css">
@import './CardImage.css';
</style>
