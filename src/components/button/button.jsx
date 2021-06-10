import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './button.scss';

const StyledButton = styled.button.attrs(props => ({ type: props.type }))`
  background-color: ${props => props.background};
  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

const Button = ({
  text,
  background,
  onHoverColor,
  type = 'text',
  isLoading = false,
  onClickAction = null,
}) => {
  return (
    <StyledButton
      background={background}
      hoverColor={onHoverColor}
      type={type}
      onClick={onClickAction}
      className={`button__container ` + (isLoading ? 'button is-loading' : '')}
    >
      {text}
    </StyledButton>
  );
};

Button.prototype = {
  text: PropTypes.string,
  background: PropTypes.string,
  onHoverColor: PropTypes.string,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  onClickAction: PropTypes.func,
};

export default Button;
