import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const disabled = `
  background-color: #333;
  color: #aaa;
`;

const StyledButton = styled.button`
  padding: 0.25rem 0.5rem;
  ${p => (p.disabled ? disabled : '')} &:hover {
    background-color: #222;
  }
`;

const Button = ({submit, children, disabled, onClick}) => {
  return (
    <StyledButton
      onClick={disabled ? () => {} : onClick}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  submit: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  children: '',
  submit: false,
  disabled: false,
  onClick: () => {}
};

export default Button;
