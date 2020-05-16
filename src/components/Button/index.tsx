import styled from 'styled-components';

interface IButton {
  width?: string;
  outlined?: boolean;
}

const Button = styled.button<IButton>`
  color: ${(props) => (props.outlined ? props.theme.colors.primary : '#FFF')};
  background-color: ${(props) => (props.outlined ? '#FFF' : props.theme.colors.primary)};
  border-radius: 25px;
  border-width: 1px;
  border-color: ${(props) => (props.outlined ? props.theme.colors.primary : '#FFF')};
  min-width: ${(props) => props.theme.spacers.spacer4};
  width: ${(props) => props.width};
  min-height: 40px;
  padding: ${(props) => props.theme.spacers.spacer1} ${(props) => props.theme.spacers.spacer4};
  font-size: ${(props) => props.theme.spacers.spacer3};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.outlined ? '#ebf6fe' : props.theme.colors.hoverPrimary)}; 
  }
`;

export default Button;
