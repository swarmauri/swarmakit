

<template>
  <div class="brush-tool" :class="{ active: isActive }">
    <button @click="toggleActive" :aria-pressed="isActive">Brush Tool</button>
    <div v-if="isActive" class="brush-settings">
      <label for="brushSize">Brush Size</label>
      <input id="brushSize" type="range" v-model="brushSize" min="1" max="20" aria-valuemin="1" aria-valuemax="20" aria-valuenow="brushSize">
      
      <label for="brushColor">Brush Color</label>
      <input id="brushColor" type="color" v-model="brushColor">
      
      <label for="brushOpacity">Brush Opacity</label>
      <input id="brushOpacity" type="range" v-model="brushOpacity" min="0.1" max="1" step="0.1" aria-valuemin="0.1" aria-valuemax="1" aria-valuenow="brushOpacity">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BrushTool',
  setup() {
    const isActive = ref(false);
    const brushSize = ref(5);
    const brushColor = ref('#000000');
    const brushOpacity = ref(1);

    const toggleActive = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      brushSize,
      brushColor,
      brushOpacity,
      toggleActive,
    };
  },
});
</script>




<style scoped lang="css">
@import './BrushTool.css';
</style>
