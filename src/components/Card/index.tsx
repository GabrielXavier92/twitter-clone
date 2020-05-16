import styled, { css } from 'styled-components';
import theme from 'styled-theming';

interface ICard {
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

const cardStyles = theme('mode', {
  light: css`
  border-color: ${(props) => (props.theme.card.borderColor)};
  border-width: 1px;
  border-style: solid;
  background-color: ${(props) => (props.theme.card.backgroudColor)};
  `,
  dark: css``,
});

export const Card = styled.div<ICard>`
  padding: ${(props) => (props.padding ? props.padding : props.theme.spacers.spacer3)};  
  border-radius: ${(props) => props.theme.spacers.spacer2};
  height: ${(props) => (props.height ? props.height : 'max-content')};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  margin-right: ${(props) => (props.padding ? props.padding : props.theme.spacers.spacer3)};
  margin-bottom: ${(props) => (props.padding ? props.padding : props.theme.spacers.spacer3)};
  position: inherit;
  ${cardStyles};
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;
