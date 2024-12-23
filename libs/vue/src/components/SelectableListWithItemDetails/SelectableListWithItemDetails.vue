
<template>
  <div class="selectable-list">
    <ul class="selectable-list-items">
      <li
        v-for="item in items"
        :key="item.id"
        :class="['selectable-list-item', { selected: item.id === selectedItem, disabled: disabled }]"
        @click="toggleSelection(item.id)"
      >
        <div class="item-content">
          {{ item.label }}
          <button @click.stop="toggleDetails(item.id)" class="details-button" :aria-expanded="item.id === openDetails ? 'true' : 'false'">
            {{ item.id === openDetails ? 'Hide Details' : 'Show Details' }}
          </button>
        </div>
        <div v-if="item.id === openDetails" class="item-details">
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
  label: string;
  details: string;
}

export default defineComponent({
  name: 'SelectableListWithItemDetails',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const selectedItem = ref<number | null>(null);
    const openDetails = ref<number | null>(null);

    const toggleSelection = (id: number) => {
      if (!props.disabled) {
        selectedItem.value = selectedItem.value === id ? null : id;
      }
    };

    const toggleDetails = (id: number) => {
      openDetails.value = openDetails.value === id ? null : id;
    };

    return { selectedItem, openDetails, toggleSelection, toggleDetails };
  },
});
</script>




<style scoped lang="css">
@import './SelectableListWithItemDetails.css';
</style>
