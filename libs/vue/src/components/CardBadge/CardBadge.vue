
<template>
  <span :class="['card-badge', statusClass]" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    {{ content }}
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  name: 'CardBadge',
  props: {
    content: {
      type: [String, Number],
      required: true,
    },
    status: {
      type: String as () => 'default' | 'active' | 'inactive',
      default: 'default',
    },
  },
  setup(props) {
    const isHovered = ref(false);
    const statusClass = computed(() => {
      return {
        default: 'badge-default',
        active: 'badge-active',
        inactive: 'badge-inactive',
        hovered: isHovered.value ? 'badge-hovered' : '',
      }[props.status];
    });

    return { statusClass, isHovered };
  },
});
</script>




<style scoped lang="css">
@import './CardBadge.css';
</style>
