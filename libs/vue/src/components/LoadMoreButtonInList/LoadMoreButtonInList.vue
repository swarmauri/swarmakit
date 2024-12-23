
<template>
  <div class="load-more-button-in-list">
    <ul class="item-list" role="list" aria-label="Items">
      <li v-for="(item, index) in displayedItems" :key="index" class="list-item">
        {{ item }}
      </li>
    </ul>
    <button
      v-if="!endOfList"
      @click="loadMore"
      :disabled="isLoading"
      class="load-more-button"
      :aria-busy="isLoading"
    >
      <span v-if="isLoading">Loading...</span>
      <span v-else>Load More</span>
    </button>
    <div v-else class="end-of-list-message">End of List</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoadMoreButtonInList',
  props: {
    items: {
      type: Array as () => string[],
      required: true,
    },
    batchSize: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    const displayedItems = ref<string[]>([]);
    const isLoading = ref(false);
    const endOfList = ref(false);

    const loadMore = () => {
      if (isLoading.value || endOfList.value) return;
      isLoading.value = true;
      setTimeout(() => {
        const nextBatch = props.items.slice(displayedItems.value.length, displayedItems.value.length + props.batchSize);
        if (nextBatch.length > 0) {
          displayedItems.value.push(...nextBatch);
        }
        if (displayedItems.value.length >= props.items.length) {
          endOfList.value = true;
        }
        isLoading.value = false;
      }, 1000);
    };

    loadMore();

    return { displayedItems, isLoading, endOfList, loadMore };
  },
});
</script>




<style scoped lang="css">
@import './LoadMoreButtonInList.css';
</style>
