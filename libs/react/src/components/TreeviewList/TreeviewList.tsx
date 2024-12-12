import React, { useState } from 'react';

interface TreeNode {
  label: string;
  children?: TreeNode[];
}

interface TreeviewListProps {
  nodes: TreeNode[];
}

const TreeviewList: React.FC<TreeviewListProps> = ({ nodes }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleExpand = (label: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const handleSelect = (label: string) => {
    setSelectedNode(label);
  };

  const renderTree = (nodes: TreeNode[]) => {
    return nodes.map((node) => (
      <div key={node.label} className="tree-node">
        <div
          className={`tree-label ${
            selectedNode === node.label ? 'selected' : ''
          }`}
          onClick={() => handleSelect(node.label)}
          onMouseEnter={() => toggleExpand(node.label)}
          onMouseLeave={() => toggleExpand(node.label)}
        >
          {node.children && (
            <span
              className={`toggle ${
                expandedNodes.has(node.label) ? 'expanded' : 'collapsed'
              }`}
              onClick={() => toggleExpand(node.label)}
            >
              {expandedNodes.has(node.label) ? '-' : '+'}
            </span>
          )}
          {node.label}
        </div>
        {node.children && expandedNodes.has(node.label) && (
          <div className="tree-children">{renderTree(node.children)}</div>
        )}
      </div>
    ));
  };

  return <div className="treeview-list">{renderTree(nodes)}</div>;
};

export default TreeviewList;