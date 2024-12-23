
<template>
  <ul class="timeline-list" role="list">
    <li
      v-for="(item, index) in items"
      :key="item.id"
      :class="{
        active: index === activeIndex,
        completed: item.completed,
        inactive: !item.completed && index !== activeIndex
      }"
      role="listitem"
    >
      <div class="timeline-content">
        <span class="timeline-label">{{ item.label }}</span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface TimelineItem {
  id: number;
  label: string;
  completed?: boolean;
}

export default defineComponent({
  name: 'TimelineList',
  props: {
    items: {
      type: Array as PropType<TimelineItem[]>,
      required: true,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
});
</script>




<style scoped lang="css">
@import './TimelineList.css';
</style>
