import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TreeContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TreeNode = styled.li`
  padding: 8px 16px;
  margin-left: ${props => (props.level * 20) + 'px'};
  cursor: pointer;
  background-color: ${props => (props.isSelected ? '#e9ecef' : 'transparent')};

  &:hover {
    background-color: #f8f9fa;
  }
`;

const Treeviewlist = ({ nodes }) => {
  const renderTree = (nodes, level = 0) =>
    nodes.map(node => (
      <React.Fragment key={node.id}>
        <TreeNode level={level} isSelected={node.isSelected}>
          {node.label}
        </TreeNode>
        {node.isExpanded && node.children && renderTree(node.children, level + 1)}
      </React.Fragment>
    ));

  return <TreeContainer>{renderTree(nodes)}</TreeContainer>;
};

Treeviewlist.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isExpanded: PropTypes.bool,
      isSelected: PropTypes.bool,
      children: PropTypes.array,
    })
  ).isRequired,
};

export default Treeviewlist;