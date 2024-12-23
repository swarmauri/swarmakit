
<template>
  <nav class="pagination" aria-label="Pagination Navigation">
    <ul class="pagination-list">
      <li
        v-for="page in pages"
        :key="page"
        :class="['pagination-item', { active: page === currentPage }]"
        @click="changePage(page)"
        @mouseover="hoveredPage = page"
        @mouseleave="hoveredPage = null"
        :aria-current="page === currentPage ? 'page' : undefined"
      >
        {{ page }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const hoveredPage = ref<number | null>(null);

    const pages = computed(() => {
      return Array.from({ length: props.totalPages }, (_, i) => i + 1);
    });

    const changePage = (page: number) => {
      if (page !== props.currentPage) {
        emit('update:currentPage', page);
      }
    };

    return { pages, hoveredPage, changePage };
  },
});
</script>




<style scoped lang="css">
@import './Pagination.css';
</style>
