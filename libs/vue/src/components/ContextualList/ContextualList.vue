<template>
  <div class="contextual-list">
    <button
      class="trigger-button"
      @click="toggleList"
      :aria-expanded="isListVisible"
      aria-controls="contextual-list"
    >
      {{ buttonText }}
    </button>
    <ul
      v-show="isListVisible"
      class="list"
      id="contextual-list"
      role="list"
      aria-hidden="!isListVisible"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="list-item"
        role="listitem"
      >
        <button @click="onActionTriggered(item)">{{ item }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContextualList',
  props: {
    buttonText: {
      type: String,
      default: 'Open List',
    },
    items: {
      type: Array as () => string[],
      default: () => [],
    },
  },
  setup() {
    const isListVisible = ref(false);

    const toggleList = () => {
      isListVisible.value = !isListVisible.value;
    };

    const onActionTriggered = (item: string) => {
      console.log(`Action triggered on: ${item}`);
    };

    return {
      isListVisible,
      toggleList,
      onActionTriggered,
    };
  },
});
</script>

<style lang="css">
@import './ContextualList.css';
</style>