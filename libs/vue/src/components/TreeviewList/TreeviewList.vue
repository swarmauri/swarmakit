<template>
  <ul class="treeview-list" role="tree">
    <li
      v-for="node in nodes"
      :key="node.id"
      class="treeview-node"
      :class="{ expanded: node.expanded, selected: node.selected }"
      @click="toggleNode(node)"
      @mouseover="onHover(node)"
      :aria-expanded="node.expanded"
      :aria-selected="node.selected"
    >
      <div class="treeview-content">
        <span class="treeview-icon" aria-hidden="true">
          {{ node.expanded ? '-' : '+' }}
        </span>
        <span class="treeview-label">{{ node.label }}</span>
      </div>
      <TreeviewList
        v-if="node.expanded && node.children"
        :nodes="node.children"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
      type: Array as () => TreeNode[],
      required: true,
    },
  },
  methods: {
    toggleNode(node: TreeNode) {
      node.expanded = !node.expanded;
      node.selected = !node.selected;
    },
    onHover(node: TreeNode) {
      // handle hover effect
    },
  },
});
</script>

<style lang="css">
@import './TreeviewList.css';
</style>