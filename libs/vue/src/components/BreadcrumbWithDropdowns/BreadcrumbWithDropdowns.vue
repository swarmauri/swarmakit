<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(item, index) in breadcrumbItems" :key="item.label" :class="{ dropdown: item.children && item.children.length > 0 }">
        <span v-if="item.children && item.children.length > 0" class="dropdown-toggle" @click="toggleDropdown(index)">
          {{ item.label }}
          <ul v-if="openDropdownIndex === index" class="dropdown-menu">
            <li v-for="child in item.children" :key="child.label" @click="selectItem(child)">{{ child.label }}</li>
          </ul>
        </span>
        <span v-else>
          {{ item.label }}
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
  children?: BreadcrumbItem[];
}

export default defineComponent({
  name: 'BreadcrumbWithDropdowns',
  props: {
    breadcrumbItems: {
      type: Array as PropType<BreadcrumbItem[]>,
      required: true,
    },
  },
  data() {
    return {
      openDropdownIndex: null as number | null,
    };
  },
  methods: {
    toggleDropdown(index: number) {
      this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    },
    selectItem(item: BreadcrumbItem) {
      this.$emit('select', item);
      this.openDropdownIndex = null;
    },
  },
});
</script>

<style lang="css">
@import './BreadcrumbWithDropdowns.css';
</style>