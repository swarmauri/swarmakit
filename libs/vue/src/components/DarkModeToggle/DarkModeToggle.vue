<template>
  <button
    class="dark-mode-toggle"
    :aria-pressed="isDarkMode"
    @click="toggleDarkMode"
    aria-label="Toggle dark mode"
  >
    <span v-if="isDarkMode" class="icon">🌙</span>
    <span v-else class="icon">☀️</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'DarkModeToggle',
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.body.classList.toggle('dark-mode', isDarkMode.value);
    };

    watch(isDarkMode, (newValue) => {
      localStorage.setItem('darkMode', newValue.toString());
    });

    if (localStorage.getItem('darkMode') === 'true') {
      isDarkMode.value = true;
      document.body.classList.add('dark-mode');
    }

    return { isDarkMode, toggleDarkMode };
  },
});
</script>

<style lang="css">
@import './DarkModeToggle.css';
</style>