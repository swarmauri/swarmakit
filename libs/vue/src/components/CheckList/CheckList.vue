<template>
  <div class="checklist">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="checklist-item"
      :class="{ disabled: item.disabled }"
    >
      <input
        type="checkbox"
        :checked="item.checked"
        :indeterminate="item.indeterminate"
        :disabled="item.disabled"
        @change="toggleCheck(index)"
        :id="'checklist-item-' + index"
        aria-checked="item.indeterminate ? 'mixed' : item.checked"
        :aria-disabled="item.disabled"
      />
      <label :for="'checklist-item-' + index">{{ item.label }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface CheckListItem {
  label: string;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
}

export default defineComponent({
  name: 'CheckList',
  props: {
    items: {
      type: Array as () => CheckListItem[],
      required: true,
    },
  },
  methods: {
    toggleCheck(index: number) {
      if (!this.items[index].disabled) {
        this.items[index].checked = !this.items[index].checked;
        this.items[index].indeterminate = false;
        this.$emit('item-checked', index, this.items[index].checked);
      }
    },
  },
});
</script>

<style lang="css">
@import './CheckList.css';
</style>