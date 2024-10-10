import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TreeviewContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TreeNode = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#e2e3e5' : '#f8f9fa')};
  transition: background-color 0.3s;

  &:hover {
    background-color: #cce5ff;
  }
`;

const TreeNodeLabel = styled.span`
  margin-left: 10px;
`;

const Treeviewlist = ({ nodes }) => {
  const [expandedNodes, setExpandedNodes] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);

  const toggleNode = (nodeId) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  const handleSelect = (nodeId) => {
    setSelectedNode(nodeId);
  };

  const renderNodes = (nodes, parentId = '') => {
    return nodes.map((node) => {
      const nodeId = parentId ? `${parentId}-${node.id}` : node.id;
      const isExpanded = expandedNodes[nodeId];
      const isSelected = selectedNode === nodeId;

      return (
        <TreeNode
          key={nodeId}
          onClick={() => handleSelect(nodeId)}
          selected={isSelected}
        >
          <div onClick={() => toggleNode(nodeId)}>
            {node.children && (isExpanded ? '[-]' : '[+]')}
            <TreeNodeLabel>{node.label}</TreeNodeLabel>
          </div>
          {isExpanded && node.children && (
            <TreeviewContainer>
              {renderNodes(node.children, nodeId)}
            </TreeviewContainer>
          )}
        </TreeNode>
      );
    });
  };

  return <TreeviewContainer>{renderNodes(nodes)}</TreeviewContainer>;
};

Treeviewlist.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.array,
    })
  ).isRequired,
};

export default Treeviewlist;