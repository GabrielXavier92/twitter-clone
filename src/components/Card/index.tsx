import styled, { css } from 'styled-components';
import theme from 'styled-theming';

interface ICard {
  width?: string;
  height?: string;
  margin?: string;
}

const cardStyles = theme('mode', {
  light: css`
  border-color: ${(props) => (props.theme.card.borderColor)};
  border-width: 1px;
  border-style: solid;
  `,
  dark: css``,
});

const Card = styled.div<ICard>`
  padding: 12px;  
  border-radius: 12px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  ${cardStyles};
`;


export default Card;
