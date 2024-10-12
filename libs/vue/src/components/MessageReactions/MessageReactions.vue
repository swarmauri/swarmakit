<template>
  <div class="reactions-container" :aria-hidden="!isAvailable">
    <ul v-if="isAvailable" class="reactions-list" role="list">
      <li v-for="reaction in reactions" :key="reaction" class="reaction-item" :class="{ hovered: isHovered, clicked: isClicked }" @mouseenter="hovered" @mouseleave="unhovered" @click="clicked">
        {{ reaction }}
      </li>
    </ul>
    <span v-else class="unavailable-message">Reactions Unavailable</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'MessageReactions',
  props: {
    state: {
      type: String as PropType<'available' | 'unavailable' | 'hovered' | 'clicked'>,
      default: 'unavailable',
      validator: (value: string) => ['available', 'unavailable', 'hovered', 'clicked'].includes(value),
    },
  },
  setup(props) {
    const reactions = ['👍', '❤️', '😂', '😮', '😢', '👏'];
    const isAvailable = computed(() => props.state !== 'unavailable');
    const isHovered = ref(false);
    const isClicked = ref(false);

    const hovered = () => {
      if (props.state === 'hovered') {
        isHovered.value = true;
      }
    };

    const unhovered = () => {
      if (props.state === 'hovered') {
        isHovered.value = false;
      }
    };

    const clicked = () => {
      if (props.state === 'clicked') {
        isClicked.value = true;
        setTimeout(() => isClicked.value = false, 200);
      }
    };

    return { reactions, isAvailable, isHovered, isClicked, hovered, unhovered, clicked };
  },
});
</script>

<style lang="css">
@import './MessageReactions.css';
</style>