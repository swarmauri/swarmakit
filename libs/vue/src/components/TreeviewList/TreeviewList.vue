
<template>
  <ul class="treeview-list" role="tree">
    <li
      v-for="node in nodes"
      :key="node.id"
      :class="{
        expanded: node.expanded,
        selected: node.selected
      }"
      role="treeitem"
      :aria-expanded="node.expanded"
    >
      <div class="treeview-node" @click="toggleNode(node)">
        <span class="treeview-label">{{ node.label }}</span>
      </div>
      <TreeviewList v-if="node.children && node.expanded" :nodes="node.children" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface TreeNode {
  id: number;
  label: string;
  expanded?: boolean;
  selected?: boolean;
  children?: TreeNode[];
}

export default defineComponent({
  name: 'TreeviewList',
  props: {
    nodes: {
      type: Array as PropType<TreeNode[]>,
      required: true,
    },
  },
  methods: {
    toggleNode(node: TreeNode) {
      node.expanded = !node.expanded;
    },
  },
});
</script>




<style scoped lang="css">
@import './TreeviewList.css';
</style>
