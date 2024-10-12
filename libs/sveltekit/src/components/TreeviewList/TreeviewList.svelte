<script lang="ts">
  export interface TreeNode {
    id: number;
    name: string;
    children?: TreeNode[];
    expanded?: boolean;
  }

  export let nodes: TreeNode[] = [];
  export let selectedNodeId: number;
  export let onNodeSelect: (node: TreeNode) => void;

  function toggleNode(node: TreeNode) {
    node.expanded = !node.expanded;
  }

  function selectNode(node: TreeNode) {
    selectedNodeId = node.id;
    onNodeSelect(node);
  }
</script>

<ul>
  {#each nodes as node (node.id)}
    <li>
      <div
        role="treeitem"
        class="tree-node"
        aria-expanded={node.expanded ? 'true' : 'false'}
        aria-selected={node.id === selectedNodeId ? 'true' : 'false'}
        on:click={() => selectNode(node)}
        on:keydown={(event) => event.key === 'Enter' && selectNode(node)}
        tabindex="0"
      >
        <span
          class="toggle"
          on:click={(e) => { e.stopPropagation(); toggleNode(node); }}
          on:keydown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); toggleNode(node); } }}
          tabindex="0"
        >
          {#if node.children}
            {node.expanded ? '-' : '+'}
          {/if}
        </span>
        {node.name}
      </div>
      {#if node.expanded && node.children}
        <TreeviewList nodes={node.children} selectedNodeId={selectedNodeId} onNodeSelect={onNodeSelect} />
      {/if}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './TreeviewList.css';
</style>