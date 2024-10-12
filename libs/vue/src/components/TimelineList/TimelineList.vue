<template>
  <ul class="timeline-list">
    <li
      v-for="(item, index) in items"
      :key="item.id"
      class="timeline-item"
      :class="{
        active: index === activeIndex,
        completed: item.completed,
        inactive: !item.active,
      }"
      @mouseover="onHover(index)"
    >
      <div class="timeline-content">
        <span class="timeline-title">{{ item.title }}</span>
        <span class="timeline-description">{{ item.description }}</span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
  active?: boolean;
}

export default defineComponent({
  name: 'TimelineList',
  props: {
    items: {
      type: Array as () => TimelineItem[],
      required: true,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const onHover = (index: number) => {
      // handle hover effect
    };

    return { onHover };
  },
});
</script>

<style lang="css">
@import './TimelineList.css';
</style>