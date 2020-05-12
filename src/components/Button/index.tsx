import React from 'react';
import styled from 'styled-components';

interface IButton {
  width?: string;
  outlined?: boolean;
  onClick?: any
}

const StyledButton = styled.button<IButton>`
  color: ${(props) => (props.outlined ? props.theme.colors.primary : '#FFF')};
  background-color: ${(props) => (props.outlined ? '#FFF' : props.theme.colors.primary)};
  border-radius: 25px;
  border-width: 1px;
  border-color: ${(props) => (props.outlined ? props.theme.colors.primary : '#FFF')};
  min-width: 50px;
  width: ${(props) => props.width};
  min-height: 40px;
  padding: 4px 40px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.outlined ? '#ebf6fe' : props.theme.colors.hoverPrimary)}; 
  }
`;

const Button: React.FC<IButton> = ({
  children, width, outlined, onClick,
}) => <StyledButton width={width} outlined={outlined} onClick={onClick}>{children}</StyledButton>;

export default Button;
