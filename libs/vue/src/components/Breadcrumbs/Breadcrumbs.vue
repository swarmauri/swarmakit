<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li v-for="(item, index) in breadcrumbItems" :key="item.label" :class="{ active: index === activeIndex }">
        <span @click="navigateTo(item)">
          {{ index === activeIndex ? item.label : truncate(item.label) }}
        </span>
        <span v-if="index < breadcrumbItems.length - 1" class="separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface BreadcrumbItem {
  label: string;
}

export default defineComponent({
  name: 'Breadcrumbs',
  props: {
    breadcrumbItems: {
      type: Array as PropType<BreadcrumbItem[]>,
      required: true,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    truncate(label: string) {
      return label.length > 10 ? label.slice(0, 7) + '...' : label;
    },
    navigateTo(item: BreadcrumbItem) {
      this.$emit('navigate', item);
    },
  },
});
</script>

<style lang="css">
@import './Breadcrumbs.css';
</style>