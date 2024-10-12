<template>
  <nav class="pagination" role="navigation" aria-label="Pagination">
    <ul>
      <li
        v-for="page in pages"
        :key="page"
        :class="['page-item', { active: activePage === page }]"
        @click="setActivePage(page)"
        @mouseover="hoveredPage = page"
        @mouseleave="hoveredPage = null"
        :aria-current="activePage === page ? 'page' : null"
        :tabindex="0"
        role="button"
      >
        {{ page }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const activePage = ref<number>(1);
    const hoveredPage = ref<number | null>(null);

    const setActivePage = (page: number) => {
      activePage.value = page;
    };

    const pages = Array.from({ length: props.totalPages }, (_, i) => i + 1);

    return { activePage, setActivePage, hoveredPage, pages };
  },
});
</script>

<style lang="css">
@import './Pagination.css';
</style>