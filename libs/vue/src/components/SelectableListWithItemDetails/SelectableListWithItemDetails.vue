<template>
  <div class="selectable-list" role="region" aria-label="Selectable List with Item Details">
    <ul class="list" role="list">
      <li
        v-for="item in items"
        :key="item.id"
        class="list-item"
        :class="{ selected: selectedItem === item.id }"
        @click="toggleSelect(item.id)"
        role="listitem"
        :aria-expanded="openedDetails === item.id"
      >
        <div class="item-header">{{ item.name }}</div>
        <button class="details-button" @click.stop="toggleDetails(item.id)">
          {{ openedDetails === item.id ? 'Close Details' : 'Open Details' }}
        </button>
        <div v-if="openedDetails === item.id" class="item-details">
          {{ item.details }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ListItem {
  id: number;
  name: string;
  details: string;
}

export default defineComponent({
  name: 'SelectableListWithItemDetails',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
  },
  setup() {
    const selectedItem = ref<number | null>(null);
    const openedDetails = ref<number | null>(null);

    const toggleSelect = (itemId: number) => {
      selectedItem.value = selectedItem.value === itemId ? null : itemId;
    };

    const toggleDetails = (itemId: number) => {
      openedDetails.value = openedDetails.value === itemId ? null : itemId;
    };

    return { selectedItem, openedDetails, toggleSelect, toggleDetails };
  },
});
</script>

<style lang="css">
@import './SelectableListWithItemDetails.css';
</style>