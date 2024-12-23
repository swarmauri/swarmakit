

<template>
  <div class="eraser-tool" :class="{ active: isActive }">
    <button @click="toggleActive" :aria-pressed="isActive" class="eraser-button">Eraser Tool</button>
    <div v-if="isActive" class="eraser-settings">
      <label for="eraserSize">Eraser Size</label>
      <input id="eraserSize" type="range" v-model="eraserSize" min="1" max="50" aria-valuemin="1" aria-valuemax="50" aria-valuenow="eraserSize">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EraserTool',
  setup() {
    const isActive = ref(false);
    const eraserSize = ref(10);

    const toggleActive = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      eraserSize,
      toggleActive,
    };
  },
});
</script>




<style scoped lang="css">
@import './EraserTool.css';
</style>
