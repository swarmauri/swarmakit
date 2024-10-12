import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TreeviewContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TreeNode = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#e0f7fa' : 'transparent')};
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TreeviewList = ({ nodes }) => {
  const [expandedNodes, setExpandedNodes] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);

  const toggleNode = (id) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (id) => {
    setSelectedNode(id);
  };

  const renderNodes = (nodes) => {
    return nodes.map((node) => (
      <TreeNode
        key={node.id}
        onClick={() => {
          toggleNode(node.id);
          handleSelect(node.id);
        }}
        isSelected={selectedNode === node.id}
      >
        {node.label}
        {node.children && expandedNodes[node.id] && <TreeviewContainer>{renderNodes(node.children)}</TreeviewContainer>}
      </TreeNode>
    ));
  };

  return <TreeviewContainer>{renderNodes(nodes)}</TreeviewContainer>;
};

TreeviewList.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.array,
    })
  ).isRequired,
};

export default TreeviewList;