<template>
  <div class="actionable-list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="list-item"
      :class="{ disabled: item.disabled, loading: item.loading }"
      @click="!item.disabled && !item.loading && triggerAction(index)"
    >
      <span>{{ item.label }}</span>
      <button
        class="action-button"
        :disabled="item.disabled || item.loading"
        @click.stop="!item.disabled && !item.loading && triggerAction(index)"
      >
        <span v-if="item.loading">Loading...</span>
        <span v-else>Action</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ListItem {
  label: string;
  disabled: boolean;
  loading: boolean;
}

export default defineComponent({
  name: 'ActionableList',
  props: {
    items: {
      type: Array as () => ListItem[],
      required: true,
    },
  },
  methods: {
    triggerAction(index: number) {
      this.$emit('action-triggered', index);
    },
  },
});
</script>

<style lang="css">
@import './ActionableList.css';
</style>