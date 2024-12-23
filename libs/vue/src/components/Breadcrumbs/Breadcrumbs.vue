
<template>
  <nav aria-label="Breadcrumb" class="breadcrumbs">
    <ol class="breadcrumbs-list">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :class="['breadcrumbs-item', { active: index === activeIndex }]"
      >
        <span
          v-if="index === activeIndex"
          aria-current="page"
          class="breadcrumbs-link"
        >
          {{ crumb.name }}
        </span>
        <span
          v-else
          class="breadcrumbs-link"
          @click="navigateTo(crumb.link)"
        >
          {{ crumb.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Breadcrumb {
  name: string;
  link?: string;
}

export default defineComponent({
  name: 'Breadcrumbs',
  props: {
    breadcrumbs: {
      type: Array as () => Breadcrumb[],
      required: true,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    navigateTo(link?: string) {
      if (link) {
        window.location.href = link;
      }
    },
  },
});
</script>




<style scoped lang="css">
@import './Breadcrumbs.css';
</style>
