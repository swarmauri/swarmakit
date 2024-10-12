<template>
  <div class="options-menu" :aria-hidden="!isVisible">
    <button @click="toggleMenu" class="menu-button" aria-haspopup="true" aria-expanded="isVisible">
      •••
    </button>
    <ul v-if="isVisible" class="menu-list" role="menu">
      <li v-for="option in options" :key="option" class="menu-item" @click="optionClicked(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'MessageOptionsMenu',
  props: {
    state: {
      type: String as PropType<'visible' | 'hidden' | 'clicked'>,
      default: 'hidden',
      validator: (value: string) => ['visible', 'hidden', 'clicked'].includes(value),
    },
  },
  setup(props) {
    const options = ['Edit', 'Delete', 'Reply', 'Forward'];
    const isVisible = computed(() => props.state === 'visible');
    const isClicked = ref(false);

    const toggleMenu = () => {
      if (props.state !== 'clicked') {
        isClicked.value = !isClicked.value;
      }
    };

    const optionClicked = (option: string) => {
      if (props.state === 'clicked') {
        isClicked.value = true;
        setTimeout(() => isClicked.value = false, 200);
        console.log(`${option} option clicked`);
      }
    };

    return { options, isVisible, isClicked, toggleMenu, optionClicked };
  },
});
</script>

<style lang="css">
@import './MessageOptionsMenu.css';
</style>