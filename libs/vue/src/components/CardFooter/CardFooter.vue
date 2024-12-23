
<template>
  <footer class="card-footer" :style="{ justifyContent: alignment }">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardFooter',
  props: {
    alignment: {
      type: String as () => 'flex-start' | 'center' | 'flex-end',
      default: 'flex-start',
    },
  },
});
</script>




<style scoped lang="css">
@import './CardFooter.css';
</style>
