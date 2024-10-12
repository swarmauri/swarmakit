<template>
  <div class="list-container" role="list">
    <ul>
      <li v-for="(item, index) in visibleItems" :key="index" class="list-item" role="listitem">
        {{ item }}
      </li>
    </ul>
    <button
      v-if="!isEndOfList"
      @click="loadMore"
      :disabled="loading"
      class="load-more-button"
      aria-busy="loading"
    >
      <span v-if="loading">Loading...</span>
      <span v-else>Load More</span>
    </button>
    <p v-if="isEndOfList" class="end-of-list-message" role="status">
      You've reached the end of the list
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'LoadMoreButtonInList',
  props: {
    items: {
      type: Array as () => string[],
      default: () => [],
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    const currentPage = ref(1);
    const loading = ref(false);

    const visibleItems = computed(() => {
      return props.items.slice(0, currentPage.value * props.itemsPerPage);
    });

    const isEndOfList = computed(() => {
      return visibleItems.value.length >= props.items.length;
    });

    const loadMore = () => {
      if (!isEndOfList.value) {
        loading.value = true;
        setTimeout(() => {
          currentPage.value += 1;
          loading.value = false;
        }, 1000);
      }
    };

    return {
      visibleItems,
      loadMore,
      loading,
      isEndOfList,
    };
  },
});
</script>

<style lang="css">
@import './LoadMoreButtonInList.css';
</style>