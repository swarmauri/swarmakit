
<template>
  <section class="card-body" :aria-expanded="expanded" :aria-label="ariaLabel">
    <div class="card-body__content" :class="{ 'card-body__content--collapsed': !expanded }">
      <slot></slot>
    </div>
    <button v-if="collapsible" class="card-body__toggle" @click="toggleExpand" :aria-controls="'card-body-content'">
      {{ expanded ? 'Collapse' : 'Expand' }}
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CardBody',
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
    collapsible: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: 'Card Body',
    },
  },
  setup(props) {
    const isExpanded = ref(props.expanded);

    const toggleExpand = () => {
      isExpanded.value = !isExpanded.value;
    };

    return { isExpanded, toggleExpand };
  },
});
</script>




<style scoped lang="css">
@import './CardBody.css';
</style>
