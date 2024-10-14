import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  background-color: #f0f4f8;
  color: #333;
  padding: 16px;
  border-radius: 4px;
  display: ${({ isDisplayed }) => (isDisplayed ? 'block' : 'none')};
  position: relative;
`;

const BannerContent = styled.div`
  margin-right: 40px;
`;

const CTABtn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    background-color: #0056b3;
  }
`;

const Banner = ({ message, isDisplayed, showCTA, onDismiss }) => {
  return (
    <BannerWrapper isDisplayed={isDisplayed}>
      <BannerContent>{message}</BannerContent>
      {showCTA && <CTABtn onClick={onDismiss}>Dismiss</CTABtn>}
    </BannerWrapper>
  );
};

Banner.propTypes = {
  message: PropTypes.string.isRequired,
  isDisplayed: PropTypes.bool,
  showCTA: PropTypes.bool,
  onDismiss: PropTypes.func,
};

Banner.defaultProps = {
  isDisplayed: true,
  showCTA: false,
  onDismiss: null,
};

export default Banner;