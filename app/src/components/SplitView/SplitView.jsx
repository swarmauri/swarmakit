import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SplitViewWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Pane = styled.div`
  flex: ${({ size }) => size};
  transition: flex 0.3s ease;
  overflow: hidden;
  background-color: ${({ bgColor }) => bgColor || '#f0f0f0'};
`;

const SplitView = ({ leftSize, rightSize, leftContent, rightContent, visible }) => {
  const [sizes, setSizes] = useState({ left: leftSize, right: rightSize });

  if (!visible) {
    return null;
  }

  const resizePanes = () => {
    setSizes({ left: sizes.left === 1 ? 2 : 1, right: sizes.right === 1 ? 2 : 1 });
  };

  return (
    <SplitViewWrapper>
      <Pane size={sizes.left} bgColor="#dfe6e9">
        {leftContent}
      </Pane>
      <Pane size={sizes.right} bgColor="#b2bec3">
        {rightContent}
      </Pane>
      <button onClick={resizePanes}>Toggle Size</button>
    </SplitViewWrapper>
  );
};

SplitView.propTypes = {
  leftSize: PropTypes.number,
  rightSize: PropTypes.number,
  leftContent: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
  visible: PropTypes.bool,
};

SplitView.defaultProps = {
  leftSize: 1,
  rightSize: 1,
  visible: true,
};

export default SplitView;