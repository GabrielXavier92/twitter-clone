import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const cardStyles = theme('mode', {
  light: css`
  border-color: ${(props) => (props.theme.card.borderColor)};
  border-width: 1px;
  border-style: solid;
  background-color: ${(props) => (props.theme.card.backgroudColor)};
  `,
  dark: css``,
});

export const Card = styled.div`
  padding: ${(props) => (props.theme.spacers.spacer3)};  
  border-radius: ${(props) => props.theme.spacers.spacer2};
  height: 'max-content';
  margin-right: ${(props) => (props.theme.spacers.spacer3)};
  margin-bottom: ${(props) => (props.theme.spacers.spacer3)};
  position: inherit;
  ${cardStyles};
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;
