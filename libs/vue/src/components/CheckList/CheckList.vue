
<template>
  <div class="checklist" role="group">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="checklist-item"
      :class="{ checked: item.checked, indeterminate: item.indeterminate, disabled: item.disabled }"
    >
      <input
        type="checkbox"
        :id="'checkbox-' + index"
        :checked="item.checked"
        :indeterminate.prop="item.indeterminate"
        :disabled="item.disabled"
        @change="toggleCheck(index)"
      />
      <label :for="'checkbox-' + index">{{ item.label }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface CheckListItem {
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
}

export default defineComponent({
  name: 'CheckList',
  props: {
    items: {
      type: Array as () => CheckListItem[],
      required: true,
    },
  },
  setup(props) {
    const toggleCheck = (index: number) => {
      const item = props.items[index];
      if (!item.disabled) {
        item.checked = !item.checked;
        if (item.indeterminate) item.indeterminate = false;
      }
    };
    return { toggleCheck };
  },
});
</script>




<style scoped lang="css">
@import './CheckList.css';
</style>
