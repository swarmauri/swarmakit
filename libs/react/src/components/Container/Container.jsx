import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: ${({ fluid, fullWidth }) => (fluid || fullWidth ? '100%' : '80%')};
  max-width: ${({ fluid }) => (fluid ? 'none' : '1200px')};
  margin: ${({ centered }) => (centered ? '0 auto' : '0')};
  padding: 20px;
  box-sizing: border-box;
`;

const Container = ({ children, fluid, centered, fullWidth }) => {
  return (
    <ContainerWrapper fluid={fluid} centered={centered} fullWidth={fullWidth}>
      {children}
    </ContainerWrapper>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  centered: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
  centered: false,
  fullWidth: false,
};

export default Container;