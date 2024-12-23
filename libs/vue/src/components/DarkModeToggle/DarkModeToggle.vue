
<template>
  <button
    class="dark-mode-toggle"
    :aria-pressed="isDarkMode"
    @click="toggleMode"
  >
    <span v-if="isDarkMode" aria-hidden="true">🌙</span>
    <span v-else aria-hidden="true">☀️</span>
    <span class="sr-only">{{ isDarkMode ? 'Switch to light mode' : 'Switch to dark mode' }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DarkModeToggle',
  setup() {
    const isDarkMode = ref(false);

    const toggleMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light');
    };

    return { isDarkMode, toggleMode };
  },
});
</script>




<style scoped lang="css">
@import './DarkModeToggle.css';
</style>
