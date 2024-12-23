

<template>
  <div class="fill-tool">
    <button :disabled="isDisabled" @click="toggleActive" :class="{ active: isActive }" aria-label="Fill Tool">
      Fill
    </button>
    <div v-if="isActive" class="fill-options">
      <label for="tolerance">Tolerance:</label>
      <input id="tolerance" type="range" min="0" max="100" v-model="tolerance" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FillTool',
  setup() {
    const isActive = ref(false);
    const isDisabled = ref(false);
    const tolerance = ref(50);

    const toggleActive = () => {
      if (!isDisabled.value) {
        isActive.value = !isActive.value;
      }
    };

    return {
      isActive,
      isDisabled,
      tolerance,
      toggleActive,
    };
  },
});
</script>




<style scoped lang="css">
@import './FillTool.css';
</style>
