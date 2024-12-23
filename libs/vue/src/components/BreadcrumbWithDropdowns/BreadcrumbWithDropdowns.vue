
<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <span 
          v-if="!crumb.dropdown" 
          :class="{ 'breadcrumb-link': crumb.link }"
          @click="crumb.link ? navigateTo(crumb.link) : null"
          :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
        >
          {{ crumb.name }}
        </span>
        <div v-else class="dropdown">
          <button 
            @click="toggleDropdown(index)" 
            :aria-expanded="isDropdownOpen(index)"
            aria-haspopup="true"
          >
            {{ crumb.name }}
          </button>
          <ul v-if="isDropdownOpen(index)" class="dropdown-menu">
            <li 
              v-for="(item, idx) in crumb.dropdown" 
              :key="idx"
              @click="navigateTo(item.link)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Breadcrumb {
  name: string;
  link?: string;
  dropdown?: Array<{ name: string; link: string }>;
}

export default defineComponent({
  name: 'BreadcrumbWithDropdowns',
  props: {
    breadcrumbs: {
      type: Array as () => Breadcrumb[],
      required: true,
    },
  },
  data() {
    return {
      openDropdownIndex: null as number | null,
    };
  },
  methods: {
    navigateTo(link: string) {
      window.location.href = link;
    },
    toggleDropdown(index: number) {
      this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    },
    isDropdownOpen(index: number): boolean {
      return this.openDropdownIndex === index;
    },
  },
});
</script>




<style scoped lang="css">
@import './BreadcrumbWithDropdowns.css';
</style>
